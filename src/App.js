// import React, { useState, useEffect } from 'react';
// import ExamStart from './components/ExamStart';
// import ExamHeader from './components/ExamHeader';
// import ExamQuestion from './components/ExamQuestion';
// import ExamResults from './components/ExamResults';
// import ExamWelcome from './components/ExamWelcome';
// import { readingCompData, EXAM_CONFIG } from './data/readingCompQuestions';
// import { getTotalQuestions } from './utils/examLogic';
// import './styles/exam.css';

// export default function App() {
//   const [welcomeComplete, setWelcomeComplete] = useState(false);
//   const [examStarted, setExamStarted] = useState(false);
//   const [currentPassage, setCurrentPassage] = useState(0);
//   const [timeRemaining, setTimeRemaining] = useState(EXAM_CONFIG.timeLimit);
//   const [answers, setAnswers] = useState({});
//   const [showResults, setShowResults] = useState(false);

//   const totalQuestions = getTotalQuestions(readingCompData);

//   // Timer effect
//   useEffect(() => {
//     // Auto-submit when time runs out
//     if (timeRemaining === 0 && !showResults && examStarted) {
//       handleSubmit();
//       return;
//     }

//     // Set up timer only when exam is active
//     if (!examStarted || showResults || timeRemaining <= 0) {
//       return;
//     }

//     const timer = setInterval(() => {
//       setTimeRemaining(prev => prev - 1);
//     }, 1000);
    
//     return () => clearInterval(timer);
//   }, [examStarted, timeRemaining, showResults]);

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
//       setCurrentPassage(prev => Math.min(readingCompData.length - 1, prev + 1));
//     } else {
//       setCurrentPassage(prev => Math.max(0, prev - 1));
//     }
//   };

//   const handleSubmit = () => {
//     setShowResults(true);
//   };

//   const handleRetake = () => {
//     setWelcomeComplete(false);
//     setExamStarted(false);
//     setCurrentPassage(0);
//     setTimeRemaining(EXAM_CONFIG.timeLimit);
//     setAnswers({});
//     setShowResults(false);
//   };

// // Show welcome screen FIRST
//   if (!welcomeComplete) {
//     return (
//       <ExamWelcome onBegin={() => setWelcomeComplete(true)} />
//     );
//   }

//   // Show start screen AFTER welcome
//   if (!examStarted) {
//     return (
//       <ExamStart 
//         onStart={handleStart}
//         totalQuestions={totalQuestions}
//         timeLimit={EXAM_CONFIG.timeLimit}
//       />
//     );
//   }

//   // Show results screen
//   if (showResults) {
//     return (
//       <ExamResults 
//         examData={readingCompData}
//         answers={answers}
//         onRetake={handleRetake}
//       />
//     );
//   }

//   // Show exam questions
//   const passage = readingCompData[currentPassage];
//   const answeredCount = Object.keys(answers).length;

//   return (
//     <>
//       <ExamHeader 
//         currentPassage={currentPassage}
//         totalPassages={readingCompData.length}
//         timeRemaining={timeRemaining}
//         answeredCount={answeredCount}
//         totalQuestions={totalQuestions}
//       />
//       <ExamQuestion 
//         passage={passage}
//         answers={answers}
//         onAnswer={handleAnswer}
//         onNavigate={handleNavigate}
//         isFirst={currentPassage === 0}
//         isLast={currentPassage === readingCompData.length - 1}
//         onSubmit={handleSubmit}
//         answeredCount={answeredCount}
//         totalQuestions={totalQuestions}
//       />
//     </>
//   );
// }


import React, { useState } from 'react';
import ModeSelector from './components/ModeSelector';
import SectionSelector from './components/SectionSelector';
import PracticeMode from './modes/PracticeMode';
import FullExamMode from './modes/FullExamMode';
import './styles/exam.css';

export default function App() {
  const [selectedMode, setSelectedMode] = useState(null); // 'full' or 'practice'
  const [selectedSection, setSelectedSection] = useState(null); // for practice mode

  // Reset to mode selection
  const handleBackToModes = () => {
    setSelectedMode(null);
    setSelectedSection(null);
  };

  // Reset to section selection (practice mode only)
  const handleBackToSections = () => {
    setSelectedSection(null);
  };

  // No mode selected - show mode selector
  if (!selectedMode) {
    return <ModeSelector onSelectMode={setSelectedMode} />;
  }

  // Full exam mode selected
  if (selectedMode === 'full') {
    return <FullExamMode onExit={handleBackToModes} />;
  }

  // Practice mode selected
  if (selectedMode === 'practice') {
    // No section selected yet - show section selector
    if (!selectedSection) {
      return (
        <SectionSelector 
          onSelectSection={setSelectedSection}
          onBack={handleBackToModes}
        />
      );
    }

    // Section selected - show practice for that section
    return (
      <PracticeMode 
        sectionId={selectedSection}
        onExit={handleBackToSections}
      />
    );
  }

  return null;
}