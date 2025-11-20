import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import ExamStart from '../components/ExamStart';
import ExamHeader from '../components/ExamHeader';
import ExamQuestion from '../components/ExamQuestion';
// import ExamResults from '../components/ExamResults';
import SituationalJudgmentQuestions from '../components/SituationalJudgmentQuestions';
import TableReadingQuestion from '../components/TableReadingQuestions';
import SelfDescriptionInventory from '../components/SelfDescriptionInventory';
import InstrumentCompQuestion from '../components/InstrumentCompQuestion';
import BlockCountingQuestion from '../components/BlockCountingQuestion';

import { readingComprehensionData, READING_COMPREHENSION_CONFIG } from '../data/readingComprehensionQuestions';
import { arithmeticData, ARITHMETIC_CONFIG } from '../data/arithmeticQuestions';
import { mathKnowledgeData, MATH_KNOWLEDGE_CONFIG } from '../data/mathKnowledgeQuestions';
import { physicalScienceData, PHYSICAL_SCIENCE_CONFIG } from '../data/physicalScienceQuestions';
import { tableReadingData, TABLE_READING_CONFIG } from '../data/tableReadingQuestions';
import { instrumentCompData, INSTRUMENT_COMP_CONFIG } from '../data/instrumentCompQuestions';
import { blockCountingData, BLOCK_COUNTING_CONFIG } from '../data/blockCountingQuestions';
import { situationalJudgmentData, SITUATIONAL_JUDGMENT_CONFIG } from '../data/situationalJudgmentQuestions';
import { aviationInfoData, AVIATION_INFO_CONFIG } from '../data/aviationInfoQuestions';
import { wordKnowledgeData, WORD_KNOWLEDGE_CONFIG } from '../data/wordKnowledgeQuestions';
import { verbalAnalogiesData, VERBAL_ANALOGIES_CONFIG } from '../data/verbalAnalogiesQuestions';
import { selfDescriptionData, SELF_DESCRIPTION_CONFIG } from '../data/selfDescriptionQuestions';
import { getTotalQuestions, formatTime } from '../utils/examLogic';

// AFOQT Section definitions with official timing and question counts
const EXAM_SECTIONS = [
  {
    id: 'verbal-analogies',
    name: 'Verbal Analogies',
    data: verbalAnalogiesData,
    config: VERBAL_ANALOGIES_CONFIG,
    questionCount: 25,
    timeLimit: 8 * 60,
    isPassageBased: false
  },
  {
    id: 'arithmetic',
    name: 'Arithmetic Reasoning',
    data: arithmeticData,
    config: ARITHMETIC_CONFIG,
    questionCount: 25,
    timeLimit: 29 * 60,
    isPassageBased: false
  },
  {
    id: 'word-knowledge',
    name: 'Word Knowledge',
    data: wordKnowledgeData,
    config: WORD_KNOWLEDGE_CONFIG,
    questionCount: 25,
    timeLimit: 5 * 60,
    isPassageBased: false
  },
  {
    id: 'math-knowledge',
    name: 'Math Knowledge',
    data: mathKnowledgeData,
    config: MATH_KNOWLEDGE_CONFIG,
    questionCount: 25,
    timeLimit: 22 * 60,
    isPassageBased: false
  },
  {
    id: 'reading-comp',
    name: 'Reading Comprehension',
    data: readingComprehensionData,
    config: READING_COMPREHENSION_CONFIG,
    questionCount: 25,
    timeLimit: 38 * 60,
    isPassageBased: true
  },
  {
    id: 'situational-judgment',
    name: 'Situational Judgment',
    data: situationalJudgmentData,
    config: SITUATIONAL_JUDGMENT_CONFIG,
    questionCount: 80,
    timeLimit: 35 * 60,
    isPassageBased: false
  },
  {
    id: 'self-description',
    name: 'Self-Description Inventory',
    data: selfDescriptionData,
    config: SELF_DESCRIPTION_CONFIG,
    questionCount: 220,
    timeLimit: 40 * 60,
    isPassageBased: false
  },
  {
    id: 'physical-science',
    name: 'Physical Science',
    data: physicalScienceData,
    config: PHYSICAL_SCIENCE_CONFIG,
    questionCount: 20,
    timeLimit: 10 * 60,
    isPassageBased: false
  },
  {
    id: 'table-reading',
    name: 'Table Reading',
    data: tableReadingData,
    config: TABLE_READING_CONFIG,
    questionCount: 40,
    timeLimit: 7 * 60,
    isPassageBased: false
  },
  {
    id: 'instrument-comp',
    name: 'Instrument Comprehension',
    data: instrumentCompData,
    config: INSTRUMENT_COMP_CONFIG,
    questionCount: 25,
    timeLimit: 5 * 60,
    isPassageBased: false
  },
  {
    id: 'block-counting',
    name: 'Block Counting',
    data: blockCountingData,
    config: BLOCK_COUNTING_CONFIG,
    questionCount: 30,
    timeLimit: 4.5 * 60,
    isPassageBased: false
  },
  {
    id: 'aviation-info',
    name: 'Aviation Information',
    data: aviationInfoData,
    config: AVIATION_INFO_CONFIG,
    questionCount: 20,
    timeLimit: 8 * 60,
    isPassageBased: false
  }
];

// Randomize array helper
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Get randomized questions for a section
const getRandomizedQuestions = (data, count, isPassageBased) => {
  if (isPassageBased) {
    // For reading comp, select passages and trim to exact question count
    let selectedPassages = [];
    let totalQuestions = 0;
    const shuffledPassages = shuffleArray(data);
    
    for (const passage of shuffledPassages) {
      const passageQuestionCount = passage.questions.length;
      const questionsNeeded = count - totalQuestions;
      
      // If we need exactly this many or more questions, add the whole passage
      if (questionsNeeded >= passageQuestionCount) {
        selectedPassages.push(passage);
        totalQuestions += passageQuestionCount;
        
        if (totalQuestions === count) break;
      }
      // If we need fewer questions than this passage has, take only what we need
      else if (questionsNeeded > 0) {
        const trimmedPassage = {
          ...passage,
          questions: passage.questions.slice(0, questionsNeeded)
        };
        selectedPassages.push(trimmedPassage);
        totalQuestions += questionsNeeded;
        break; // We've reached exactly the count
      }
    }
    
    return selectedPassages;
  } else {
    // For non-passage questions, shuffle and slice
    const shuffled = shuffleArray(data);
    return shuffled.slice(0, count).map(q => ({
      id: q.id,
      questions: [q]
    }));
  }
};


// Determine break type based on section

const getBreakType = (sectionIndex) => {
  if (sectionIndex === 6) return 'main'; // After Self-Description (section 7)
  if (sectionIndex === 5) return 'long'; // After Situational Judgment (50 questions)
  if (sectionIndex === 4) return 'long'; // After Physical Science (20 questions)
  if (sectionIndex === 3) return 'long'; // After Table Reading (40 questions)
  if (sectionIndex === 1) return 'long';
  return 'short'; // Default 5-minute break
};

// Get break duration in seconds
const getBreakDuration = (breakType) => {
  switch (breakType) {
    case 'main': return 15 * 60; // 15 minutes
    case 'long': return 10 * 60; // 10 minutes
    case 'short': return 5 * 60;  // 5 minutes
    default: return 5 * 60;
  }
};

export default function FullExamMode({ onExit }) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentPassage, setCurrentPassage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [examStarted, setExamStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [sectionResults, setSectionResults] = useState([]);
  const [onBreak, setOnBreak] = useState(false);
  const [breakTimeRemaining, setBreakTimeRemaining] = useState(null);
  const [breakType, setBreakType] = useState(null);

  // Memoize randomized sections
  const randomizedSections = useMemo(() => {
    return EXAM_SECTIONS.map(section => ({
      ...section,
      randomizedData: getRandomizedQuestions(
        section.data,
        section.questionCount,
        section.isPassageBased
      )
    }));
  }, []);

  const currentSection = randomizedSections[currentSectionIndex];
  const totalSections = randomizedSections.length;

  const handleStart = () => {
    setExamStarted(true);
    setTimeRemaining(currentSection.timeLimit);
  };

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleNavigate = (direction) => {
    if (direction === 'next') {
      setCurrentPassage(prev => Math.min(currentSection.randomizedData.length - 1, prev + 1));
    } else {
      setCurrentPassage(prev => Math.max(0, prev - 1));
    }
  };

  const handleSectionComplete = useCallback(() => {
    // Save section results
    const sectionQuestionIds = currentSection.randomizedData.flatMap(p =>
      p.questions ? p.questions.map(q => q.id) : [p.id]
    );
    
    const sectionAnswers = {};
    sectionQuestionIds.forEach(id => {
      if (answers[id] !== undefined) {
        sectionAnswers[id] = answers[id];
      }
    });

    setSectionResults(prev => [...prev, {
      sectionName: currentSection.name,
      sectionId: currentSection.id,
      data: currentSection.randomizedData,
      answers: sectionAnswers,
      timeUsed: currentSection.timeLimit - (timeRemaining || 0)
    }]);

    // Check if we're at the last section
    if (currentSectionIndex >= totalSections - 1) {
      setShowResults(true);
      setTimeRemaining(null);
      return;
    }

    // Start break between sections
    const bType = getBreakType(currentSectionIndex);
    setBreakType(bType);
    setBreakTimeRemaining(getBreakDuration(bType));
    setOnBreak(true);
    setTimeRemaining(null);
  }, [currentSection, answers, timeRemaining, currentSectionIndex, totalSections]);

  const handleEndBreak = useCallback(() => {
    setOnBreak(false);
    setBreakTimeRemaining(null);
    setBreakType(null);
    
    // Move to next section
    setCurrentSectionIndex(prev => prev + 1);
    setCurrentPassage(0);
    setTimeRemaining(randomizedSections[currentSectionIndex + 1].timeLimit);
  }, [randomizedSections, currentSectionIndex]);

  const handleRetake = () => {
    window.location.reload();
  };

  // Section timer effect
  useEffect(() => {
    if (!examStarted || showResults || onBreak || timeRemaining === null) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleSectionComplete();
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, showResults, onBreak, timeRemaining, handleSectionComplete]);

  // Break timer effect
  useEffect(() => {
    if (!onBreak || breakTimeRemaining === null) return;

    const timer = setInterval(() => {
      setBreakTimeRemaining(prev => {
        if (prev <= 1) {
          handleEndBreak();
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onBreak, breakTimeRemaining, handleEndBreak]);

  // Show start screen
  if (!examStarted) {
    const totalTime = randomizedSections.reduce((sum, s) => sum + s.timeLimit, 0);
    const totalQuestions = randomizedSections.reduce((sum, s) => sum + s.questionCount, 0);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Full AFOQT Practice Exam
          </h1>
          
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-lg text-yellow-900 mb-2">⚠️ Important Information</h3>
            <ul className="space-y-2 text-yellow-800">

              <li>• This only scores for accuracy. The real AFOQT is scored on other factors as well. So this will not reflect what you would actually get on the real AFOQT.</li>

              <li>• This is a timed, full-length practice exam</li>
              <li>• Treat this as if it is the real thing!</li>
              <li>• DO NOT get up for section breaks. Only for Main 15-minute break</li>
              <li>• <strong>{totalSections} sections</strong> with <strong>{totalQuestions} total questions</strong></li>
              <li>• Total time: <strong>{Math.floor(totalTime / 60)} minutes</strong> + breaks</li>
              <li>• Questions are randomized for each attempt</li>
              <li>• 5-minute breaks between shorter sections</li>
              <li>• 10-minute breaks after longer sections (20+ minutes)</li>

              <li>• 15-minute break where you can stand up and walk around if need be after Self-Description Inventory (Section 7)</li>
              <li>• You CANNOT go back to previous sections once completed</li>
              <li>• Timer will automatically advance sections when time expires</li>
              <li>• You can retake this test as many times as you like</li>
              <li>• Self-Description Inventory and Situational Judgment sections are NOT scored in this mock exam.</li>
              <li>• This is a marathon!</li>
              <li>• <strong>Good luck!</strong></li>
              <li>• 15-minute break after Self-Description Inventory (Section 7)</li>
              <li>• You cannot go back to previous sections once completed</li>
              <li>• Timer will automatically advance sections when time expires</li>

            </ul>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-xl text-gray-900 mb-4">Exam Sections:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {randomizedSections.map((section, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900">{idx + 1}. {section.name}</p>
                      <p className="text-sm text-gray-600">
                        {section.questionCount} questions
                      </p>
                    </div>
                    <span className="text-sm font-medium text-blue-600">
                      {Math.floor(section.timeLimit / 60)}min
                    </span>
                  </div>
                </div>
              ))}
              <div className="bg-green-50 p-3 rounded border-2 border-green-400 md:col-span-2">
                <p className="font-semibold text-green-900 text-center">
                  ☕ 15-Minute Break (After Section 7)
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleStart}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition"
            >
              Begin Exam
            </button>
            <button
              onClick={onExit}
              className="px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-bold transition"
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show break screen
  if (onBreak) {
    const minutes = Math.floor(breakTimeRemaining / 60);
    const seconds = breakTimeRemaining % 60;
    
    const breakInfo = {
      'main': {
        title: '☕ Main Break Time!',
        subtitle: `Take your 15-minute break! Stay hydrated! Stand up and stretch! Do whatever you need to do then get ready.`,
        color: 'green'
      },
      'long': {
        title: '⏸️ Break Time',
        subtitle: `Section complete! Take a 10-minute break before continuing.`,
        color: 'blue'
      },
      'short': {
        title: '⏸️ Quick Break',
        subtitle: `Section complete! Take a 5-minute break before the next section.`,
        color: 'indigo'
      }
    };
    
    const info = breakInfo[breakType] || breakInfo.short;
    const bgGradient = breakType === 'main' ? 'from-green-600 to-green-800' : 
                       breakType === 'long' ? 'from-blue-600 to-blue-800' : 
                       'from-indigo-600 to-indigo-800';
    const borderColor = breakType === 'main' ? 'border-green-300 bg-green-50' : 
                        breakType === 'long' ? 'border-blue-300 bg-blue-50' : 
                        'border-indigo-300 bg-indigo-50';
    const textColor = breakType === 'main' ? 'text-green-700' : 
                      breakType === 'long' ? 'text-blue-700' : 
                      'text-indigo-700';
    const buttonColor = breakType === 'main' ? 'bg-green-600 hover:bg-green-700' : 
                        breakType === 'long' ? 'bg-blue-600 hover:bg-blue-700' : 
                        'bg-indigo-600 hover:bg-indigo-700';
    
    return (
      <div className={`min-h-screen bg-gradient-to-br ${bgGradient} flex items-center justify-center p-6`}>
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-3xl w-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {info.title}
            </h1>
            
            <div className={`${borderColor} border-2 rounded-lg p-8 mb-6`}>
              <p className={`text-6xl font-bold ${textColor} mb-4`}>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </p>
              <p className="text-xl text-gray-700">
                {info.subtitle}
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Next Section:
              </h3>
              <div className="text-left">
                <p className="text-lg font-semibold text-gray-800">
                  Section {currentSectionIndex + 2}: {randomizedSections[currentSectionIndex + 1].name}
                </p>
                <p className="text-gray-600">
                  {randomizedSections[currentSectionIndex + 1].questionCount} questions • {Math.floor(randomizedSections[currentSectionIndex + 1].timeLimit / 60)} minutes
                </p>
              </div>
            </div>

            {breakType === 'main' && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-lg text-blue-900 mb-3">
                  Remaining Sections (5 of 12):
                </h3>
                <div className="space-y-2 text-left text-sm">
                  <p className="text-gray-700">• Section 8: Physical Science (20 questions, 10 min)</p>
                  <p className="text-gray-700">• Section 9: Table Reading (40 questions, 7 min)</p>
                  <p className="text-gray-700">• Section 10: Instrument Comprehension (25 questions, 5 min)</p>
                  <p className="text-gray-700">• Section 11: Block Counting (30 questions, 4.5 min)</p>
                  <p className="text-gray-700">• Section 12: Aviation Information (20 questions, 8 min)</p>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={handleEndBreak}
                className={`flex-1 ${buttonColor} text-white px-8 py-4 rounded-lg font-bold text-xl transition`}
              >
                Continue to Section {currentSectionIndex + 2}
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Break will automatically end when timer reaches 0:00
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Show final results
if (showResults) {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Full AFOQT Exam Complete!
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {sectionResults.map((section, idx) => {
              const totalQ = section.data.flatMap(p => p.questions || [p]).length;
              const answeredQ = Object.keys(section.answers).length;
              
              // Calculate correct answers
              let correctCount = 0;
              section.data.forEach(item => {
                const questions = item.questions || [item];
                questions.forEach(q => {
                  if (!q.options) return; // Skip non-standard questions
                  const userAnswer = section.answers[q.id];
                  const correctAnswer = q.correct ?? q.correctAnswer;
                  if (userAnswer === correctAnswer) {
                    correctCount++;
                  }
                });
              });
              
              const scoredQuestions = section.data.flatMap(p => p.questions || [p])
                .filter(q => q.options && Array.isArray(q.options)).length;
              
              const percentageCorrect = scoredQuestions > 0 
                ? ((correctCount / scoredQuestions) * 100).toFixed(0) 
                : 'N/A';
              
              const completionPercentage = totalQ > 0 
                ? ((answeredQ / totalQ) * 100).toFixed(0) 
                : 0;
              
              // Determine if section has scoreable questions
              const hasScoreableQuestions = scoredQuestions > 0;
              
              return (
                <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">{section.sectionName}</h3>
                  <div className="space-y-1 text-sm">
                    {hasScoreableQuestions ? (
                      <>
                        <p className="text-gray-700">
                          <strong>Score:</strong> {correctCount} / {scoredQuestions} correct
                        </p>
                        <p className={`font-semibold ${
                          percentageCorrect >= 80 ? 'text-green-600' :
                          percentageCorrect >= 60 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          Accuracy: {percentageCorrect}%
                        </p>
                      </>
                    ) : (
                      <p className="text-gray-700">
                        <strong>Completed:</strong> {answeredQ} / {totalQ} questions
                      </p>
                    )}
                    <p className="text-gray-700">
                      Completion: {completionPercentage}%
                    </p>
                    <p className="text-gray-700">
                      Time: {formatTime(section.timeUsed)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Overall Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-xl text-gray-900 mb-3">📊 Performance Summary</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              {(() => {
                // Calculate overall stats
                let totalCorrect = 0;
                let totalScored = 0;
                let totalAnswered = 0;
                let totalQuestions = 0;

                sectionResults.forEach(section => {
                  const allQuestions = section.data.flatMap(p => p.questions || [p]);
                  totalQuestions += allQuestions.length;
                  totalAnswered += Object.keys(section.answers).length;

                  allQuestions.forEach(q => {
                    if (!q.options) return;
                    totalScored++;
                    const userAnswer = section.answers[q.id];
                    const correctAnswer = q.correct ?? q.correctAnswer;
                    if (userAnswer === correctAnswer) {
                      totalCorrect++;
                    }
                  });
                });

                const overallAccuracy = totalScored > 0 
                  ? ((totalCorrect / totalScored) * 100).toFixed(1)
                  : 'N/A';
                
                return (
                  <>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <p className="text-sm text-gray-600 mb-1">Overall Accuracy</p>
                      <p className="text-2xl font-bold text-blue-900">{overallAccuracy}%</p>
                      <p className="text-xs text-gray-500">{totalCorrect}/{totalScored} correct</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <p className="text-sm text-gray-600 mb-1">Questions Answered</p>
                      <p className="text-2xl font-bold text-blue-900">{totalAnswered}</p>
                      <p className="text-xs text-gray-500">of {totalQuestions} total</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <p className="text-sm text-gray-600 mb-1">Sections Completed</p>
                      <p className="text-2xl font-bold text-blue-900">{sectionResults.length}</p>
                      <p className="text-xs text-gray-500">of 12 sections</p>
                    </div>
                  </>
                );
              })()}
            </div>
            <p className="text-gray-700 text-sm">
              Review each section with lower accuracy and identify areas for improvement.
            </p>
          </div>
          <div className="flex gap-4 sticky bottom-4">
            <button
              onClick={handleRetake}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition"
            >
              Retake Full Exam
            </button>
            <button
              onClick={onExit}
              className="px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-bold transition"
            >
              Exit to Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

  // Show current section
const passage = currentSection.randomizedData[currentPassage];
const totalQuestions = getTotalQuestions(currentSection.randomizedData);
const currentQuestionIds = currentSection.randomizedData.flatMap(p =>
  p.questions ? p.questions.map(q => q.id) : [p.id]
);
const answeredCount = Object.keys(answers).filter(id =>
  currentQuestionIds.includes(parseInt(id))
).length;

// Calculate current question number (1-based for display)
const currentQuestionNumber = currentPassage + 1;

return (
  <>
    <ExamHeader
      currentPassage={currentPassage}
      totalPassages={currentSection.randomizedData.length}
      timeRemaining={timeRemaining}
      answeredCount={answeredCount}
      totalQuestions={totalQuestions}
      sectionName={`${currentSection.name} (${currentSectionIndex + 1}/${totalSections})`}
      isPassageBased={currentSection.isPassageBased}
    />

    {currentSection.id === 'situational-judgment' ? (
      <SituationalJudgmentQuestions
        scenario={passage}
        answers={answers}
        onAnswer={(questionId, responseId, rating) => {
          setAnswers(prev => ({
            ...prev,
            [questionId]: {
              ...prev[questionId],
              [responseId]: rating
            }
          }));
        }}
        onNavigate={handleNavigate}
        isFirst={currentPassage === 0}
        isLast={currentPassage === currentSection.randomizedData.length - 1}
        onSubmit={handleSectionComplete}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        questionNumber={currentQuestionNumber}
        hideQuestionNumber={true}
      />
    ) : currentSection.id === 'table-reading' ? (
      <TableReadingQuestion
        tableQuestion={passage}
        answers={answers}
        onAnswer={handleAnswer}
        onNavigate={handleNavigate}
        isFirst={currentPassage === 0}
        isLast={currentPassage === currentSection.randomizedData.length - 1}
        onSubmit={handleSectionComplete}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        questionNumber={currentQuestionNumber}
        hideQuestionNumber={true}
      />
    ) : currentSection.id === 'self-description' ? (
      <SelfDescriptionInventory
        question={passage.questions[0]}
        selectedAnswer={answers[passage.questions[0].id]}
        onAnswerSelect={(value) => handleAnswer(passage.questions[0].id, value)}
        questionNumber={currentQuestionNumber}
        totalQuestions={totalQuestions}
        onNavigate={handleNavigate}
        isFirst={currentPassage === 0}
        isLast={currentPassage === currentSection.randomizedData.length - 1}
        onSubmit={handleSectionComplete}
        answeredCount={answeredCount}
        hideQuestionNumber={true}
      />
    ) : currentSection.id === 'instrument-comp' ? (
      <InstrumentCompQuestion
        question={passage}
        answers={answers}
        onAnswer={handleAnswer}
        onNavigate={handleNavigate}
        isFirst={currentPassage === 0}
        isLast={currentPassage === currentSection.randomizedData.length - 1}
        onSubmit={handleSectionComplete}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        questionNumber={currentQuestionNumber}
        hideQuestionNumber={true}
      />
    ) : currentSection.id === 'block-counting' ? (
      <BlockCountingQuestion
        question={passage}
        answers={answers}
        onAnswer={handleAnswer}
        onNavigate={handleNavigate}
        isFirst={currentPassage === 0}
        isLast={currentPassage === currentSection.randomizedData.length - 1}
        onSubmit={handleSectionComplete}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        questionNumber={currentQuestionNumber}
        hideQuestionNumber={true}
      />
    ) : (
      <ExamQuestion
        passage={passage}
        answers={answers}
        onAnswer={handleAnswer}
        onNavigate={handleNavigate}
        isFirst={currentPassage === 0}
        isLast={currentPassage === currentSection.randomizedData.length - 1}
        onSubmit={handleSectionComplete}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        isPassageBased={currentSection.isPassageBased}
        questionNumber={currentQuestionNumber}
        hideQuestionNumber={true}
      />
    )}
  </>
);
};