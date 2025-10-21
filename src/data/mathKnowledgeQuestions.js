// Math Knowledge Questions for AFOQT
// Batch 1 — Algebra, geometry, and general math concepts
// Note: ALL `correct` fields use 0-based indexing.

export const mathKnowledgeData = [
  {
    id: 1,
    text: "If 5x − 7 = 18, what is the value of x?",
    options: ["3", "4", "5", "6"],
    correct: 2,
    explanation: "Add 7 to both sides: 5x = 25. Divide by 5 → x = 5."
  },
  {
    id: 2,
    text: "What is the value of 3<sup>2</sup> + 4<sup>2</sup>?",
    options: ["12", "18", "25", "28"],
    correct: 2,
    explanation: "3² + 4² = 9 + 16 = 25."
  },
  {
    id: 3,
    text: "Simplify: (2x + 3x) − (x − 5)",
    options: ["4x − 5", "5x − x", "4x + 5", "6x + 5"],
    correct: 2,
    explanation: "2x + 3x = 5x. Subtract (x − 5): 5x − x + 5 = 4x + 5."
  },
  {
    id: 4,
    text: "A rectangle has a length of 12 cm and width of 5 cm. What is its area?",
    options: ["17 cm²", "60 cm²", "24 cm²", "100 cm²"],
    correct: 1,
    explanation: "Area = length × width = 12 × 5 = 60 cm².",
    diagram: "RectangleDiagram",
    diagramProps: { length: 12, width: 5 }
  },
  {
    id: 5,
    text: "Solve for y: 4y + 8 = 20",
    options: ["2", "3", "4", "5"],
    correct: 1,
    explanation: "Subtract 8: 4y = 12. Divide by 4 → y = 3."
  },
  {
    id: 6,
    text: "If a triangle’s angles are 35°, 65°, and x°, what is x?",
    options: ["80°", "90°", "100°", "120°"],
    correct: 0,
    explanation: "Sum of angles = 180°. 180 − (35 + 65) = 80°."
  },
  {
    id: 7,
    text: "What is 15% of 240?",
    options: ["30", "32", "34", "36"],
    correct: 3,
    explanation: "15% × 240 = 0.15 × 240 = 36."
  },
  {
    id: 8,
    text: "Simplify: (6x<sup>2</sup>y)(2xy<sup>3</sup>)",
    options: ["12x<sup>3</sup>y<sup>4</sup>", "8x<sup>3</sup>y<sup>3</sup>", "12x<sup>2</sup>y<sup>3</sup>", "12x<sup>3</sup>y<sup>3</sup>"],
    correct: 0,
    explanation: "Multiply coefficients 6×2=12; add exponents: x²·x = x³, y·y³ = y⁴ → 12x³y⁴."
  },
  {
    id: 9,
    text: "The diameter of a circle is 14 cm. What is its circumference? (Use π ≈ 3.14)",
    options: ["21.98 cm", "43.96 cm", "87.92 cm", "22 cm"],
    correct: 1,
    explanation: "C = πd = 3.14 × 14 = 43.96 cm.",
    diagram: "CircleDiagram",
    diagramProps: { diameter: 14 }
  },
  {
    id: 10,
    text: "Evaluate: √81 + √49",
    options: ["12", "14", "15", "16"],
    correct: 3,
    explanation: "√81 = 9 and √49 = 7 → 9 + 7 = 16."
  },
  {
    id: 11,
    text: "If 2x + 3y = 12 and y = 2, find x.",
    options: ["2", "3", "4", "6"],
    correct: 1,
    explanation: "Substitute y = 2 → 2x + 6 = 12 → 2x = 6 → x = 3."
  },
  {
    id: 12,
    text: "Simplify: (5a<sup>2</sup>b<sup>3</sup>) ÷ (a b)",
    options: ["5ab<sup>2</sup>", "5a<sup>2</sup>b<sup>2</sup>", "5a<sup>3</sup>b<sup>4</sup>", "5ab<sup>3</sup>"],
    correct: 0,
    explanation: "a²/a = a, b³/b = b² → 5ab²."
  },
  {
    id: 13,
    text: "A cube has a side length of 6 cm. What is its volume?",
    options: ["36 cm³", "72 cm³", "216 cm³", "256 cm³"],
    correct: 2,
    explanation: "Volume = s³ = 6³ = 216 cm³.",
    diagram: "CubeDiagram",
    diagramProps: { side: 6 }
  },
  {
    id: 14,
    text: "What is 2<sup>4</sup> × 2<sup>3</sup>?",
    options: ["2<sup>7</sup>", "2<sup>12</sup>", "2<sup>1</sup>", "2<sup>5</sup>"],
    correct: 0,
    explanation: "When multiplying same bases, add exponents: 4 + 3 = 7."
  },
  {
    id: 15,
    text: "If 8y = 56, find y.",
    options: ["6", "7", "8", "9"],
    correct: 1,
    explanation: "Divide both sides by 8 → y = 7."
  },
  {
    id: 16,
    text: "The radius of a cylinder is 3 cm and its height is 8 cm. Find its volume (in terms of π).",
    options: ["24π cm³", "72π cm³", "144π cm³", "216π cm³"],
    correct: 1,
    explanation: "V = πr²h = π × 3² × 8 = 72π cm³.",
    diagram: "CylinderDiagram",
    diagramProps: { radius: 3, height: 8 }
  },
  {
    id: 17,
    text: "Simplify: (x<sup>3</sup>)<sup>2</sup>",
    options: ["x<sup>5</sup>", "x<sup>6</sup>", "x<sup>9</sup>", "x<sup>1</sup>"],
    correct: 1,
    explanation: "Multiply exponents: 3 × 2 = 6 → x⁶."
  },
  {
    id: 18,
    text: "If a = 4 and b = 2, evaluate (3a<sup>2</sup>b) ÷ 4.",
    options: ["24", "32", "12", "8"],
    correct: 0,
    explanation: "3 × (4²) × 2 ÷ 4 = 3 × 16 × 2 ÷ 4 = 96 ÷ 4 = 24."
  },
  {
    id: 19,
    text: "Find the area of a triangle with base 10 cm and height 6 cm.",
    options: ["30 cm²", "40 cm²", "50 cm²", "60 cm²"],
    correct: 0,
    explanation: "Area = ½ × base × height = ½ × 10 × 6 = 30 cm².",
    diagram: "TriangleDiagram",
    diagramProps: { base: 10, height: 6 }
  },
  {
    id: 20,
    text: "Simplify: 9x − (−4x)",
    options: ["13x", "5x", "−13x", "x"],
    correct: 0,
    explanation: "Subtracting a negative is addition → 9x + 4x = 13x."
  },
  {
    id: 21,
    text: "If 6 pencils cost $3.00, how much do 10 pencils cost?",
    options: ["$4.00", "$5.00", "$5.50", "$6.00"],
    correct: 1,
    explanation: "Price per pencil = $3 / 6 = $0.50 → 10 × $0.50 = $5."
  },
  {
    id: 22,
    text: "What is the slope of the line passing through (2, 3) and (6, 11)?",
    options: ["1", "2", "3", "4"],
    correct: 1,
    explanation: "Slope = (11 − 3) / (6 − 2) = 8 / 4 = 2."
  },
  {
    id: 23,
    text: "Simplify: 4x − 2(x + 3)",
    options: ["2x + 6", "2x − 6", "6x − 3", "2x − 3"],
    correct: 1,
    explanation: "Distribute −2: 4x − 2x − 6 = 2x − 6."
  },
  {
    id: 24,
    text: "A square garden has an area of 81 m². What is the length of one side?",
    options: ["7 m", "8 m", "9 m", "10 m"],
    correct: 2,
    explanation: "Side = √81 = 9 m.",
    diagram: "SquareDiagram",
    diagramProps: { side: 9 }
  },
  {
    id: 25,
    text: "Simplify: (x<sup>4</sup>y<sup>2</sup>) ÷ (x<sup>2</sup>y)",
    options: ["x<sup>2</sup>y", "x<sup>2</sup>y<sup>2</sup>", "x<sup>3</sup>y<sup>2</sup>", "x<sup>6</sup>y"],
    correct: 0,
    explanation: "Subtract exponents: x⁴/x² = x²; y²/y = y → x²y."
  }
];

export const MATH_KNOWLEDGE_CONFIG = {
  timeLimit: 22 * 60,
  sectionName: "Math Knowledge",
  totalQuestions: 200
};
