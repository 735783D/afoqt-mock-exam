// Instrument Comprehension Questions
// Shows instruments, options are aircraft views

export const instrumentCompData = [
  {
    id: 1,
    // Instrument readings
    pitch: 10,      // Nose up 10 degrees
    bank: -15,      // Left bank 15 degrees
    heading: 45,    // Heading 045° (Northeast)
    
    question: "Which aircraft view matches the instrument readings shown above?",
    
    // Options are different aircraft perspectives
    options: [
      {
        pitch: 10,
        bank: 15,     // Wrong: right bank instead of left
        heading: 45,
        description: "Right bank"
      },
      {
        pitch: 10,
        bank: -15,    // CORRECT: matches instruments
        heading: 45,
        description: "Left bank, climbing"
      },
      {
        pitch: -10,   // Wrong: nose down instead of up
        bank: -15,
        heading: 45,
        description: "Left bank, descending"
      },
      {
        pitch: 10,
        bank: -15,
        heading: 225,  // Wrong: opposite heading
        description: "Opposite direction"
      }
    ],
    
    correctAnswer: 1,
    
    explanation: "The attitude indicator shows a 10° nose-up pitch (climbing) with a 15° left bank. The heading indicator shows 045° (northeast). Option B correctly shows this configuration."
  },
  
  {
    id: 2,
    pitch: -5,      // Nose down 5 degrees
    bank: 20,       // Right bank 20 degrees
    heading: 270,   // Heading 270° (West)
    
    question: "Which aircraft view matches the instrument readings shown above?",
    
    options: [
      {
        pitch: -5,
        bank: 20,     // CORRECT
        heading: 270,
        description: "Right bank, descending"
      },
      {
        pitch: 5,     // Wrong: climbing instead of descending
        bank: 20,
        heading: 270,
        description: "Right bank, climbing"
      },
      {
        pitch: -5,
        bank: -20,    // Wrong: left bank instead of right
        heading: 270,
        description: "Left bank, descending"
      },
      {
        pitch: -5,
        bank: 20,
        heading: 90,  // Wrong: east instead of west
        description: "Wrong heading"
      }
    ],
    
    correctAnswer: 0,
    
    explanation: "The attitude indicator shows a 5° nose-down pitch (descending) with a 20° right bank. The heading shows 270° (west). Option A matches these readings."
  },
  
  {
    id: 3,
    pitch: 0,       // Level
    bank: 0,        // Wings level
    heading: 180,   // Heading 180° (South)
    
    question: "Which aircraft view matches the instrument readings shown above?",
    
    options: [
      {
        pitch: 0,
        bank: -10,    // Wrong: banking
        heading: 180,
        description: "Left bank"
      },
      {
        pitch: 5,     // Wrong: climbing
        bank: 0,
        heading: 180,
        description: "Climbing"
      },
      {
        pitch: 0,
        bank: 0,      // CORRECT: level flight
        heading: 180,
        description: "Level flight"
      },
      {
        pitch: 0,
        bank: 0,
        heading: 0,   // Wrong: north instead of south
        description: "Wrong heading"
      }
    ],
    
    correctAnswer: 2,
    
    explanation: "Both pitch and bank are at 0°, indicating level flight with wings level. The heading shows 180° (south). Option C correctly shows level flight heading south."
  },
  
  {
    id: 4,
    pitch: 15,      // Nose up 15 degrees
    bank: 0,        // Wings level
    heading: 90,    // Heading 090° (East)
    
    question: "Which aircraft view matches the instrument readings shown above?",
    
    options: [
      {
        pitch: -15,   // Wrong: descending
        bank: 0,
        heading: 90,
        description: "Descending"
      },
      {
        pitch: 15,
        bank: 10,     // Wrong: banking
        heading: 90,
        description: "Climbing with bank"
      },
      {
        pitch: 15,
        bank: 0,      // CORRECT
        heading: 90,
        description: "Straight climb"
      },
      {
        pitch: 15,
        bank: 0,
        heading: 270, // Wrong: west instead of east
        description: "Wrong heading"
      }
    ],
    
    correctAnswer: 2,
    
    explanation: "The attitude indicator shows 15° nose-up (climbing) with 0° bank (wings level). The heading shows 090° (east). Option C shows a straight climb heading east."
  },
  
  {
    id: 5,
    pitch: -10,     // Nose down 10 degrees
    bank: -30,      // Left bank 30 degrees
    heading: 315,   // Heading 315° (Northwest)
    
    question: "Which aircraft view matches the instrument readings shown above?",
    
    options: [
      {
        pitch: -10,
        bank: 30,     // Wrong: right bank
        heading: 315,
        description: "Right bank"
      },
      {
        pitch: 10,    // Wrong: climbing
        bank: -30,
        heading: 315,
        description: "Climbing left turn"
      },
      {
        pitch: -10,
        bank: -30,    // CORRECT
        heading: 315,
        description: "Descending left turn"
      },
      {
        pitch: -10,
        bank: -30,
        heading: 135, // Wrong: opposite heading
        description: "Wrong heading"
      }
    ],
    
    correctAnswer: 2,
    
    explanation: "The attitude indicator shows 10° nose-down pitch with 30° left bank. The heading shows 315° (northwest). Option C correctly depicts a descending left turn heading northwest."
  }
  
  // You'll need 195 more questions...
  // I can generate these programmatically if you want!
];

export const INSTRUMENT_COMP_CONFIG = {
  sectionName: "Instrument Comprehension",
  totalQuestions: 25,
  timeLimit: 5,
  instructions: "Study the attitude indicator and heading indicator. Then select the aircraft view that best matches the instrument readings. Pay attention to pitch (nose up/down), bank (wings tilted), and heading direction."
};

export default instrumentCompData;