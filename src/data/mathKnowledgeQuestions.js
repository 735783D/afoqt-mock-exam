
// Math Knowledge Questions for AFOQT
// Algebra, geometry, and mathematical concepts

export const mathKnowledgeData = [
  {
    id: 1,
    text: "If 3x + 5 = 20, what is the value of x?",
    options: ["3", "5", "7", "9"],
    correct: 1,
    explanation: "Subtract 5 from both sides: 3x = 15. Divide by 3: x = 5."
  },
  {
    id: 2,
    text: "What is the square root of 144?",
    options: ["10", "11", "12", "14"],
    correct: 2,
    explanation: "√144 = 12, because 12 × 12 = 144."
  },
  {
    id: 3,
    text: "In a right triangle, if one angle is 90° and another is 30°, what is the third angle?",
    options: ["30°", "45°", "60°", "90°"],
    correct: 2,
    explanation: "The sum of angles in a triangle is 180°. 180° - 90° - 30° = 60°."
  }
  // Venice: Generate 22 more questions covering algebra, geometry, basic math concepts
];

export const MATH_KNOWLEDGE_CONFIG = {
  timeLimit: 22 * 60,
  sectionName: "Math Knowledge",
  totalQuestions: 25
};