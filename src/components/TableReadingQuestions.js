import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TableDisplay from './TableDisplay';

export default function TableReadingQuestion({ 
  tableQuestion,
  answers, 
  onAnswer, 
  onNavigate, 
  isFirst, 
  isLast, 
  onSubmit,
  answeredCount,
  totalQuestions
}) {
  const question = tableQuestion.questions[0];

  return (
    <div className="min-h-screen bg-gray-100 pb-8">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Question {tableQuestion.id}
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {question.text}
          </h3>

          {/* Display the table */}
          <div className="mb-8 overflow-auto">
            <TableDisplay 
              data={question.tableData}
              rowLabels={question.rowLabels}
              columnHeaders={question.columnHeaders}
            />
          </div>

          {/* Answer options */}
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