// Script to randomize answer order in question data
// Run with: node randomizeAnswers.js

const fs = require('fs');

// Configuration
const inputFile = 'C:\\Users\\Viduus\\Desktop\\VS_Code_Projects\\afoqt-mock-exam\\src\\data\\arithmeticQuestions.js';  // Adjust path as needed
const outputFile = 'C:\\Users\\Viduus\\Desktop\\VS_Code_Projects\\afoqt-mock-exam\\src\\data\\arithmeticQuestions-randomized.js';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function randomizeQuestionAnswers(question) {
  // Create array of [option, isCorrect] pairs
  const optionsWithFlags = question.options.map((opt, idx) => ({
    text: opt,
    wasCorrect: idx === question.correct
  }));
  
  // Shuffle the options
  const shuffled = shuffleArray(optionsWithFlags);
  
  // Find new index of correct answer
  const newCorrectIndex = shuffled.findIndex(opt => opt.wasCorrect);
  
  return {
    ...question,
    options: shuffled.map(opt => opt.text),
    correct: newCorrectIndex
  };
}

function processFile() {
  console.log('Reading file...');
  const content = fs.readFileSync(inputFile, 'utf8');
  
  // Extract just the array data - match from [ to the closing ];
  const startIdx = content.indexOf('export const') + content.substring(content.indexOf('export const')).indexOf('[');
  const arrayStart = content.indexOf('[', startIdx);
  
  if (arrayStart === -1) {
    console.error('Could not find array start!');
    return;
  }
  
  // Find the matching closing bracket
  let depth = 0;
  let arrayEnd = arrayStart;
  for (let i = arrayStart; i < content.length; i++) {
    if (content[i] === '[' || content[i] === '{') depth++;
    if (content[i] === ']' || content[i] === '}') depth--;
    if (depth === 0 && content[i] === ']') {
      arrayEnd = i + 1;
      break;
    }
  }
  
  let arrayString = content.substring(arrayStart, arrayEnd);
  
  // Clean up the string for JSON parsing
  arrayString = arrayString
    .replace(/\/\/.*/g, '')           // Remove line comments
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
    .replace(/[""]/g, '"')            // Replace smart quotes with regular quotes
    .replace(/['']/g, "'")            // Replace smart apostrophes
    .replace(/,(\s*[}\]])/g, '$1')    // Remove trailing commas
    .replace(/(\w+):/g, '"$1":');     // Quote property names
  
  let questionsData;
  try {
    questionsData = JSON.parse(arrayString);
  } catch (e) {
    console.error('Could not parse question data:', e.message);
    console.log('\nTrying alternative method...');
    
    // Last resort: save to temp file and require it
    const tempFile = './temp-questions.json';
    fs.writeFileSync(tempFile, arrayString);
    console.log('Saved extracted data to', tempFile);
    console.log('Please check if the format looks correct, then run again');
    return;
  }
  
  if (!Array.isArray(questionsData)) {
    console.error('Parsed data is not an array!');
    return;
  }
  
  console.log(`Found ${questionsData.length} questions`);
  console.log('Randomizing answer orders...');
  
  // Randomize each question
  const randomized = questionsData.map(q => randomizeQuestionAnswers(q));
  
  // Check distribution
  const distribution = randomized.reduce((acc, q) => {
    acc[q.correct] = (acc[q.correct] || 0) + 1;
    return acc;
  }, {});
  
  console.log('\nAnswer distribution after randomization:');
  console.log('A (0):', distribution[0] || 0);
  console.log('B (1):', distribution[1] || 0);
  console.log('C (2):', distribution[2] || 0);
  console.log('D (3):', distribution[3] || 0);
  
  // Generate new file content
  const newContent = `// Arithmetic Reasoning Questions - RANDOMIZED
// Answer orders have been shuffled for better test validity

export const arithmeticData = ${JSON.stringify(randomized, null, 2)};

export const ARITHMETIC_CONFIG = {
  sectionName: "Arithmetic Reasoning",
  totalQuestions: ${randomized.length},
  timeLimit: 29,
  instructions: "Solve each arithmetic problem. Choose the best answer from the options provided."
};

export default arithmeticData;
`;
  
  fs.writeFileSync(outputFile, newContent);
  console.log(`\n✓ Randomized questions written to: ${outputFile}`);
  console.log('Review the file, then replace your original if it looks good!');
}

try {
  processFile();
} catch (error) {
  console.error('Error:', error.message);
  console.log('\nMake sure:');
  console.log('1. The input file path is correct');
  console.log('2. The file exports data as: export const arithmeticData = [...]');
  console.log('3. Each question has "options" array and "correct" index');
}