import React from 'react';
import { BookOpen, Target, Brain } from 'lucide-react';

export default function ModeSelector({ onSelectMode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full mx-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-blue-900 text-5xl font-bold">JW</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Jason's AFOQT Mock Exam
          </h1>
          <p className="text-xl text-blue-200">
            Jason's Air Force Officer Qualifying Test Practice Platform
          </p>
        </div>

        {/* Mode Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Full Exam Mode */}
          <div 
            onClick={() => onSelectMode('full')}
            className="bg-white rounded-lg shadow-2xl p-8 cursor-pointer transform transition hover:scale-105 hover:shadow-3xl"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                <Target className="w-10 h-10 text-red-600" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Full Exam Mode
            </h2>
            
            <p className="text-gray-600 text-center mb-6">
              Experience the complete 5-hour AFOQT with all 12 sections, timed breaks, and real test conditions.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span className="text-gray-700">All 12 sections included</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span className="text-gray-700">Strict timing enforced</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span className="text-gray-700">Questions randomized</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span className="text-gray-700">No going back once answered</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 mt-1">•</span>
                <span className="text-gray-700">Timed breaks between sections</span>
              </div>
            </div>
            
            <div className="bg-red-50 border-2 border-red-200 rounded p-4 mb-6">
              <p className="text-sm text-red-900 text-center font-semibold">
                ⚠️ Requires 5+ hours of uninterrupted time
              </p>
            </div>
            
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200">
              Start Full Exam
            </button>
          </div>

          {/* Practice Mode */}
          <div 
            onClick={() => onSelectMode('practice')}
            className="bg-white rounded-lg shadow-2xl p-8 cursor-pointer transform transition hover:scale-105 hover:shadow-3xl"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-green-600" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Practice Mode
            </h2>
            
            <p className="text-gray-600 text-center mb-6">
              Study specific sections at your own pace with instant feedback and detailed explanations.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-green-600 mt-1">•</span>
                <span className="text-gray-700">Choose specific sections</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 mt-1">•</span>
                <span className="text-gray-700">Practice at your own pace</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 mt-1">•</span>
                <span className="text-gray-700">Questions in consistent order</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 mt-1">•</span>
                <span className="text-gray-700">Review answers and explanations</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-600 mt-1">•</span>
                <span className="text-gray-700">Track progress by section</span>
              </div>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded p-4 mb-6">
              <p className="text-sm text-green-900 text-center font-semibold">
                ✓ Perfect for targeted improvement
              </p>
            </div>
            
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200">
              Start Practice
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-white">
          <div className="flex items-start gap-4">
            <Brain className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-xl mb-2">Recommended Approach</h3>
              <p className="text-blue-100 leading-relaxed">
                Start with <strong>Full Exam Mode</strong> to establish a baseline and identify your weak areas. 
                Then use <strong>Practice Mode</strong> to drill specific sections where you need improvement. 
                Retake the full exam periodically to track your progress and build test-taking endurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}