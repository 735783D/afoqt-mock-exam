import React from 'react';
import '../styles/exam.css';

const BlockCountingQuestion = ({
  question,
  answers,
  onAnswer,
  onNavigate,
  isFirst,
  isLast,
  onSubmit,
  answeredCount,
  totalQuestions
}) => {
    
  // const currentQuestion = question.questions[0];
  const currentQuestion = question.questions ? question.questions[0] : question;
  const selectedAnswer = answers[currentQuestion.id];
  console.log('question prop:', question);
console.log('currentQuestion:', currentQuestion);
console.log('All answers:', answers);
console.log('Selected answer for this Q:', selectedAnswer);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-6">
          {/* Question Header */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Question {currentQuestion.id}
            </h3>
            <p className="text-gray-600">
              Study the blocks and count carefully
            </p>
          </div>

          {/* Block Image Display */}
          <div className="flex justify-center mb-8 bg-gray-100 rounded-lg p-8">
            <div className="relative">
              <img
                src={currentQuestion.image}
                alt="Block counting diagram"
                className="max-w-full h-auto"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="mb-6">
            <p className="text-lg text-gray-800 font-medium">
              {currentQuestion.question}
            </p>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                // onClick={() => onAnswer(question.id, index)}
                onClick={() => {
  console.log('Calling onAnswer with ID:', question.id, 'index:', index);
  onAnswer(question.id, index);
}}
                className={`question-option ${
                  selectedAnswer === index ? 'selected' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center font-bold text-lg">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <div className="flex-grow">
                    <p className="text-2xl font-bold text-gray-800">{option}</p>
                    <p className="text-sm text-gray-500">
                      {option === 1 ? 'block' : 'blocks'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <button
              onClick={() => onNavigate('prev')}
              disabled={isFirst}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                isFirst
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              ← Previous
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Progress: {answeredCount} / {totalQuestions} answered
              </p>
              <div className="w-48 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {isLast ? (
              <button
                onClick={onSubmit}
                className="px-6 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition"
              >
                Submit Section
              </button>
            ) : (
              <button
                onClick={() => onNavigate('next')}
                className="px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockCountingQuestion;