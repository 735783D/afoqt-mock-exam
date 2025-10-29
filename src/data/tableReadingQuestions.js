// // Table Reading Questions for AFOQT
// // Quick data extraction from tables
// // Note: This section will need table components to display data


// // Helper function to generate random table data
// const generateTable = (rows, cols, min = 10, max = 99) => {
//   const table = [];
//   for (let i = 0; i < rows; i++) {
//     const row = [];
//     for (let j = 0; j < cols; j++) {
//       row.push(Math.floor(Math.random() * (max - min + 1)) + min);
//     }
//     table.push(row);
//   }
//   return table;
// };

// // Helper function to generate column headers
// const generateColumnHeaders = (colStart, cols) => {
//   const headers = [""];
//   for (let i = 0; i < cols; i++) {
//     headers.push((colStart + i).toString());
//   }
//   return headers;
// };

// // Helper function to generate row labels
// const generateRowLabels = (rowStart, rows) => {
//   const labels = [];
//   for (let i = 0; i < rows; i++) {
//     labels.push((rowStart + i).toString());
//   }
//   return labels;
// };

// // Helper function to create a complete table question
// const createTableQuestion = (id, text, rows, cols, targetRow, targetCol, rowStart, colStart) => {
//   const tableData = generateTable(rows, cols);
//   const columnHeaders = generateColumnHeaders(colStart, cols);
//   const rowLabels = generateRowLabels(rowStart, rows);
  
//   // Calculate the index in the array
//   const rowIndex = targetRow - rowStart;
//   const colIndex = targetCol - colStart;
  
//   // Get the correct answer
//   const correctValue = tableData[rowIndex][colIndex];
  
//   // Generate 3 random wrong answers
//   const wrongAnswers = [];
//   while (wrongAnswers.length < 3) {
//     const randomValue = Math.floor(Math.random() * 90) + 10;
//     if (randomValue !== correctValue && !wrongAnswers.includes(randomValue)) {
//       wrongAnswers.push(randomValue);
//     }
//   }
  
//   // Shuffle all options
//   const allOptions = [correctValue, ...wrongAnswers];
//   const shuffled = allOptions.sort(() => Math.random() - 0.5);
//   const correctIndex = shuffled.indexOf(correctValue);
  
//   return {
//     id,
//     text,
//     tableSize: { rows, cols },
//     rowRange: { start: rowStart, end: rowStart + rows - 1 },
//     colRange: { start: colStart, end: colStart + cols - 1 },
//     targetRow,
//     targetCol,
//     tableData,
//     columnHeaders,
//     rowLabels,
//     options: shuffled.map(v => v.toString()),
//     correct: correctIndex,
//     explanation: `Locate row ${targetRow} on the vertical axis, then follow across to column ${targetCol}. The value is ${correctValue}.`
//   };
// };

// // Generate all 40 questions following Aria's specifications
// export const tableReadingData = [
//   // Questions 1-10: 25x25 tables (rowStart: -12, colStart: -12)
//   createTableQuestion(1, "Find the value at row 8, column -5", 25, 25, 8, -5, -12, -12),
//   createTableQuestion(2, "Find the value at row -7, column 12", 25, 25, -7, 12, -12, -12),
//   createTableQuestion(3, "Find the value at row 5, column 3", 25, 25, 5, 3, -12, -12),
//   createTableQuestion(4, "Find the value at row -9, column -8", 25, 25, -9, -8, -12, -12),
//   createTableQuestion(5, "Find the value at row 2, column -10", 25, 25, 2, -10, -12, -12),
//   createTableQuestion(6, "Find the value at row -4, column 9", 25, 25, -4, 9, -12, -12),
//   createTableQuestion(7, "Find the value at row 10, column -3", 25, 25, 10, -3, -12, -12),
//   createTableQuestion(8, "Find the value at row -11, column 7", 25, 25, -11, 7, -12, -12),
//   createTableQuestion(9, "Find the value at row 6, column 11", 25, 25, 6, 11, -12, -12),
//   createTableQuestion(10, "Find the value at row -6, column -11", 25, 25, -6, -11, -12, -12),
  
//   // Questions 11-20: 30x30 tables (rowStart: -14, colStart: -14)
//   createTableQuestion(11, "Find the value at row 12, column -9", 30, 30, 12, -9, -14, -14),
//   createTableQuestion(12, "Find the value at row -8, column 13", 30, 30, -8, 13, -14, -14),
//   createTableQuestion(13, "Find the value at row 7, column 5", 30, 30, 7, 5, -14, -14),
//   createTableQuestion(14, "Find the value at row -12, column -7", 30, 30, -12, -7, -14, -14),
//   createTableQuestion(15, "Find the value at row 3, column -13", 30, 30, 3, -13, -14, -14),
//   createTableQuestion(16, "Find the value at row -5, column 11", 30, 30, -5, 11, -14, -14),
//   createTableQuestion(17, "Find the value at row 14, column -4", 30, 30, 14, -4, -14, -14),
//   createTableQuestion(18, "Find the value at row -10, column 9", 30, 30, -10, 9, -14, -14),
//   createTableQuestion(19, "Find the value at row 8, column 14", 30, 30, 8, 14, -14, -14),
//   createTableQuestion(20, "Find the value at row -13, column -10", 30, 30, -13, -10, -14, -14),
  
//   // Questions 21-30: 35x35 tables (rowStart: -17, colStart: -17)
//   createTableQuestion(21, "Find the value at row 15, column -11", 35, 35, 15, -11, -17, -17),
//   createTableQuestion(22, "Find the value at row -9, column 16", 35, 35, -9, 16, -17, -17),
//   createTableQuestion(23, "Find the value at row 10, column 8", 35, 35, 10, 8, -17, -17),
//   createTableQuestion(24, "Find the value at row -14, column -12", 35, 35, -14, -12, -17, -17),
//   createTableQuestion(25, "Find the value at row 4, column -15", 35, 35, 4, -15, -17, -17),
//   createTableQuestion(26, "Find the value at row -7, column 13", 35, 35, -7, 13, -17, -17),
//   createTableQuestion(27, "Find the value at row 17, column -6", 35, 35, 17, -6, -17, -17),
//   createTableQuestion(28, "Find the value at row -11, column 11", 35, 35, -11, 11, -17, -17),
//   createTableQuestion(29, "Find the value at row 12, column 15", 35, 35, 12, 15, -17, -17),
//   createTableQuestion(30, "Find the value at row -15, column -13", 35, 35, -15, -13, -17, -17),
  
//   // Questions 31-40: 40x40 tables (rowStart: -19, colStart: -19)
//   createTableQuestion(31, "Find the value at row 18, column -14", 40, 40, 18, -14, -19, -19),
//   createTableQuestion(32, "Find the value at row -12, column 17", 40, 40, -12, 17, -19, -19),
//   createTableQuestion(33, "Find the value at row 13, column 10", 40, 40, 13, 10, -19, -19),
//   createTableQuestion(34, "Find the value at row -16, column -11", 40, 40, -16, -11, -19, -19),
//   createTableQuestion(35, "Find the value at row 6, column -17", 40, 40, 6, -17, -19, -19),
//   createTableQuestion(36, "Find the value at row -8, column 15", 40, 40, -8, 15, -19, -19),
//   createTableQuestion(37, "Find the value at row 19, column -7", 40, 40, 19, -7, -19, -19),
//   createTableQuestion(38, "Find the value at row -14, column 12", 40, 40, -14, 12, -19, -19),
//   createTableQuestion(39, "Find the value at row 11, column 18", 40, 40, 11, 18, -19, -19),
//   createTableQuestion(40, "Find the value at row -17, column -15", 40, 40, -17, -15, -19, -19)
// ];

// export const TABLE_READING_CONFIG = {
//   timeLimit: 7 * 60, // 7 minutes in seconds
//   sectionName: "Table Reading",
//   totalQuestions: 40
// };

// export default tableReadingData;

// Table Reading Questions for AFOQT
// Quick data extraction from large tables (25x25 to 40x40)
// 40 questions total, 7 minute time limit

// Helper function to generate random table data
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

// Helper function to generate column headers
const generateColumnHeaders = (colStart, cols) => {
  const headers = [""];
  for (let i = 0; i < cols; i++) {
    headers.push((colStart + i).toString());
  }
  return headers;
};

// Helper function to generate row labels
const generateRowLabels = (rowStart, rows) => {
  const labels = [];
  for (let i = 0; i < rows; i++) {
    labels.push((rowStart + i).toString());
  }
  return labels;
};

// Helper function to create a complete table question
const createTableQuestion = (id, text, rows, cols, targetRow, targetCol, rowStart, colStart) => {
  const tableData = generateTable(rows, cols);
  const columnHeaders = generateColumnHeaders(colStart, cols);
  const rowLabels = generateRowLabels(rowStart, rows);
  
  // Calculate the index in the array
  const rowIndex = targetRow - rowStart;
  const colIndex = targetCol - colStart;
  
  // Get the correct answer
  const correctValue = tableData[rowIndex][colIndex];
  
  // Generate 3 random wrong answers
  const wrongAnswers = [];
  while (wrongAnswers.length < 3) {
    const randomValue = Math.floor(Math.random() * 90) + 10;
    if (randomValue !== correctValue && !wrongAnswers.includes(randomValue)) {
      wrongAnswers.push(randomValue);
    }
  }
  
  // Shuffle all options
  const allOptions = [correctValue, ...wrongAnswers];
  const shuffled = allOptions.sort(() => Math.random() - 0.5);
  const correctIndex = shuffled.indexOf(correctValue);
  
  return {
    id,
    text,
    tableSize: { rows, cols },
    rowRange: { start: rowStart, end: rowStart + rows - 1 },
    colRange: { start: colStart, end: colStart + cols - 1 },
    targetRow,
    targetCol,
    tableData,
    columnHeaders,
    rowLabels,
    options: shuffled.map(v => v.toString()),
    correct: correctIndex,
    explanation: `Locate row ${targetRow} on the vertical axis, then follow across to column ${targetCol}. The value is ${correctValue}.`
  };
};

// Generate all 40 questions following Aria's specifications
export const tableReadingData = [
  // Questions 1-10: 25x25 tables (rowStart: -12, colStart: -12)
  createTableQuestion(1, "Find the value at row 8, column -5", 25, 25, 8, -5, -12, -12),
  createTableQuestion(2, "Find the value at row -7, column 12", 25, 25, -7, 12, -12, -12),
  createTableQuestion(3, "Find the value at row 5, column 3", 25, 25, 5, 3, -12, -12),
  createTableQuestion(4, "Find the value at row -9, column -8", 25, 25, -9, -8, -12, -12),
  createTableQuestion(5, "Find the value at row 2, column -10", 25, 25, 2, -10, -12, -12),
  createTableQuestion(6, "Find the value at row -4, column 9", 25, 25, -4, 9, -12, -12),
  createTableQuestion(7, "Find the value at row 10, column -3", 25, 25, 10, -3, -12, -12),
  createTableQuestion(8, "Find the value at row -11, column 7", 25, 25, -11, 7, -12, -12),
  createTableQuestion(9, "Find the value at row 6, column 11", 25, 25, 6, 11, -12, -12),
  createTableQuestion(10, "Find the value at row -6, column -11", 25, 25, -6, -11, -12, -12),
  
  // Questions 11-20: 30x30 tables (rowStart: -14, colStart: -14)
  createTableQuestion(11, "Find the value at row 12, column -9", 30, 30, 12, -9, -14, -14),
  createTableQuestion(12, "Find the value at row -8, column 13", 30, 30, -8, 13, -14, -14),
  createTableQuestion(13, "Find the value at row 7, column 5", 30, 30, 7, 5, -14, -14),
  createTableQuestion(14, "Find the value at row -12, column -7", 30, 30, -12, -7, -14, -14),
  createTableQuestion(15, "Find the value at row 3, column -13", 30, 30, 3, -13, -14, -14),
  createTableQuestion(16, "Find the value at row -5, column 11", 30, 30, -5, 11, -14, -14),
  createTableQuestion(17, "Find the value at row 14, column -4", 30, 30, 14, -4, -14, -14),
  createTableQuestion(18, "Find the value at row -10, column 9", 30, 30, -10, 9, -14, -14),
  createTableQuestion(19, "Find the value at row 8, column 14", 30, 30, 8, 14, -14, -14),
  createTableQuestion(20, "Find the value at row -13, column -10", 30, 30, -13, -10, -14, -14),
  
  // Questions 21-30: 35x35 tables (rowStart: -17, colStart: -17)
  createTableQuestion(21, "Find the value at row 15, column -11", 35, 35, 15, -11, -17, -17),
  createTableQuestion(22, "Find the value at row -9, column 16", 35, 35, -9, 16, -17, -17),
  createTableQuestion(23, "Find the value at row 10, column 8", 35, 35, 10, 8, -17, -17),
  createTableQuestion(24, "Find the value at row -14, column -12", 35, 35, -14, -12, -17, -17),
  createTableQuestion(25, "Find the value at row 4, column -15", 35, 35, 4, -15, -17, -17),
  createTableQuestion(26, "Find the value at row -7, column 13", 35, 35, -7, 13, -17, -17),
  createTableQuestion(27, "Find the value at row 17, column -6", 35, 35, 17, -6, -17, -17),
  createTableQuestion(28, "Find the value at row -11, column 11", 35, 35, -11, 11, -17, -17),
  createTableQuestion(29, "Find the value at row 12, column 15", 35, 35, 12, 15, -17, -17),
  createTableQuestion(30, "Find the value at row -15, column -13", 35, 35, -15, -13, -17, -17),
  
  // Questions 31-40: 40x40 tables (rowStart: -19, colStart: -19)
  createTableQuestion(31, "Find the value at row 18, column -14", 40, 40, 18, -14, -19, -19),
  createTableQuestion(32, "Find the value at row -12, column 17", 40, 40, -12, 17, -19, -19),
  createTableQuestion(33, "Find the value at row 13, column 10", 40, 40, 13, 10, -19, -19),
  createTableQuestion(34, "Find the value at row -16, column -11", 40, 40, -16, -11, -19, -19),
  createTableQuestion(35, "Find the value at row 6, column -17", 40, 40, 6, -17, -19, -19),
  createTableQuestion(36, "Find the value at row -8, column 15", 40, 40, -8, 15, -19, -19),
  createTableQuestion(37, "Find the value at row 19, column -7", 40, 40, 19, -7, -19, -19),
  createTableQuestion(38, "Find the value at row -14, column 12", 40, 40, -14, 12, -19, -19),
  createTableQuestion(39, "Find the value at row 11, column 18", 40, 40, 11, 18, -19, -19),
  createTableQuestion(40, "Find the value at row -17, column -15", 40, 40, -17, -15, -19, -19),
  
  // Questions 41-50: 25x25 tables
  createTableQuestion(41, "Find the value at row 9, column -7", 25, 25, 9, -7, -12, -12),
  createTableQuestion(42, "Find the value at row -8, column 10", 25, 25, -8, 10, -12, -12),
  createTableQuestion(43, "Find the value at row 4, column 6", 25, 25, 4, 6, -12, -12),
  createTableQuestion(44, "Find the value at row -10, column -6", 25, 25, -10, -6, -12, -12),
  createTableQuestion(45, "Find the value at row 7, column -9", 25, 25, 7, -9, -12, -12),
  createTableQuestion(46, "Find the value at row -5, column 8", 25, 25, -5, 8, -12, -12),
  createTableQuestion(47, "Find the value at row 11, column -4", 25, 25, 11, -4, -12, -12),
  createTableQuestion(48, "Find the value at row -3, column 5", 25, 25, -3, 5, -12, -12),
  createTableQuestion(49, "Find the value at row 3, column 10", 25, 25, 3, 10, -12, -12),
  createTableQuestion(50, "Find the value at row -7, column -10", 25, 25, -7, -10, -12, -12),
  
  // Questions 51-60: 30x30 tables
  createTableQuestion(51, "Find the value at row 13, column -11", 30, 30, 13, -11, -14, -14),
  createTableQuestion(52, "Find the value at row -9, column 12", 30, 30, -9, 12, -14, -14),
  createTableQuestion(53, "Find the value at row 6, column 8", 30, 30, 6, 8, -14, -14),
  createTableQuestion(54, "Find the value at row -11, column -8", 30, 30, -11, -8, -14, -14),
  createTableQuestion(55, "Find the value at row 9, column -12", 30, 30, 9, -12, -14, -14),
  createTableQuestion(56, "Find the value at row -6, column 14", 30, 30, -6, 14, -14, -14),
  createTableQuestion(57, "Find the value at row 15, column -5", 30, 30, 15, -5, -14, -14),
  createTableQuestion(58, "Find the value at row -12, column 10", 30, 30, -12, 10, -14, -14),
  createTableQuestion(59, "Find the value at row 11, column 13", 30, 30, 11, 13, -14, -14),
  createTableQuestion(60, "Find the value at row -7, column -13", 30, 30, -7, -13, -14, -14),
  
  // Questions 61-70: 35x35 tables
  createTableQuestion(61, "Find the value at row 16, column -13", 35, 35, 16, -13, -17, -17),
  createTableQuestion(62, "Find the value at row -10, column 15", 35, 35, -10, 15, -17, -17),
  createTableQuestion(63, "Find the value at row 9, column 11", 35, 35, 9, 11, -17, -17),
  createTableQuestion(64, "Find the value at row -13, column -9", 35, 35, -13, -9, -17, -17),
  createTableQuestion(65, "Find the value at row 5, column -14", 35, 35, 5, -14, -17, -17),
  createTableQuestion(66, "Find the value at row -8, column 14", 35, 35, -8, 14, -17, -17),
  createTableQuestion(67, "Find the value at row 14, column -8", 35, 35, 14, -8, -17, -17),
  createTableQuestion(68, "Find the value at row -12, column 9", 35, 35, -12, 9, -17, -17),
  createTableQuestion(69, "Find the value at row 13, column 16", 35, 35, 13, 16, -17, -17),
  createTableQuestion(70, "Find the value at row -16, column -14", 35, 35, -16, -14, -17, -17),
  
  // Questions 71-80: 40x40 tables
  createTableQuestion(71, "Find the value at row 17, column -13", 40, 40, 17, -13, -19, -19),
  createTableQuestion(72, "Find the value at row -11, column 16", 40, 40, -11, 16, -19, -19),
  createTableQuestion(73, "Find the value at row 14, column 12", 40, 40, 14, 12, -19, -19),
  createTableQuestion(74, "Find the value at row -15, column -12", 40, 40, -15, -12, -19, -19),
  createTableQuestion(75, "Find the value at row 7, column -16", 40, 40, 7, -16, -19, -19),
  createTableQuestion(76, "Find the value at row -9, column 14", 40, 40, -9, 14, -19, -19),
  createTableQuestion(77, "Find the value at row 16, column -8", 40, 40, 16, -8, -19, -19),
  createTableQuestion(78, "Find the value at row -13, column 13", 40, 40, -13, 13, -19, -19),
  createTableQuestion(79, "Find the value at row 10, column 17", 40, 40, 10, 17, -19, -19),
  createTableQuestion(80, "Find the value at row -18, column -16", 40, 40, -18, -16, -19, -19),
  
  // Questions 81-90: 25x25 tables
  createTableQuestion(81, "Find the value at row 6, column -8", 25, 25, 6, -8, -12, -12),
  createTableQuestion(82, "Find the value at row -9, column 11", 25, 25, -9, 11, -12, -12),
  createTableQuestion(83, "Find the value at row 8, column 4", 25, 25, 8, 4, -12, -12),
  createTableQuestion(84, "Find the value at row -4, column -7", 25, 25, -4, -7, -12, -12),
  createTableQuestion(85, "Find the value at row 10, column -11", 25, 25, 10, -11, -12, -12),
  createTableQuestion(86, "Find the value at row -11, column 6", 25, 25, -11, 6, -12, -12),
  createTableQuestion(87, "Find the value at row 5, column -6", 25, 25, 5, -6, -12, -12),
  createTableQuestion(88, "Find the value at row -6, column 9", 25, 25, -6, 9, -12, -12),
  createTableQuestion(89, "Find the value at row 9, column 7", 25, 25, 9, 7, -12, -12),
  createTableQuestion(90, "Find the value at row -8, column -9", 25, 25, -8, -9, -12, -12),
  
  // Questions 91-100: 30x30 tables
  createTableQuestion(91, "Find the value at row 10, column -10", 30, 30, 10, -10, -14, -14),
  createTableQuestion(92, "Find the value at row -13, column 11", 30, 30, -13, 11, -14, -14),
  createTableQuestion(93, "Find the value at row 5, column 7", 30, 30, 5, 7, -14, -14),
  createTableQuestion(94, "Find the value at row -10, column -11", 30, 30, -10, -11, -14, -14),
  createTableQuestion(95, "Find the value at row 11, column -6", 30, 30, 11, -6, -14, -14),
  createTableQuestion(96, "Find the value at row -4, column 13", 30, 30, -4, 13, -14, -14),
  createTableQuestion(97, "Find the value at row 13, column -7", 30, 30, 13, -7, -14, -14),
  createTableQuestion(98, "Find the value at row -11, column 8", 30, 30, -11, 8, -14, -14),
  createTableQuestion(99, "Find the value at row 4, column 12", 30, 30, 4, 12, -14, -14),
  createTableQuestion(100, "Find the value at row -8, column -12", 30, 30, -8, -12, -14, -14),
  
  // Questions 101-110: 35x35 tables
  createTableQuestion(101, "Find the value at row 11, column -12", 35, 35, 11, -12, -17, -17),
  createTableQuestion(102, "Find the value at row -15, column 10", 35, 35, -15, 10, -17, -17),
  createTableQuestion(103, "Find the value at row 7, column 9", 35, 35, 7, 9, -17, -17),
  createTableQuestion(104, "Find the value at row -11, column -10", 35, 35, -11, -10, -17, -17),
  createTableQuestion(105, "Find the value at row 15, column -16", 35, 35, 15, -16, -17, -17),
  createTableQuestion(106, "Find the value at row -6, column 12", 35, 35, -6, 12, -17, -17),
  createTableQuestion(107, "Find the value at row 16, column -7", 35, 35, 16, -7, -17, -17),
  createTableQuestion(108, "Find the value at row -14, column 14", 35, 35, -14, 14, -17, -17),
  createTableQuestion(109, "Find the value at row 8, column 13", 35, 35, 8, 13, -17, -17),
  createTableQuestion(110, "Find the value at row -9, column -15", 35, 35, -9, -15, -17, -17),
  
  // Questions 111-120: 40x40 tables
  createTableQuestion(111, "Find the value at row 15, column -15", 40, 40, 15, -15, -19, -19),
  createTableQuestion(112, "Find the value at row -10, column 18", 40, 40, -10, 18, -19, -19),
  createTableQuestion(113, "Find the value at row 12, column 9", 40, 40, 12, 9, -19, -19),
  createTableQuestion(114, "Find the value at row -17, column -10", 40, 40, -17, -10, -19, -19),
  createTableQuestion(115, "Find the value at row 8, column -18", 40, 40, 8, -18, -19, -19),
  createTableQuestion(116, "Find the value at row -7, column 16", 40, 40, -7, 16, -19, -19),
  createTableQuestion(117, "Find the value at row 18, column -9", 40, 40, 18, -9, -19, -19),
  createTableQuestion(118, "Find the value at row -15, column 11", 40, 40, -15, 11, -19, -19),
  createTableQuestion(119, "Find the value at row 9, column 19", 40, 40, 9, 19, -19, -19),
  createTableQuestion(120, "Find the value at row -16, column -14", 40, 40, -16, -14, -19, -19),
  
  // Questions 121-130: 25x25 tables
  createTableQuestion(121, "Find the value at row 7, column -10", 25, 25, 7, -10, -12, -12),
  createTableQuestion(122, "Find the value at row -10, column 9", 25, 25, -10, 9, -12, -12),
  createTableQuestion(123, "Find the value at row 3, column 7", 25, 25, 3, 7, -12, -12),
  createTableQuestion(124, "Find the value at row -5, column -9", 25, 25, -5, -9, -12, -12),
  createTableQuestion(125, "Find the value at row 11, column -7", 25, 25, 11, -7, -12, -12),
  createTableQuestion(126, "Find the value at row -7, column 10", 25, 25, -7, 10, -12, -12),
  createTableQuestion(127, "Find the value at row 4, column -5", 25, 25, 4, -5, -12, -12),
  createTableQuestion(128, "Find the value at row -9, column 4", 25, 25, -9, 4, -12, -12),
  createTableQuestion(129, "Find the value at row 8, column 11", 25, 25, 8, 11, -12, -12),
  createTableQuestion(130, "Find the value at row -3, column -8", 25, 25, -3, -8, -12, -12),
  
  // Questions 131-140: 30x30 tables
  createTableQuestion(131, "Find the value at row 14, column -8", 30, 30, 14, -8, -14, -14),
  createTableQuestion(132, "Find the value at row -7, column 15", 30, 30, -7, 15, -14, -14),
  createTableQuestion(133, "Find the value at row 9, column 6", 30, 30, 9, 6, -14, -14),
  createTableQuestion(134, "Find the value at row -14, column -6", 30, 30, -14, -6, -14, -14),
  createTableQuestion(135, "Find the value at row 6, column -11", 30, 30, 6, -11, -14, -14),
  createTableQuestion(136, "Find the value at row -5, column 12", 30, 30, -5, 12, -14, -14),
  createTableQuestion(137, "Find the value at row 12, column -13", 30, 30, 12, -13, -14, -14),
  createTableQuestion(138, "Find the value at row -9, column 7", 30, 30, -9, 7, -14, -14),
  createTableQuestion(139, "Find the value at row 7, column 10", 30, 30, 7, 10, -14, -14),
  createTableQuestion(140, "Find the value at row -12, column -9", 30, 30, -12, -9, -14, -14),
  
  // Questions 141-150: 35x35 tables
  createTableQuestion(141, "Find the value at row 14, column -10", 35, 35, 14, -10, -17, -17),
  createTableQuestion(142, "Find the value at row -16, column 12", 35, 35, -16, 12, -17, -17),
  createTableQuestion(143, "Find the value at row 6, column 10", 35, 35, 6, 10, -17, -17),
  createTableQuestion(144, "Find the value at row -10, column -13", 35, 35, -10, -13, -17, -17),
  createTableQuestion(145, "Find the value at row 12, column -15", 35, 35, 12, -15, -17, -17),
  createTableQuestion(146, "Find the value at row -5, column 15", 35, 35, -5, 15, -17, -17),
  createTableQuestion(147, "Find the value at row 17, column -9", 35, 35, 17, -9, -17, -17),
  createTableQuestion(148, "Find the value at row -13, column 8", 35, 35, -13, 8, -17, -17),
  createTableQuestion(149, "Find the value at row 11, column 14", 35, 35, 11, 14, -17, -17),
  createTableQuestion(150, "Find the value at row -8, column -16", 35, 35, -8, -16, -17, -17),
  
  // Questions 151-160: 40x40 tables
  createTableQuestion(151, "Find the value at row 19, column -12", 40, 40, 19, -12, -19, -19),
  createTableQuestion(152, "Find the value at row -14, column 19", 40, 40, -14, 19, -19, -19),
  createTableQuestion(153, "Find the value at row 11, column 11", 40, 40, 11, 11, -19, -19),
  createTableQuestion(154, "Find the value at row -13, column -13", 40, 40, -13, -13, -19, -19),
  createTableQuestion(155, "Find the value at row 5, column -15", 40, 40, 5, -15, -19, -19),
  createTableQuestion(156, "Find the value at row -6, column 17", 40, 40, -6, 17, -19, -19),
  createTableQuestion(157, "Find the value at row 17, column -10", 40, 40, 17, -10, -19, -19),
  createTableQuestion(158, "Find the value at row -11, column 14", 40, 40, -11, 14, -19, -19),
  createTableQuestion(159, "Find the value at row 13, column 16", 40, 40, 13, 16, -19, -19),
  createTableQuestion(160, "Find the value at row -19, column -17", 40, 40, -19, -17, -19, -19),
  
  // Questions 161-170: 25x25 tables
  createTableQuestion(161, "Find the value at row 5, column -11", 25, 25, 5, -11, -12, -12),
  createTableQuestion(162, "Find the value at row -11, column 8", 25, 25, -11, 8, -12, -12),
  createTableQuestion(163, "Find the value at row 9, column 5", 25, 25, 9, 5, -12, -12),
  createTableQuestion(164, "Find the value at row -6, column -10", 25, 25, -6, -10, -12, -12),
  createTableQuestion(165, "Find the value at row 6, column -9", 25, 25, 6, -9, -12, -12),
  createTableQuestion(166, "Find the value at row -8, column 7", 25, 25, -8, 7, -12, -12),
  createTableQuestion(167, "Find the value at row 10, column -5", 25, 25, 10, -5, -12, -12),
  createTableQuestion(168, "Find the value at row -4, column 11", 25, 25, -4, 11, -12, -12),
  createTableQuestion(169, "Find the value at row 7, column 8", 25, 25, 7, 8, -12, -12),
  createTableQuestion(170, "Find the value at row -10, column -7", 25, 25, -10, -7, -12, -12),
  
  // Questions 171-180: 30x30 tables
  createTableQuestion(171, "Find the value at row 8, column -14", 30, 30, 8, -14, -14, -14),
  createTableQuestion(172, "Find the value at row -11, column 9", 30, 30, -11, 9, -14, -14),
  createTableQuestion(173, "Find the value at row 13, column 5", 30, 30, 13, 5, -14, -14),
  createTableQuestion(174, "Find the value at row -6, column -10", 30, 30, -6, -10, -14, -14),
  createTableQuestion(175, "Find the value at row 10, column -7", 30, 30, 10, -7, -14, -14),
  createTableQuestion(176, "Find the value at row -13, column 14", 30, 30, -13, 14, -14, -14),
  createTableQuestion(177, "Find the value at row 15, column -11", 30, 30, 15, -11, -14, -14),
  createTableQuestion(178, "Find the value at row -8, column 6", 30, 30, -8, 6, -14, -14),
  createTableQuestion(179, "Find the value at row 5, column 11", 30, 30, 5, 11, -14, -14),
  createTableQuestion(180, "Find the value at row -10, column -14", 30, 30, -10, -14, -14, -14),
  
  // Questions 181-190: 35x35 tables
  createTableQuestion(181, "Find the value at row 13, column -14", 35, 35, 13, -14, -17, -17),
  createTableQuestion(182, "Find the value at row -12, column 17", 35, 35, -12, 17, -17, -17),
  createTableQuestion(183, "Find the value at row 10, column 7", 35, 35, 10, 7, -17, -17),
  createTableQuestion(184, "Find the value at row -15, column -11", 35, 35, -15, -11, -17, -17),
  createTableQuestion(185, "Find the value at row 6, column -13", 35, 35, 6, -13, -17, -17),
  createTableQuestion(186, "Find the value at row -9, column 16", 35, 35, -9, 16, -17, -17),
  createTableQuestion(187, "Find the value at row 15, column -12", 35, 35, 15, -12, -17, -17),
  createTableQuestion(188, "Find the value at row -11, column 13", 35, 35, -11, 13, -17, -17),
  createTableQuestion(189, "Find the value at row 9, column 15", 35, 35, 9, 15, -17, -17),
  createTableQuestion(190, "Find the value at row -14, column -15", 35, 35, -14, -15, -17, -17),
  
  // Questions 191-200: 40x40 tables
  createTableQuestion(191, "Find the value at row 16, column -17", 40, 40, 16, -17, -19, -19),
  createTableQuestion(192, "Find the value at row -18, column 15", 40, 40, -18, 15, -19, -19),
  createTableQuestion(193, "Find the value at row 14, column 13", 40, 40, 14, 13, -19, -19),
  createTableQuestion(194, "Find the value at row -12, column -14", 40, 40, -12, -14, -19, -19),
  createTableQuestion(195, "Find the value at row 10, column -16", 40, 40, 10, -16, -19, -19),
  createTableQuestion(196, "Find the value at row -9, column 18", 40, 40, -9, 18, -19, -19),
  createTableQuestion(197, "Find the value at row 19, column -11", 40, 40, 19, -11, -19, -19),
  createTableQuestion(198, "Find the value at row -16, column 10", 40, 40, -16, 10, -19, -19),
  createTableQuestion(199, "Find the value at row 12, column 19", 40, 40, 12, 19, -19, -19),
  createTableQuestion(200, "Find the value at row -17, column -18", 40, 40, -17, -18, -19, -19)
];

export const TABLE_READING_CONFIG = {
  timeLimit: 7 * 60, // 7 minutes in seconds
  sectionName: "Table Reading",
  totalQuestions: 40
};

export default tableReadingData;