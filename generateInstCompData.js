// Script to generate Instrument Comprehension question data
// Run with: node generateInstCompData.js

const fs = require('fs');

const NUM_QUESTIONS = 200;
const NUM_PLANE_IMAGES = 200;    // instcomp_Plane-0001.webp through 0200
const NUM_MIRROR_IMAGES = 100;   // instcomp_Plane-MIRROR-0001.webp through 0100
const OUTPUT_FILE = './src/data/instrumentCompQuestions.js';

function padNumber(num) {
  return String(num).padStart(4, '0');
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getDistractors(correctNum) {
  const distractors = [];
  const used = new Set([correctNum]);
  
  // Get 3 random distractors
  while (distractors.length < 3) {
    const isPlaneOrMirror = Math.random() > 0.5; // 50/50 chance plane vs mirror
    
    if (isPlaneOrMirror) {
      // Pick from plane images (1-200)
      const randomNum = Math.floor(Math.random() * NUM_PLANE_IMAGES) + 1;
      
      if (!used.has(randomNum)) {
        used.add(randomNum);
        distractors.push({
          type: 'plane',
          num: randomNum,
          image: `/images/instruments/instcomp_Plane-${padNumber(randomNum)}.webp`
        });
      }
    } else {
      // Pick from mirror images (1-100)
      const randomNum = Math.floor(Math.random() * NUM_MIRROR_IMAGES) + 1;
      const key = `mirror-${randomNum}`;
      
      if (!used.has(key)) {
        used.add(key);
        distractors.push({
          type: 'mirror',
          num: randomNum,
          image: `/images/instruments/instcomp_Plane-MIRROR-${padNumber(randomNum)}.webp`
        });
      }
    }
  }
  
  return distractors;
}

function generateQuestions() {
  const questions = [];
  
  for (let i = 1; i <= NUM_QUESTIONS; i++) {
    const paddedNum = padNumber(i);
    
    // Correct answer is the matching plane image
    const correctOption = {
      type: 'plane',
      num: i,
      image: `/images/instruments/instcomp_Plane-${paddedNum}.webp`
    };
    
    // Get 3 distractors
    const distractors = getDistractors(i);
    
    // Combine and shuffle options
    const allOptions = [correctOption, ...distractors];
    const shuffledOptions = shuffleArray(allOptions);
    
    // Find where correct answer ended up
    const correctIndex = shuffledOptions.findIndex(opt => 
      opt.num === i && opt.type === 'plane'
    );
    
    questions.push({
      id: i,
      instrumentImage: `/images/instruments/instcomp_Insts-${paddedNum}.webp`,
      question: "Which aircraft view matches the instrument readings shown above?",
      options: shuffledOptions.map(opt => opt.image),
      correct: correctIndex,
      explanation: `The attitude and heading indicators show a specific aircraft orientation. Match the pitch, bank angle, and heading to the correct aircraft view.`
    });
  }
  
  return questions;
}

function main() {
  console.log('Generating Instrument Comprehension questions...');
  console.log(`- ${NUM_PLANE_IMAGES} plane images available`);
  console.log(`- ${NUM_MIRROR_IMAGES} mirror images available`);
  
  const questions = generateQuestions();
  
  // Check answer distribution
  const distribution = questions.reduce((acc, q) => {
    acc[q.correct] = (acc[q.correct] || 0) + 1;
    return acc;
  }, {});
  
  console.log('\nAnswer distribution:');
  console.log('A (0):', distribution[0] || 0);
  console.log('B (1):', distribution[1] || 0);
  console.log('C (2):', distribution[2] || 0);
  console.log('D (3):', distribution[3] || 0);
  
  // Verify no duplicates in any question
  let hasErrors = false;
  questions.forEach((q, idx) => {
    const uniqueOptions = new Set(q.options);
    if (uniqueOptions.size !== 4) {
      console.error(`\n⚠️  Question ${q.id} has duplicate options!`);
      console.error('Options:', q.options);
      hasErrors = true;
    }
  });
  
  if (hasErrors) {
    console.error('\n❌ Errors found! Please fix before using.');
    return;
  }
  
  // Generate file content
  const fileContent = `// Instrument Comprehension Questions for AFOQT
// Auto-generated - matches instrument panels to aircraft views

export const instrumentCompData = ${JSON.stringify(questions, null, 2)};

export const INSTRUMENT_COMP_CONFIG = {
  sectionName: "Instrument Comprehension",
  totalQuestions: ${NUM_QUESTIONS},
  timeLimit: 5, // 5 minutes for 25 questions
  instructions: "Study the attitude indicator and heading indicator. Then select the aircraft view that best matches the instrument readings. Pay attention to pitch (nose up/down), bank (wings tilted), and heading direction."
};

export default instrumentCompData;
`;
  
  fs.writeFileSync(OUTPUT_FILE, fileContent);
  
  console.log(`\n✓ Generated ${NUM_QUESTIONS} questions`);
  console.log(`✓ Output written to: ${OUTPUT_FILE}`);
  console.log('\nNext steps:');
  console.log('1. Update SubsectionSelector.js if needed');
  console.log('2. Test the application to verify all images load');
}

main();


// // Script to generate Instrument Comprehension question data
// // Run with: node generateInstCompData.js

// const fs = require('fs');

// const NUM_QUESTIONS = 200;
// const OUTPUT_FILE = './src/data/instrumentCompQuestions.js';

// function padNumber(num) {
//   return String(num).padStart(4, '0');
// }

// function shuffleArray(array) {
//   const shuffled = [...array];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// }

// function getDistractors(correctNum, totalQuestions) {
//   const distractors = [];
//   const used = new Set([correctNum]);
  
//   // Get 3 random distractors
//   while (distractors.length < 3) {
//     const isPlaneOrMirror = Math.random() > 0.5; // 50/50 chance plane vs mirror
//     const randomNum = Math.floor(Math.random() * totalQuestions) + 1;
    
//     if (!used.has(randomNum)) {
//       used.add(randomNum);
      
//       if (isPlaneOrMirror) {
//         distractors.push({
//           type: 'plane',
//           num: randomNum,
//           image: `/images/instruments/instcomp_Plane-${padNumber(randomNum)}.webp`
//         });
//       } else {
//         distractors.push({
//           type: 'mirror',
//           num: randomNum,
//           image: `/images/instruments/instcomp_Plane-MIRROR-${padNumber(randomNum)}.webp`
//         });
//       }
//     }
//   }
  
//   return distractors;
// }

// function generateQuestions() {
//   const questions = [];
  
//   for (let i = 1; i <= NUM_QUESTIONS; i++) {
//     const paddedNum = padNumber(i);
    
//     // Correct answer is the matching plane image
//     const correctOption = {
//       type: 'plane',
//       num: i,
//       image: `/images/instruments/instcomp_Plane-${paddedNum}.webp`
//     };
    
//     // Get 3 distractors
//     const distractors = getDistractors(i, NUM_QUESTIONS);
    
//     // Combine and shuffle options
//     const allOptions = [correctOption, ...distractors];
//     const shuffledOptions = shuffleArray(allOptions);
    
//     // Find where correct answer ended up
//     const correctIndex = shuffledOptions.findIndex(opt => opt.num === i && opt.type === 'plane');
    
//     questions.push({
//       id: i,
//       instrumentImage: `/images/instruments/instcomp_Insts-${paddedNum}.webp`,
//       question: "Which aircraft view matches the instrument readings shown above?",
//       options: shuffledOptions.map(opt => opt.image),
//       correct: correctIndex,
//       explanation: `The attitude and heading indicators show a specific aircraft orientation. Match the pitch, bank angle, and heading to the correct aircraft view.`
//     });
//   }
  
//   return questions;
// }

// function main() {
//   console.log('Generating Instrument Comprehension questions...');
  
//   const questions = generateQuestions();
  
//   // Check answer distribution
//   const distribution = questions.reduce((acc, q) => {
//     acc[q.correct] = (acc[q.correct] || 0) + 1;
//     return acc;
//   }, {});
  
//   console.log('\nAnswer distribution:');
//   console.log('A (0):', distribution[0] || 0);
//   console.log('B (1):', distribution[1] || 0);
//   console.log('C (2):', distribution[2] || 0);
//   console.log('D (3):', distribution[3] || 0);
  
//   // Generate file content
//   const fileContent = `// Instrument Comprehension Questions for AFOQT
// // Auto-generated - matches instrument panels to aircraft views

// export const instrumentCompData = ${JSON.stringify(questions, null, 2)};

// export const INSTRUMENT_COMP_CONFIG = {
//   sectionName: "Instrument Comprehension",
//   totalQuestions: ${NUM_QUESTIONS},
//   timeLimit: 5, // 5 minutes for 25 questions
//   instructions: "Study the attitude indicator and heading indicator. Then select the aircraft view that best matches the instrument readings. Pay attention to pitch (nose up/down), bank (wings tilted), and heading direction."
// };

// export default instrumentCompData;
// `;
  
//   fs.writeFileSync(OUTPUT_FILE, fileContent);
  
//   console.log(`\n✓ Generated ${NUM_QUESTIONS} questions`);
//   console.log(`✓ Output written to: ${OUTPUT_FILE}`);
// }

// main();