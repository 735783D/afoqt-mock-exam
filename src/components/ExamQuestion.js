import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ExamQuestion({ 
  passage, 
  answers, 
  onAnswer, 
  onNavigate, 
  isFirst, 
  isLast, 
  onSubmit,
  answeredCount,
  totalQuestions
}) {
  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Passage {passage.id}
          </h2>
          
          <div className="prose max-w-none mb-8 px-2">
            <p className="text-gray-800 leading-relaxed whitespace-pre-line text-base md:text-lg">
              {passage.passage}
            </p>
          </div>

          <div className="space-y-8">
            {passage.questions.map((question) => (
              <div key={question.id} className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-lg mb-4 text-gray-900">
                  Question {question.id}: {question.text}
                </h3>
                <div className="space-y-3">
                  {question.options.map((option, optIdx) => (
                    <label
                      key={optIdx}
                      className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition ${
                        answers[question.id] === optIdx
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        checked={answers[question.id] === optIdx}
                        onChange={() => onAnswer(question.id, optIdx)}
                        className="mt-1 mr-3"
                      />
                      <span className="text-gray-800">
                        <strong>{String.fromCharCode(65 + optIdx)})</strong> {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
          <button
            onClick={() => onNavigate('prev')}
            disabled={isFirst}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          {isLast ? (
            <button
              onClick={onSubmit}
              className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
            >
              Submit Exam
            </button>
          ) : (
            <button
              onClick={() => onNavigate('next')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 bg-white rounded-lg shadow p-4 mx-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Progress</span>
            <span className="text-sm text-gray-600">{answeredCount}/{totalQuestions}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}