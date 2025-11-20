import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SituationalJudgmentQuestions({ 
  scenario,
  answers, 
  onAnswer, 
  onNavigate, 
  isFirst, 
  isLast, 
  onSubmit,
  answeredCount,
  totalQuestions
}) {
  const question = scenario.questions[0]; // Get the actual question

  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-6">
          
          {/* Scenario text */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-gray-800 leading-relaxed text-base md:text-lg">
              {question.scenario}
            </p>
          </div>

          {/* Response options */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900 mb-4">
              Rate each response:
            </h3>
            {question.responses.map((response) => (
              <div key={response.id} className="border-2 border-gray-200 rounded-lg p-4">
                <p className="text-gray-800 mb-3">
                  <strong>{response.id.toUpperCase()})</strong> {response.text}
                </p>
                <div className="flex gap-2">
                  {['Least likely', 'Less likely', 'Do nothing', 'More likely', 'Most likely'].map((rating, idx) => (
                    <label
                      key={idx}
                      className={`flex-1 text-center p-2 border-2 rounded cursor-pointer transition ${
                        answers[question.id]?.[response.id] === idx
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`${question.id}-${response.id}`}
                        checked={answers[question.id]?.[response.id] === idx}
                        onChange={() => onAnswer(question.id, response.id, idx)}
                        className="sr-only"
                      />
                      <span className="text-xs">{rating}</span>
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
              Submit
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

        {/* Progress */}
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