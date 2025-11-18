// Script to generate 400 consistent table reading questions
// Run with: node generate-table-questions-direct.js

const fs = require('fs');
const path = require('path');

// Helper to generate random table data
const generateTable = (rows, cols, min = 10, max = 99) => {
  const table = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    table.push(row);
  }
  return table;
};

// Generate random coordinates within valid ranges
const randomCoord = (start, end) => {
  return Math.floor(Math.random() * (end - start + 1)) + start;
};

// Generate a batch of questions with predetermined coordinates
const generateQuestionBatch = (startId, count, rows, cols, rowStart, colStart) => {
  const questions = [];
  for (let i = 0; i < count; i++) {
    const id = startId + i;
    const targetRow = randomCoord(rowStart, rowStart + rows - 1);
    const targetCol = randomCoord(colStart, colStart + cols - 1);
    
    const tableData = generateTable(rows, cols);
    const rowIndex = targetRow - rowStart;
    const colIndex = targetCol - colStart;
    const correctValue = tableData[rowIndex][colIndex];
    
    // Generate 3 wrong answers
    const wrongAnswers = [];
    while (wrongAnswers.length < 3) {
      const randomValue = Math.floor(Math.random() * 90) + 10;
      if (randomValue !== correctValue && !wrongAnswers.includes(randomValue)) {
        wrongAnswers.push(randomValue);
      }
    }
    
    const allOptions = [correctValue, ...wrongAnswers];
    const shuffled = allOptions.sort(() => Math.random() - 0.5);
    const correctIndex = shuffled.indexOf(correctValue);
    
    questions.push({
      id,
      targetRow,
      targetCol,
      rows,
      cols,
      rowStart,
      colStart,
      tableData,
      options: shuffled,
      correctIndex
    });
  }
  return questions;
};

// Generate column headers
const generateColumnHeaders = (colStart, cols) => {
  const headers = [""];
  for (let i = 0; i < cols; i++) {
    headers.push((colStart + i).toString());
  }
  return headers;
};

// Generate row labels
const generateRowLabels = (rowStart, rows) => {
  const labels = [];
  for (let i = 0; i < rows; i++) {
    labels.push((rowStart + i).toString());
  }
  return labels;
};

console.log('Generating 400 table reading questions...');

// Generate all questions
const all25x25 = generateQuestionBatch(1, 100, 25, 25, -12, -12);
const all30x30 = generateQuestionBatch(101, 100, 30, 30, -14, -14);
const all35x35 = generateQuestionBatch(201, 100, 35, 35, -17, -17);
const all40x40 = generateQuestionBatch(301, 100, 40, 40, -19, -19);

const allQuestions = [...all25x25, ...all30x30, ...all35x35, ...all40x40];

console.log(`Generated ${allQuestions.length} questions`);
console.log('Building output file...');

// Build the output
let output = `// Table Reading Questions for AFOQT - 400 Questions
// Auto-generated with consistent data for practice

export const tableReadingData = [\n`;

allQuestions.forEach((q, idx) => {
  const columnHeaders = generateColumnHeaders(q.colStart, q.cols);
  const rowLabels = generateRowLabels(q.rowStart, q.rows);
  
  output += `  {
    "id": ${q.id},
    "text": "Find the value at row ${q.targetRow}, column ${q.targetCol}",
    "tableSize": { "rows": ${q.rows}, "cols": ${q.cols} },
    "rowRange": { "start": ${q.rowStart}, "end": ${q.rowStart + q.rows - 1} },
    "colRange": { "start": ${q.colStart}, "end": ${q.colStart + q.cols - 1} },
    "targetRow": ${q.targetRow},
    "targetCol": ${q.targetCol},
    "tableData": ${JSON.stringify(q.tableData)},
    "columnHeaders": ${JSON.stringify(columnHeaders)},
    "rowLabels": ${JSON.stringify(rowLabels)},
    "options": ${JSON.stringify(q.options.map(v => v.toString()))},
    "correct": ${q.correctIndex},
    "explanation": "Locate row ${q.targetRow} on the vertical axis, then follow across to column ${q.targetCol}. The value is ${q.options[q.correctIndex]}."
  }${idx < allQuestions.length - 1 ? ',' : ''}\n`;
});

output += `];

export const TABLE_READING_CONFIG = {
  timeLimit: 7 * 60, // 7 minutes in seconds
  sectionName: "Table Reading",
  totalQuestions: 40
};

export default tableReadingData;`;

// Write to file
const outputPath = path.join(__dirname, 'src', 'data', 'tableReadingQuestions.js');
fs.writeFileSync(outputPath, output, 'utf8');

console.log(`✓ Successfully wrote ${allQuestions.length} questions to ${outputPath}`);
console.log('✓ File size:', (output.length / 1024 / 1024).toFixed(2), 'MB');
console.log('\nDone! Remember to update SubsectionSelector.js:');
console.log("  'table-reading': generateNumberedSets(400, 25, Table),");