// import React, { useState } from 'react';
// import ExamStart from '../components/ExamStart';
// import ExamHeader from '../components/ExamHeader';
// import ExamQuestion from '../components/ExamQuestion';
// import ExamResults from '../components/ExamResults';
// import { readingCompData, EXAM_CONFIG } from '../data/readingCompQuestions';
// import { getTotalQuestions } from '../utils/examLogic';

// export default function PracticeMode({ sectionId, onExit }) {
//   const [examStarted, setExamStarted] = useState(false);
//   const [currentPassage, setCurrentPassage] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [showResults, setShowResults] = useState(false);

//   // For now, only reading comprehension is available
//   // We'll add more sections later
//   const getSectionData = () => {
//     switch(sectionId) {
//       case 'reading-comp':
//         return {
//           data: readingCompData,
//           config: EXAM_CONFIG,
//           name: 'Reading Comprehension'
//         };
//       // Add more sections as we build them
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
//             onClick={onExit}
//             className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition"
//           >
//             ← Back to Sections
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
//             onClick={onExit}
//             className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition"
//           >
//             ← Back to Sections
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
//       />
//       <div className="fixed bottom-4 left-4 z-20">
//         <button
//           onClick={onExit}
//           className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition shadow-lg"
//         >
//           ← Exit Practice
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
import { readingCompData, EXAM_CONFIG as READING_CONFIG } from '../data/readingCompQuestions';
import { arithmeticData, ARITHMETIC_CONFIG } from '../data/arithmeticQuestions';
import { getTotalQuestions } from '../utils/examLogic';

export default function PracticeMode({ sectionId, onExit }) {
  const [examStarted, setExamStarted] = useState(false);
  const [currentPassage, setCurrentPassage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Get section data based on selected section
  const getSectionData = () => {
    switch(sectionId) {
      case 'reading-comp':
        return {
          data: readingCompData,
          config: READING_CONFIG,
          name: 'Reading Comprehension',
          isArithmetic: false
        };
      case 'arithmetic':
        return {
          data: arithmeticData.map(q => ({
            id: q.id,
            questions: [q] // Wrap each question as a "passage" with one question
          })),
          config: ARITHMETIC_CONFIG,
          name: 'Arithmetic Reasoning',
          isArithmetic: true
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
            onClick={onExit}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition"
          >
            ← Back to Sections
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
            onClick={onExit}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition"
          >
            ← Back to Sections
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
          onClick={onExit}
          className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition shadow-lg"
        >
          ← Exit Practice
        </button>
      </div>
    </>
  );
}