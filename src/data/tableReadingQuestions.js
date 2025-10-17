// Table Reading Questions for AFOQT
// Quick data extraction from tables
// Note: This section will need table components to display data

export const tableReadingData = [
  {
    id: 1,
    text: "Using the table, find the value at row 3, column B:",
    table: {
      headers: ["", "A", "B", "C"],
      rows: [
        ["1", "5", "8", "3"],
        ["2", "7", "4", "9"],
        ["3", "2", "6", "1"]
      ]
    },
    options: ["2", "6", "1", "3"],
    correct: 1,
    explanation: "Row 3, Column B shows the value 6."
  },
  {
    id: 2,
    text: "What is the highest value in column C?",
    table: {
      headers: ["", "A", "B", "C"],
      rows: [
        ["1", "5", "8", "3"],
        ["2", "7", "4", "9"],
        ["3", "2", "6", "1"]
      ]
    },
    options: ["3", "6", "8", "9"],
    correct: 3,
    explanation: "Column C contains 3, 9, and 1. The highest value is 9."
  }
  // Venice: Generate 38 more table reading questions
  // Tables should have numeric data in grid format for quick lookup
];

export const TABLE_READING_CONFIG = {
  timeLimit: 7 * 60,
  sectionName: "Table Reading",
  totalQuestions: 40
};