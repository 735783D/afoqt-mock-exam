// Block Counting Questions for AFOQT
// Count how many blocks touch a specific block in a 3D stack
// Note: This REQUIRES 3D images/diagrams of block stacks

export const blockCountingData = [
  {
    id: 1,
    text: "How many blocks touch Block 1 (marked with X)?",
    image: "/images/blocks/question-1.png", // Placeholder - needs actual 3D block images
    options: ["3", "4", "5", "6"],
    correct: 2,
    explanation: "Block 1 is touched by 5 other blocks: 2 on top, 2 on sides, 1 behind."
  },
  {
    id: 2,
    text: "How many blocks touch Block 5?",
    image: "/images/blocks/question-2.png",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation: "Block 5 is touched by 3 blocks: 1 on top, 2 adjacent."
  }
  // Venice: Generate 28 more questions
  // NOTE: This section REQUIRES 3D isometric images of block stacks
  // Each image needs a specific block marked and other blocks touching it
  // Consider using Three.js or creating isometric SVGs
];

export const BLOCK_COUNTING_CONFIG = {
  timeLimit: 4.5 * 60,
  sectionName: "Block Counting",
  totalQuestions: 30
};