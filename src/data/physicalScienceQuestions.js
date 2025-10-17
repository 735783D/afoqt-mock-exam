// Physical Science Questions for AFOQT
// Physics, chemistry, and general science

export const physicalScienceData = [
  {
    id: 1,
    text: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "H2"],
    correct: 0,
    explanation: "Water is composed of two hydrogen atoms and one oxygen atom: H2O."
  },
  {
    id: 2,
    text: "Which of the following is NOT a state of matter?",
    options: ["Solid", "Liquid", "Gas", "Energy"],
    correct: 3,
    explanation: "Energy is not a state of matter. The common states are solid, liquid, and gas."
  },
  {
    id: 3,
    text: "At what temperature does water boil at sea level?",
    options: ["50°C", "75°C", "100°C", "125°C"],
    correct: 2,
    explanation: "Water boils at 100°C (212°F) at standard atmospheric pressure at sea level."
  }
  // Venice: Generate 17 more questions on physics, chemistry, earth science
];

export const PHYSICAL_SCIENCE_CONFIG = {
  timeLimit: 10 * 60,
  sectionName: "Physical Science",
  totalQuestions: 20
};