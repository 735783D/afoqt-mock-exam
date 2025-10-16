// // Aviation Information Questions for AFOQT
// // General aviation knowledge - terminology, concepts, basic principles

// export const aviationInfoData = [
//   {
//     id: 1,
//     text: "The four forces acting on an aircraft in flight are:",
//     options: [
//       "Lift, weight, thrust, drag",
//       "Speed, altitude, direction, power",
//       "Wind, gravity, momentum, friction",
//       "Pitch, roll, yaw, bank"
//     ],
//     correct: 0,
//     explanation: "The four fundamental forces acting on an aircraft are lift (upward), weight (downward), thrust (forward), and drag (backward)."
//   },
//   {
//     id: 2,
//     text: "The movable control surfaces on the trailing edge of a wing are called:",
//     options: [
//       "Rudders",
//       "Elevators",
//       "Ailerons",
//       "Flaps"
//     ],
//     correct: 2,
//     explanation: "Ailerons are located on the outer trailing edge of each wing and control roll (banking) motion of the aircraft."
//   },
//   {
//     id: 3,
//     text: "Indicated airspeed is measured by which instrument?",
//     options: [
//       "Altimeter",
//       "Airspeed indicator",
//       "Vertical speed indicator",
//       "Attitude indicator"
//     ],
//     correct: 1,
//     explanation: "The airspeed indicator measures and displays the aircraft's speed through the air."
//   },
//   {
//     id: 4,
//     text: "The vertical stabilizer and rudder control movement around which axis?",
//     options: [
//       "Longitudinal (roll)",
//       "Lateral (pitch)",
//       "Vertical (yaw)",
//       "Horizontal"
//     ],
//     correct: 2,
//     explanation: "The rudder controls yaw, which is rotation around the vertical axis (nose left or right)."
//   },
//   {
//     id: 5,
//     text: "What does VFR stand for in aviation?",
//     options: [
//       "Very Fast Rules",
//       "Visual Flight Rules",
//       "Verified Flight Regulations",
//       "Variable Flight Range"
//     ],
//     correct: 1,
//     explanation: "VFR (Visual Flight Rules) refers to regulations for flying when visibility is sufficient to navigate by visual reference to the ground."
//   }
//   // Venice: Generate 15 more questions covering:
//   // - Aircraft components and systems
//   // - Flight principles and aerodynamics
//   // - Weather and meteorology basics
//   // - Aviation regulations and procedures
//   // - Airport operations
//   // Keep accessible - not requiring pilot training to answer
// ];

// export const AVIATION_INFO_CONFIG = {
//   timeLimit: 8 * 60, // 8 minutes
//   sectionName: "Aviation Information",
//   totalQuestions: 20
// };

// Aviation Information Questions for AFOQT
// General aviation knowledge - terminology, concepts, basic principles

export const aviationInfoData = [
  {
    id: 1,
    text: "The four forces acting on an aircraft in flight are:",
    options: [
      "Lift, weight, thrust, drag",
      "Speed, altitude, direction, power",
      "Wind, gravity, momentum, friction",
      "Pitch, roll, yaw, bank"
    ],
    correct: 0,
    explanation: "The four fundamental forces acting on an aircraft are lift (upward), weight (downward), thrust (forward), and drag (backward)."
  },
  {
    id: 2,
    text: "The movable control surfaces on the trailing edge of a wing are called:",
    options: [
      "Rudders",
      "Elevators",
      "Ailerons",
      "Flaps"
    ],
    correct: 2,
    explanation: "Ailerons are located on the outer trailing edge of each wing and control roll (banking) motion of the aircraft."
  },
  {
    id: 3,
    text: "Indicated airspeed is measured by which instrument?",
    options: [
      "Altimeter",
      "Airspeed indicator",
      "Vertical speed indicator",
      "Attitude indicator"
    ],
    correct: 1,
    explanation: "The airspeed indicator measures and displays the aircraft's speed through the air."
  },
  {
    id: 4,
    text: "The vertical stabilizer and rudder control movement around which axis?",
    options: [
      "Longitudinal (roll)",
      "Lateral (pitch)",
      "Vertical (yaw)",
      "Horizontal"
    ],
    correct: 2,
    explanation: "The rudder controls yaw, which is rotation around the vertical axis (nose left or right)."
  },
  {
    id: 5,
    text: "What does VFR stand for in aviation?",
    options: [
      "Very Fast Rules",
      "Visual Flight Rules",
      "Verified Flight Regulations",
      "Variable Flight Range"
    ],
    correct: 1,
    explanation: "VFR (Visual Flight Rules) refers to regulations for flying when visibility is sufficient to navigate by visual reference to the ground."
  },
  {
    id: 6,
    text: "Which component is primarily responsible for generating lift on an aircraft wing?",
    options: [
      "Flaps",
      "Ailerons",
      "Airfoil shape",
      "Rudders"
    ],
    correct: 2,
    explanation: "The airfoil shape of the wing is designed to generate lift as air flows over it, creating an upward force."
  },
  {
    id: 7,
    text: "What is the purpose of the horizontal stabilizer on an aircraft?",
    options: [
      "To control yaw",
      "To control pitch",
      "To generate lift",
      "To reduce drag"
    ],
    correct: 1,
    explanation: "The horizontal stabilizer, along with the elevator, controls the pitch of the aircraft, helping to keep it level."
  },
  {
    id: 8,
    text: "Which of the following is a type of engine commonly used in small aircraft?",
    options: [
      "Turbofan",
      "Reciprocating",
      "Rocket",
      "Ramjet"
    ],
    correct: 1,
    explanation: "Reciprocating engines, also known as piston engines, are commonly used in small aircraft due to their reliability and simplicity."
  },
  {
    id: 9,
    text: "What is the primary function of the landing gear on an aircraft?",
    options: [
      "To generate thrust",
      "To control direction during takeoff and landing",
      "To support the aircraft on the ground and absorb shock during landing",
      "To reduce drag during flight"
    ],
    correct: 2,
    explanation: "The landing gear supports the aircraft on the ground and absorbs the shock during landing, ensuring a smooth touchdown."
  },
  {
    id: 10,
    text: "Which weather phenomenon can cause severe turbulence for aircraft?",
    options: [
      "Clear air turbulence",
      "Fog",
      "Lightning",
      "Snow"
    ],
    correct: 0,
    explanation: "Clear air turbulence is an invisible and unpredictable weather phenomenon that can cause severe turbulence for aircraft."
  },
  {
    id: 11,
    text: "What is the purpose of an altimeter in an aircraft?",
    options: [
      "To measure airspeed",
      "To indicate the aircraft's altitude above sea level",
      "To show the aircraft's direction",
      "To display the outside air temperature"
    ],
    correct: 1,
    explanation: "The altimeter measures and displays the aircraft's altitude above sea level, which is crucial for navigation and safety."
  },
  {
    id: 12,
    text: "Which of the following is a standard aviation regulation regarding flight crew rest?",
    options: [
      "Pilots must have at least 8 hours of uninterrupted rest within a 24-hour period",
      "Pilots are required to sleep for 10 hours before each flight",
      "Pilots can fly up to 16 hours straight without rest",
      "Pilots must take a 30-minute break every 2 hours of flight"
    ],
    correct: 0,
    explanation: "A standard aviation regulation requires pilots to have at least 8 hours of uninterrupted rest within a 24-hour period to ensure they are well-rested and alert during flights."
  },
  {
    id: 13,
    text: "What is the primary function of the transponder in an aircraft?",
    options: [
      "To communicate with air traffic control",
      "To navigate using GPS",
      "To identify the aircraft to radar systems",
      "To measure fuel consumption"
    ],
    correct: 2,
    explanation: "The transponder in an aircraft sends a unique identification signal to radar systems, allowing air traffic control to track and identify the aircraft."
  },
  {
    id: 14,
    text: "Which of the following is a type of approach procedure used in aviation?",
    options: [
      "Instrument Landing System (ILS)",
      "Visual Approach",
      "Precision Approach",
      "All of the above"
    ],
    correct: 3,
    explanation: "All of the above are types of approach procedures used in aviation, including ILS, visual approach, and precision approach, each serving different purposes and conditions."
  },
  {
    id: 15,
    text: "What is the purpose of a runway in an airport?",
    options: [
      "To park aircraft",
      "To provide a clear path for takeoff and landing",
      "To store fuel",
      "To house air traffic control"
    ],
    correct: 1,
    explanation: "A runway provides a clear, smooth, and marked path for aircraft to take off and land safely."
  },
  {
    id: 16,
    text: "Which of the following is a common cause of icing on an aircraft?",
    options: [
      "Flying at high altitudes",
      "Flying through clear skies",
      "Flying at low speeds",
      "Flying through clouds with temperatures below freezing"
    ],
    correct: 3,
    explanation: "Icing on an aircraft can occur when flying through clouds with temperatures below freezing, as supercooled water droplets can freeze upon contact with the aircraft's surfaces."
  },
  {
    id: 17,
    text: "What is the purpose of a taxiway in an airport?",
    options: [
      "To provide a path for aircraft to move on the ground between the runway and terminal",
      "To store aircraft",
      "To refuel aircraft",
      "To house maintenance facilities"
    ],
    correct: 0,
    explanation: "Taxiways provide a path for aircraft to move on the ground between the runway and the terminal, allowing for safe and efficient ground operations."
  },
  {
    id: 18,
    text: "Which of the following is a standard aviation regulation regarding flight crew qualifications?",
    options: [
      "Pilots must hold a valid medical certificate",
      "Pilots must have at least 5 years of flying experience",
      "Pilots must be able to speak and understand only English",
      "Pilots must be at least 30 years old"
    ],
    correct: 0,
    explanation: "A standard aviation regulation requires pilots to hold a valid medical certificate to ensure they are physically and mentally fit to fly."
  },
  {
    id: 19,
    text: "What is the purpose of a hold short line on a taxiway?",
    options: [
      "To indicate where aircraft should stop and wait for clearance to enter the runway",
      "To mark the beginning of the runway",
      "To show the direction of taxiing",
      "To indicate the end of the taxiway"
    ],
    correct: 0,
    explanation: "A hold short line on a taxiway indicates where aircraft should stop and wait for clearance from air traffic control before entering the runway."
  },
  {
    id: 20,
    text: "Which of the following is a common weather phenomenon that can affect aircraft performance?",
    options: [
      "High humidity",
      "Low pressure",
      "Strong winds",
      "All of the above"
    ],
    correct: 3,
    explanation: "All of the above weather phenomena can affect aircraft performance. High humidity can reduce engine efficiency, low pressure can affect altitude readings, and strong winds can impact takeoff and landing."
  }
];

export const AVIATION_INFO_CONFIG = {
  timeLimit: 8 * 60, // 8 minutes
  sectionName: "Aviation Information",
  totalQuestions: 20
};