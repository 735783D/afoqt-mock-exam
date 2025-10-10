import React, { useState } from 'react';
import ExamWelcome from '../components/ExamWelcome';

export default function FullExamMode({ onExit }) {
  const [welcomeComplete, setWelcomeComplete] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  // List of all 12 sections in order
  const sections = [
    'Verbal Analogies',
    'Arithmetic Reasoning',
    'Word Knowledge',
    'Math Knowledge',
    'Reading Comprehension',
    'Situational Judgment',
    'Self-Description Inventory',
    'Physical Science',
    'Table Reading',
    'Instrument Comprehension',
    'Block Counting',
    'Aviation Information'
  ];

  // Show welcome screen
  if (!welcomeComplete) {
    return (
      <div>
        <ExamWelcome onBegin={() => setWelcomeComplete(true)} />
        <div className="fixed bottom-4 left-4">
          <button
            onClick={onExit}
            className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition"
          >
            ← Back to Mode Selection
          </button>
        </div>
      </div>
    );
  }

  // TODO: Build out full exam flow with all sections
  // For now, just a placeholder
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-xl p-12 max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Full Exam Mode
        </h1>
        <p className="text-gray-600 mb-6">
          This mode will include all 12 sections in order with proper timing and breaks.
        </p>
        <p className="text-gray-600 mb-8">
          Currently under construction. Check back soon!
        </p>
        <button
          onClick={onExit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition"
        >
          Back to Mode Selection
        </button>

        <div className="mt-8 text-left">
          <h3 className="font-semibold mb-2">Planned sections:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
            {sections.map((section, idx) => (
              <li key={idx}>{section}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}