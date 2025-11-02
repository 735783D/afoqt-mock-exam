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
import { instrumentCompData, INSTRUMENT_COMP_CONFIG } from '../data/instrumentCompQuestions';
import { blockCountingData, BLOCK_COUNTING_CONFIG } from '../data/blockCountingQuestions';
import { situationalJudgmentData, SITUATIONAL_JUDGMENT_CONFIG } from '../data/situationalJudgmentQuestions';
import { aviationInfoData, AVIATION_INFO_CONFIG } from '../data/aviationInfoQuestions';
import { wordKnowledgeData, WORD_KNOWLEDGE_CONFIG } from '../data/wordKnowledgeQuestions';
import { verbalAnalogiesData, VERBAL_ANALOGIES_CONFIG } from '../data/verbalAnalogiesQuestions';
import { physicalSciencePassages } from '../data/practiceSets/readingComp/physical-science';
import { technologyEngineeringPassages, TECHNOLOGY_ENGINEERING_CONFIG } from '../data/practiceSets/readingComp/technology-engineering';
import { generalTopicsPassages, GENERAL_TOPICS_CONFIG } from '../data/practiceSets/readingComp/general-topics';
import { getTotalQuestions } from '../utils/examLogic';
import SituationalJudgmentQuestions from '../components/SituationalJudgmentQuestions'; 
import TableReadingQuestion from '../components/TableReadingQuestions';
import { selfDescriptionData, SELF_DESCRIPTION_CONFIG } from '../data/selfDescriptionQuestions';
import SelfDescriptionInventory from '../components/SelfDescriptionInventory';
import InstrumentCompQuestion from '../components/InstrumentCompQuestion';
import BlockCountingQuestion from '../components/BlockCountingQuestion';


// Helper to get questions for a specific numbered set
const getQuestionsForSet = (allQuestions, setId, questionsPerSet = 25) => {
  if (!setId || !setId.startsWith('set-')) {
    return allQuestions; // Not a numbered set or no setId, return all
  }
  
  const setNumber = parseInt(setId.split('-')[1]) - 1; // set-1 becomes index 0
  const start = setNumber * questionsPerSet;
  const end = start + questionsPerSet;
  
  return allQuestions.slice(start, end);
};

// Map section IDs to their names
const sectionNames = {
  'reading-comp': 'Reading Comprehension',
  'arithmetic': 'Arithmetic Reasoning'
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
        if (selectedSubsection === 'physical-science') {
          return {
            data: physicalSciencePassages,
            config: { 
              timeLimit: READING_CONFIG.timeLimit, 
              sectionName: 'Physical Science' 
            },
            name: 'Reading Comprehension - Physical Science',
            isArithmetic: false
          };
        }
        if (selectedSubsection === 'technology') {
          return {
            data: technologyEngineeringPassages,
            config: { 
              timeLimit: READING_CONFIG.timeLimit, 
              sectionName: TECHNOLOGY_ENGINEERING_CONFIG.name 
            },
            name: `Reading Comprehension - ${TECHNOLOGY_ENGINEERING_CONFIG.name}`,
            isArithmetic: false
          };
        }
        if (selectedSubsection === 'general-topics') {
          return {
            data: generalTopicsPassages,
            config: { 
              timeLimit: READING_CONFIG.timeLimit, 
              sectionName: GENERAL_TOPICS_CONFIG.name 
            },
            name: `Reading Comprehension - ${GENERAL_TOPICS_CONFIG.name}`,
            isArithmetic: false
          };
        }
        // Default to full section
        return {
          data: readingCompData,
          config: READING_CONFIG,
          name: 'Reading Comprehension',
          isArithmetic: false
        };

      case 'arithmetic':
        const arithmeticQs = getQuestionsForSet(arithmeticData, selectedSubsection, 25);
        return {
          data: arithmeticQs.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: WORD_KNOWLEDGE_CONFIG,
          name: 'Word Knowledge',
          isArithmetic: false // Simple question format like arithmetic
        };

      case 'word-knowledge':
        const wordKnowledgeQs = getQuestionsForSet(wordKnowledgeData, selectedSubsection, 25);
        return {
          data: wordKnowledgeQs.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: WORD_KNOWLEDGE_CONFIG,
          name: 'Word Knowledge',
          isArithmetic: false // Simple question format like arithmetic
        };
        
      case 'verbal-analogies':
        const verbalAnalData = getQuestionsForSet(verbalAnalogiesData, selectedSubsection, 25);
        return {
          data: verbalAnalData.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: VERBAL_ANALOGIES_CONFIG,
          name: 'Verbal Analogies',
          isArithmetic: false
        };
        
      case 'aviation-info':
        const aviQuestions = getQuestionsForSet(aviationInfoData, selectedSubsection, 25);
        return {
          data: aviQuestions.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: AVIATION_INFO_CONFIG,
          name: 'Aviation Information',
          isArithmetic: false,
          isPassageBased: false
        };
        
      case 'math-knowledge':
        const mathQuestions = getQuestionsForSet(mathKnowledgeData, selectedSubsection, 25);
        return {
          data: mathQuestions.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: MATH_KNOWLEDGE_CONFIG,
          name: 'Math Knowledge',
          isArithmetic: false
        };
        
      case 'physical-science':
        const phyScienceQuestions = getQuestionsForSet(physicalScienceData, selectedSubsection, 25);
        return {
          data: phyScienceQuestions.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: PHYSICAL_SCIENCE_CONFIG,
          name: 'Physical Science',
          isArithmetic: false
        };
        
      case 'table-reading':
        const trQuestions = getQuestionsForSet(tableReadingData, selectedSubsection, 25);
        return {
          data: trQuestions.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: TABLE_READING_CONFIG,
          name: 'Table Reading',
          isArithmetic: false
        };
        
      case 'instrument-comp':
        const instrumentCompQs = getQuestionsForSet(instrumentCompData, selectedSubsection, 25);
        return {
          data: instrumentCompQs.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: INSTRUMENT_COMP_CONFIG,
          name: 'Instrument Comprehension',
          isArithmetic: false
        };
        
      case 'block-counting':
        const blockCountingQs = getQuestionsForSet(blockCountingData, selectedSubsection, 25);
        return {
          data: blockCountingQs.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: BLOCK_COUNTING_CONFIG,
          name: 'Block Counting',
          isArithmetic: false
        };
        
      case 'situational-judgment':
        const sjQuestions = getQuestionsForSet(situationalJudgmentData, selectedSubsection, 25);
        return {
          data: sjQuestions.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: SITUATIONAL_JUDGMENT_CONFIG,
          name: 'Situational Judgment',
          isArithmetic: false
        };

      case 'self-description':
        const sdiQuestions = getQuestionsForSet(selfDescriptionData, selectedSubsection, 25);
        return {
          data: sdiQuestions.map(q => ({
            id: q.id,
            questions: [q]
          })),
          config: SELF_DESCRIPTION_CONFIG,
          name: 'Self-Description Inventory',
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

  // All sections now have subsections for drill practice
  const sectionsWithSubsections = [
    'reading-comp', 
    'arithmetic', 
    'math-knowledge', 
    'word-knowledge', 
    'verbal-analogies', 
    'aviation-info', 
    'physical-science',
    'table-reading',
    'instrument-comp',
    'block-counting',
    'situational-judgment',
    'self-description',
    'block-counting'
  ];

    // Determine if section is passage-based or question-based
const isPassageBased = sectionId === 'reading-comp';
console.log('Section ID:', sectionId, 'isPassageBased:', isPassageBased);

  const handleBackToSubsections = () => {
    // If section has subsections, go back to subsection selector
    if (sectionsWithSubsections.includes(sectionId)) {
      setSelectedSubsection(null);
      setExamStarted(false);
      setCurrentPassage(0);
      setAnswers({});
      setShowResults(false);
    } else {
      // Otherwise, go back to main section selector
      onExit();
    }
  };
  
  // Show subsection selector if section has subsections AND no subsection selected yet
  if (sectionsWithSubsections.includes(sectionId) && !selectedSubsection) {
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
        timeRemaining={null}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        sectionName={section.name}
        isPassageBased={isPassageBased}
      />
      
      {sectionId === 'situational-judgment' ? (
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
          isLast={currentPassage === section.data.length - 1}
          onSubmit={handleSubmit}
          answeredCount={answeredCount}
          totalQuestions={totalQuestions}
        />
        ) : sectionId === 'table-reading' ? (
          <TableReadingQuestion 
            tableQuestion={passage}
            answers={answers}
            onAnswer={handleAnswer}
            onNavigate={handleNavigate}
            isFirst={currentPassage === 0}
            isLast={currentPassage === section.data.length - 1}
            onSubmit={handleSubmit}
            answeredCount={answeredCount}
            totalQuestions={totalQuestions}
          />
        ) : sectionId === 'self-description' ? (
          <SelfDescriptionInventory
            question={passage.questions[0]}
            selectedAnswer={answers[passage.questions[0].id]}
            onAnswerSelect={(value) => handleAnswer(passage.questions[0].id, value)}
            questionNumber={currentPassage + 1}
            totalQuestions={totalQuestions}
            onNavigate={handleNavigate}
            isFirst={currentPassage === 0}
            isLast={currentPassage === section.data.length - 1}
            onSubmit={handleSubmit}
            answeredCount={answeredCount}
          />
        ) : sectionId === 'instrument-comp' ? (
            <InstrumentCompQuestion
              question={passage}
              answers={answers}
              onAnswer={handleAnswer}
              onNavigate={handleNavigate}
              isFirst={currentPassage === 0}
              isLast={currentPassage === section.data.length - 1}
              onSubmit={handleSubmit}
              answeredCount={answeredCount}
              totalQuestions={totalQuestions}
            />
        ) : sectionId === 'block-counting' ? (
            <BlockCountingQuestion
              question={passage}
              answers={answers}
              onAnswer={handleAnswer}
              onNavigate={handleNavigate}
              isFirst={currentPassage === 0}
              isLast={currentPassage === section.data.length - 1}
              onSubmit={handleSubmit}
              answeredCount={answeredCount}
              totalQuestions={totalQuestions}
            />
        ) : (
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
            isPassageBased={isPassageBased}
          />
        )}
      
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
};