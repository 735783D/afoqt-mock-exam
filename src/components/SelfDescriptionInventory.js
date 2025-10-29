import React from 'react';
import '../styles/exam.css';

const SelfDescriptionInventory = ({ 
  question, 
  selectedAnswer, 
  onAnswerSelect, 
  questionNumber, 
  totalQuestions,
  onNavigate,
  isFirst,
  isLast,
  onSubmit,
  answeredCount
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="question-container">
            <div className="question-header">
              <h3>Question {questionNumber} of {totalQuestions}</h3>
              <p className="category-label">
                {question.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </p>
            </div>

            <div className="sdi-statement">
              <p>{question.statement}</p>
            </div>

            <div className="sdi-response-options">
              <button
                className={`sdi-option ${selectedAnswer === 0 ? 'selected' : ''}`}
                onClick={() => onAnswerSelect(0)}
              >
                Not Like Me
              </button>
              <button
                className={`sdi-option ${selectedAnswer === 1 ? 'selected' : ''}`}
                onClick={() => onAnswerSelect(1)}
              >
                Like Me
              </button>
            </div>

            {question.reverse && (
              <div className="reverse-indicator">
                <small>⟲ Reverse-scored item</small>
              </div>
            )}

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
                  Submit Assessment
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
    </div>
  );
};

export default SelfDescriptionInventory;