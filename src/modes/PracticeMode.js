// import React, { useState } from 'react';
// import ExamStart from '../components/ExamStart';
// import ExamHeader from '../components/ExamHeader';
// import ExamQuestion from '../components/ExamQuestion';
// import ExamResults from '../components/ExamResults';
// import SubsectionSelector from '../components/SubsectionSelector';
// import { readingCompData, EXAM_CONFIG as READING_CONFIG } from '../data/readingCompQuestions';
// import { arithmeticData, ARITHMETIC_CONFIG } from '../data/arithmeticQuestions';
// import { aviationMilitaryPassages, AVIATION_MILITARY_CONFIG } from '../data/practiceSets/readingComp/aviation-military';
// import { getTotalQuestions } from '../utils/examLogic';
// import { physicalSciencePassages, PHYSICAL_SCIENCE_CONFIG } from '../data/practiceSets/readingComp/physical-science';
// import { technologyEngineeringPassages, TECHNOLOGY_ENGINEERING_CONFIG } from '../data/practiceSets/readingComp/technology-engineering';
// import { generalTopicsPassages, GENERAL_TOPICS_CONFIG } from '../data/practiceSets/readingComp/general-topics';


// // Map section IDs to their names
// const sectionNames = {
//   'reading-comp': 'Reading Comprehension',
//   'arithmetic': 'Arithmetic Reasoning'
// };

// export default function PracticeMode({ sectionId, onExit }) {
//   const [selectedSubsection, setSelectedSubsection] = useState(null);
//   const [examStarted, setExamStarted] = useState(false);
//   const [currentPassage, setCurrentPassage] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [showResults, setShowResults] = useState(false);

//   // Get section data based on selected section and subsection
//   const getSectionData = () => {
//     switch(sectionId) {
//       case 'reading-comp':
//         // If subsection selected, load that subsection's data
//         if (selectedSubsection === 'aviation-military') {
//           return {
//             data: aviationMilitaryPassages,
//             config: { 
//               timeLimit: READING_CONFIG.timeLimit, 
//               sectionName: AVIATION_MILITARY_CONFIG.name 
//             },
//             name: `Reading Comprehension - ${AVIATION_MILITARY_CONFIG.name}`,
//             isArithmetic: false
//           };
//         }
//         if (selectedSubsection === 'physical-science') {
//           return {
//             data: physicalSciencePassages,
//             config: { 
//               timeLimit: READING_CONFIG.timeLimit, 
//               sectionName: PHYSICAL_SCIENCE_CONFIG.name 
//             },
//             name: `Reading Comprehension - ${PHYSICAL_SCIENCE_CONFIG.name}`,
//             isArithmetic: false
//           };
//         }
//         if (selectedSubsection === 'technology') {
//           return {
//             data: technologyEngineeringPassages,
//             config: { 
//               timeLimit: READING_CONFIG.timeLimit, 
//               sectionName: TECHNOLOGY_ENGINEERING_CONFIG.name 
//             },
//             name: `Reading Comprehension - ${TECHNOLOGY_ENGINEERING_CONFIG.name}`,
//             isArithmetic: false
//           };
//         }
//         if (selectedSubsection === 'general-topics') {
//           return {
//             data: generalTopicsPassages,
//             config: { 
//               timeLimit: READING_CONFIG.timeLimit, 
//               sectionName: GENERAL_TOPICS_CONFIG.name 
//             },
//             name: `Reading Comprehension - ${GENERAL_TOPICS_CONFIG.name}`,
//             isArithmetic: false
//           };
//         }
//         // If "full" is selected, use all reading comp data
//         if (selectedSubsection === 'full') {
//           return {
//             data: readingCompData,
//             config: READING_CONFIG,
//             name: 'Reading Comprehension - Full Section',
//             isArithmetic: false
//           };
//         }
//         // Default to full section if somehow no subsection selected
//         return {
//           data: readingCompData,
//           config: READING_CONFIG,
//           name: 'Reading Comprehension',
//           isArithmetic: false
//         };
        
//       case 'arithmetic':
//         // If subsection selected, load that subsection's data
//         // For now, just using main data as placeholder until subsection files exist
//         if (selectedSubsection === 'full') {
//           return {
//             data: arithmeticData.map(q => ({
//               id: q.id,
//               questions: [q]
//             })),
//             config: ARITHMETIC_CONFIG,
//             name: 'Arithmetic Reasoning - Full Section',
//             isArithmetic: true
//           };
//         }
//         // Individual subsections (when files are created)
//         return {
//           data: arithmeticData.map(q => ({
//             id: q.id,
//             questions: [q]
//           })),
//           config: ARITHMETIC_CONFIG,
//           name: 'Arithmetic Reasoning',
//           isArithmetic: true
//         };
        
//       default:
//         return null;
//     }
//   };

//   const section = getSectionData();
  
//   if (!section) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-4">Section not available yet</h2>
//           <button 
//             onClick={onExit}
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg"
//           >
//             Back to Section Selection
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Show subsection selector if no subsection selected yet
//   if (!selectedSubsection) {
//     return (
//       <SubsectionSelector 
//         sectionId={sectionId}
//         sectionName={sectionNames[sectionId]}
//         onSelectSubsection={setSelectedSubsection}
//         onBack={onExit}
//       />
//     );
//   }

//   const totalQuestions = getTotalQuestions(section.data);

//   const handleStart = () => {
//     setExamStarted(true);
//   };

//   const handleAnswer = (questionId, optionIndex) => {
//     setAnswers(prev => ({
//       ...prev,
//       [questionId]: optionIndex
//     }));
//   };

//   const handleNavigate = (direction) => {
//     if (direction === 'next') {
//       setCurrentPassage(prev => Math.min(section.data.length - 1, prev + 1));
//     } else {
//       setCurrentPassage(prev => Math.max(0, prev - 1));
//     }
//   };

//   const handleSubmit = () => {
//     setShowResults(true);
//   };

//   const handleRetake = () => {
//     setExamStarted(false);
//     setCurrentPassage(0);
//     setAnswers({});
//     setShowResults(false);
//   };

//   const handleBackToSubsections = () => {
//     setSelectedSubsection(null);
//     setExamStarted(false);
//     setCurrentPassage(0);
//     setAnswers({});
//     setShowResults(false);
//   };

//   // Show start screen
//   if (!examStarted) {
//     return (
//       <div>
//         <ExamStart 
//           onStart={handleStart}
//           totalQuestions={totalQuestions}
//           timeLimit={section.config.timeLimit}
//           sectionName={section.name}
//           isPracticeMode={true}
//         />
//         <div className="fixed bottom-4 left-4">
//           <button
//             onClick={handleBackToSubsections}
//             className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition"
//           >
//             ← Back to Subsections
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Show results screen
//   if (showResults) {
//     return (
//       <div>
//         <ExamResults 
//           examData={section.data}
//           answers={answers}
//           onRetake={handleRetake}
//         />
//         <div className="fixed bottom-4 left-4">
//           <button
//             onClick={handleBackToSubsections}
//             className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition"
//           >
//             ← Back to Subsections
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Show exam questions (no timer in practice mode)
//   const passage = section.data[currentPassage];
//   const answeredCount = Object.keys(answers).length;

//   return (
//     <>
//       <ExamHeader 
//         currentPassage={currentPassage}
//         totalPassages={section.data.length}
//         timeRemaining={null} // No timer in practice mode
//         answeredCount={answeredCount}
//         totalQuestions={totalQuestions}
//         sectionName={section.name}
//       />
//       <ExamQuestion 
//         passage={passage}
//         answers={answers}
//         onAnswer={handleAnswer}
//         onNavigate={handleNavigate}
//         isFirst={currentPassage === 0}
//         isLast={currentPassage === section.data.length - 1}
//         onSubmit={handleSubmit}
//         answeredCount={answeredCount}
//         totalQuestions={totalQuestions}
//         isArithmetic={section.isArithmetic}
//       />
//       <div className="fixed bottom-4 left-4 z-20">
//         <button
//           onClick={handleBackToSubsections}
//           className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition shadow-lg"
//         >
//           ← Back to Subsections
//         </button>
//       </div>
//     </>
//   );
// }


import React, { useState } from 'react';
import ExamStart from '../components/ExamStart';
import ExamHeader from '../components/ExamHeader';
import ExamQuestion from '../components/ExamQuestion';
import ExamResults from '../components/ExamResults';
import SubsectionSelector from '../components/SubsectionSelector';
import { readingCompData, EXAM_CONFIG as READING_CONFIG } from '../data/readingCompQuestions';
import { arithmeticData, ARITHMETIC_CONFIG } from '../data/arithmeticQuestions';
import { aviationMilitaryPassages, AVIATION_MILITARY_CONFIG } from '../data/practiceSets/readingComp/aviation-military';
import { mathKnowledgeData, MATH_KNOWLEDGE_CONFIG } from '../data/mathKnowledgeQuestions';
import { physicalScienceData, PHYSICAL_SCIENCE_CONFIG } from '../data/physicalScienceQuestions';
import { tableReadingData, TABLE_READING_CONFIG } from '../data/tableReadingQuestions';
import { instrumentCompData, INSTRUMENT_COMP_CONFIG } from '../data/instrumentCompQuetions';
import { blockCountingData, BLOCK_COUNTING_CONFIG } from '../data/blockCountingQuestions';
import { situationalJudgmentData, SITUATIONAL_JUDGMENT_CONFIG } from '../data/situationalJudgementQuestions';
import { aviationInfoData, AVIATION_INFO_CONFIG } from '../data/aviationInfoQuestions';
import { wordKnowledgeData, WORD_KNOWLEDGE_CONFIG } from '../data/wordKnowledgeQuestions';
import { verbalAnalogiesData, VERBAL_ANALOGIES_CONFIG } from '../data/verbalAnalogiesQuestions';
import { getTotalQuestions } from '../utils/examLogic';

// Map section IDs to their names
const sectionNames = {
  'reading-comp': 'Reading Comprehension',
  'arithmetic': 'Arithmetic Reasoning',
  'word-knowledge': 'Word Knowledge'
};

export default function PracticeMode({ sectionId, onExit }) {
  const [selectedSubsection, setSelectedSubsection] = useState(null);
  const [examStarted, setExamStarted] = useState(false);
  const [currentPassage, setCurrentPassage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Get section data based on selected section and subsection
  const getSectionData = () => {
    switch(sectionId) {
      case 'reading-comp':
        // If subsection selected, load that subsection's data
        if (selectedSubsection === 'aviation-military') {
          return {
            data: aviationMilitaryPassages,
            config: { 
              timeLimit: READING_CONFIG.timeLimit, 
              sectionName: AVIATION_MILITARY_CONFIG.name 
            },
            name: `Reading Comprehension - ${AVIATION_MILITARY_CONFIG.name}`,
            isArithmetic: false
          };
        }
        // If "full" is selected, use all reading comp data
        if (selectedSubsection === 'full') {
          return {
            data: readingCompData,
            config: READING_CONFIG,
            name: 'Reading Comprehension - Full Section',
            isArithmetic: false
          };
        }
        // Default to full section if somehow no subsection selected
        return {
          data: readingCompData,
          config: READING_CONFIG,
          name: 'Reading Comprehension',
          isArithmetic: false
        };
        
      case 'arithmetic':
        // If subsection selected, load that subsection's data
        // For now, just using main data as placeholder until subsection files exist
        if (selectedSubsection === 'full') {
          return {
            data: arithmeticData.map(q => ({
              id: q.id,
              questions: [q]
            })),
            config: ARITHMETIC_CONFIG,
            name: 'Arithmetic Reasoning - Full Section',
            isArithmetic: true
          };
        }
        // Individual subsections (when files are created)
        return {
          data: arithmeticData.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: ARITHMETIC_CONFIG,
          name: 'Arithmetic Reasoning',
          isArithmetic: true
        };
        
      case 'word-knowledge':
        return {
          data: wordKnowledgeData.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: WORD_KNOWLEDGE_CONFIG,
          name: 'Word Knowledge',
          isArithmetic: false // Simple question format like arithmetic
        };
        
      case 'verbal-analogies':
        return {
          data: verbalAnalogiesData.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: VERBAL_ANALOGIES_CONFIG,
          name: 'Verbal Analogies',
          isArithmetic: false
        };
        
      case 'aviation-info':
        return {
          data: aviationInfoData.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: AVIATION_INFO_CONFIG,
          name: 'Aviation Information',
          isArithmetic: false
        };
        
      case 'math-knowledge':
        return {
          data: mathKnowledgeData.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: MATH_KNOWLEDGE_CONFIG,
          name: 'Math Knowledge',
          isArithmetic: false
        };
        
      case 'physical-science':
        return {
          data: physicalScienceData.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: PHYSICAL_SCIENCE_CONFIG,
          name: 'Physical Science',
          isArithmetic: false
        };
        
      case 'table-reading':
        return {
          data: tableReadingData.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: TABLE_READING_CONFIG,
          name: 'Table Reading',
          isArithmetic: false
        };
        
      case 'instrument-comp':
        return {
          data: instrumentCompData.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: INSTRUMENT_COMP_CONFIG,
          name: 'Instrument Comprehension',
          isArithmetic: false
        };
        
      case 'block-counting':
        return {
          data: blockCountingData.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: BLOCK_COUNTING_CONFIG,
          name: 'Block Counting',
          isArithmetic: false
        };
        
      case 'situational-judgment':
        return {
          data: situationalJudgmentData.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: SITUATIONAL_JUDGMENT_CONFIG,
          name: 'Situational Judgment',
          isArithmetic: false
        };
        
      default:
        return null;
    }
  };

  const section = getSectionData();
  
  if (!section) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Section not available yet</h2>
          <button 
            onClick={onExit}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Back to Section Selection
          </button>
        </div>
      </div>
    );
  }

  // Show subsection selector if no subsection selected yet
  if (!selectedSubsection) {
    return (
      <SubsectionSelector 
        sectionId={sectionId}
        sectionName={sectionNames[sectionId]}
        onSelectSubsection={setSelectedSubsection}
        onBack={onExit}
      />
    );
  }

  const totalQuestions = getTotalQuestions(section.data);

  const handleStart = () => {
    setExamStarted(true);
  };

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleNavigate = (direction) => {
    if (direction === 'next') {
      setCurrentPassage(prev => Math.min(section.data.length - 1, prev + 1));
    } else {
      setCurrentPassage(prev => Math.max(0, prev - 1));
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRetake = () => {
    setExamStarted(false);
    setCurrentPassage(0);
    setAnswers({});
    setShowResults(false);
  };

  const handleBackToSubsections = () => {
    setSelectedSubsection(null);
    setExamStarted(false);
    setCurrentPassage(0);
    setAnswers({});
    setShowResults(false);
  };

  // Show start screen
  if (!examStarted) {
    return (
      <div>
        <ExamStart 
          onStart={handleStart}
          totalQuestions={totalQuestions}
          timeLimit={section.config.timeLimit}
          sectionName={section.name}
          isPracticeMode={true}
        />
        <div className="fixed bottom-4 left-4">
          <button
            onClick={handleBackToSubsections}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition"
          >
            ← Back to Subsections
          </button>
        </div>
      </div>
    );
  }

  // Show results screen
  if (showResults) {
    return (
      <div>
        <ExamResults 
          examData={section.data}
          answers={answers}
          onRetake={handleRetake}
        />
        <div className="fixed bottom-4 left-4">
          <button
            onClick={handleBackToSubsections}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition"
          >
            ← Back to Subsections
          </button>
        </div>
      </div>
    );
  }

  // Show exam questions (no timer in practice mode)
  const passage = section.data[currentPassage];
  const answeredCount = Object.keys(answers).length;

  return (
    <>
      <ExamHeader 
        currentPassage={currentPassage}
        totalPassages={section.data.length}
        timeRemaining={null} // No timer in practice mode
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        sectionName={section.name}
      />
      <ExamQuestion 
        passage={passage}
        answers={answers}
        onAnswer={handleAnswer}
        onNavigate={handleNavigate}
        isFirst={currentPassage === 0}
        isLast={currentPassage === section.data.length - 1}
        onSubmit={handleSubmit}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        isArithmetic={section.isArithmetic}
      />
      <div className="fixed bottom-4 left-4 z-20">
        <button
          onClick={handleBackToSubsections}
          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition shadow-lg"
        >
          ← Back to Subsections
        </button>
      </div>
    </>
  );
}