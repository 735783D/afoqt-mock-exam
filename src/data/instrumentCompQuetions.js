// Instrument Comprehension Questions for AFOQT
// Interpret aircraft instrument displays
// Note: This will need images of instruments or SVG representations

export const instrumentCompData = [
  {
    id: 1,
    text: "Based on the instrument display, the aircraft is:",
    image: "/images/instruments/question-1.png", // Placeholder - will need actual images
    options: [
      "Climbing and turning right",
      "Descending and turning left", 
      "Level flight heading north",
      "Climbing straight ahead"
    ],
    correct: 0,
    explanation: "The attitude indicator shows a climb with right bank. The heading indicator confirms right turn."
  },
  {
    id: 2,
    text: "What is the aircraft's approximate heading?",
    image: "/images/instruments/question-2.png",
    options: ["090°", "180°", "270°", "360°"],
    correct: 1,
    explanation: "The heading indicator shows the aircraft is pointing south (180°)."
  }
  // Venice: Generate 23 more questions
  // NOTE: This section REQUIRES images of aircraft instruments
  // Consider creating SVG representations or sourcing instrument images
];

export const INSTRUMENT_COMP_CONFIG = {
  timeLimit: 5 * 60,
  sectionName: "Instrument Comprehension",
  totalQuestions: 25
};