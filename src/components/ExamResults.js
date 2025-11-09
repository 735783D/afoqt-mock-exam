import React from 'react';
import { CheckCircle } from 'lucide-react';
import { calculateScore } from '../utils/examLogic';

export default function ExamResults({ examData, answers, onRetake }) {
  const { correct, total } = calculateScore(examData, answers);
  const percentage = ((correct / total) * 100).toFixed(1);
  
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-10 mb-6">
          <div className="text-center mb-8">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-blue-900 mb-2">Exam Complete!</h1>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-blue-900 mb-2">{percentage}%</div>
              <div className="text-xl text-gray-700">{correct} out of {total} correct</div>
            </div>
            <div className="border-t border-blue-200 pt-4">
              <h3 className="font-semibold text-lg mb-3 text-blue-900">Score Guide:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• 21-25 correct: Excellent</li>
                <li>• 17-20 correct: Good</li>
                <li>• 13-16 correct: Fair - Review needed</li>
                <li>• Below 13: Additional practice recommended</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Answer Review */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Answer Review & Explanations
          </h2>
          <div className="space-y-8">
            {examData.map(passage => (
              <div key={passage.id}>
                <h3 className="font-semibold text-lg text-blue-800 mb-4">
                  Passage {passage.id}
                </h3>
                {passage.questions.map(q => {
                  const userAnswer = answers[q.id];
                  const isCorrect = userAnswer === q.correct;
                  
                  return (
                    <div 
                      key={q.id} 
                      className={`mb-6 p-4 rounded-lg border-2 ${
                        isCorrect 
                          ? 'bg-green-50 border-green-300' 
                          : 'bg-red-50 border-red-300'
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                          isCorrect ? 'bg-green-500' : 'bg-red-500'
                        }`}>
                          <span className="text-white text-sm">
                            {isCorrect ? '✓' : '✗'}
                          </span>
                        </div>
                        <div className="flex-grow">
                          <p className="font-semibold text-gray-900 mb-2">
                            Question {q.id}: {q.text}
                          </p>
                          <p className="text-sm text-gray-700 mb-2">
                            <strong>Your answer:</strong>{' '}
                            {userAnswer !== undefined 
                              ? q.options[userAnswer] 
                              : 'Not answered'}
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-gray-700 mb-2">
                              <strong className="text-green-700">Correct answer:</strong>{' '}
                              {q.options[q.correct]}
                            </p>
                          )}
                          <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
                            <p className="text-sm text-gray-800">
                              <strong className="text-blue-900">Explanation:</strong>{' '}
                              {q.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onRetake}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
        >
          Retake Exam
        </button>
      </div>
    </div>
  );
}