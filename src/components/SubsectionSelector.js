import React from 'react';
import { ArrowLeft, BookOpen, Calculator, Brain, Plane, Beaker, Cpu, Table, Gauge, Box, Users } from 'lucide-react';
import { AVIATION_MILITARY_CONFIG } from '../data/practiceSets/readingComp/aviation-military';
import { PHYSICAL_SCIENCE_CONFIG } from '../data/practiceSets/readingComp/physical-science';
import { TECHNOLOGY_ENGINEERING_CONFIG } from '../data/practiceSets/readingComp/technology-engineering';
import { GENERAL_TOPICS_CONFIG } from '../data/practiceSets/readingComp/general-topics';

// Helper function to generate numbered sets
const generateNumberedSets = (totalQuestions, questionsPerSet = 25, icon = BookOpen) => {
  const sets = [];
  const numSets = Math.ceil(totalQuestions / questionsPerSet);
  
  for (let i = 0; i < numSets; i++) {
    const start = i * questionsPerSet + 1;
    const end = Math.min((i + 1) * questionsPerSet, totalQuestions);
    sets.push({
      id: `set-${i + 1}`,
      name: `Set ${i + 1}`,
      description: `Questions ${start}-${end}`,
      questions: end - start + 1,
      icon: icon
    });
  }
  
  return sets;
};

const subsectionData = {
  'reading-comp': [
    // Keep these - they're actual different content files
    {
      id: 'aviation-military',
      name: AVIATION_MILITARY_CONFIG.name,
      description: AVIATION_MILITARY_CONFIG.description,
      questions: AVIATION_MILITARY_CONFIG.totalQuestions,
      icon: Plane
    },
    {
      id: 'physical-science',
      name: PHYSICAL_SCIENCE_CONFIG.name,
      description: PHYSICAL_SCIENCE_CONFIG.description,
      questions: PHYSICAL_SCIENCE_CONFIG.totalQuestions,
      icon: Beaker
    },
    {
      id: 'technology',
      name: TECHNOLOGY_ENGINEERING_CONFIG.name,
      description: TECHNOLOGY_ENGINEERING_CONFIG.description,
      questions: TECHNOLOGY_ENGINEERING_CONFIG.totalQuestions,
      icon: Cpu
    },
    {
      id: 'general-topics',
      name: GENERAL_TOPICS_CONFIG.name,
      description: GENERAL_TOPICS_CONFIG.description,
      questions: GENERAL_TOPICS_CONFIG.totalQuestions,
      icon: BookOpen
    }
  ],
  'arithmetic': generateNumberedSets(200, 25, Calculator),
  'math-knowledge': generateNumberedSets(200, 25, Brain),
  'word-knowledge': generateNumberedSets(200, 25, BookOpen),
  'verbal-analogies': generateNumberedSets(200, 25, Brain),
  'aviation-info': generateNumberedSets(200, 25, Plane),
  'physical-science': generateNumberedSets(200, 25, Beaker),
  'table-reading': generateNumberedSets(200, 40, Table),
  'instrument-comp': generateNumberedSets(100, 25, Gauge),
  'block-counting': generateNumberedSets(150, 30, Box),
  'situational-judgment': generateNumberedSets(200, 25, Users)
};
export default function SubsectionSelector({ sectionId, sectionName, onSelectSubsection, onBack }) {
  const subsections = subsectionData[sectionId] || [];

  // If no subsections defined, go straight to practice
  if (subsections.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-lg shadow-xl p-12 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            No Subsections Available
          </h2>
          <p className="text-gray-600 mb-8">
            This section doesn't have subsections yet. Practice the full section instead.
          </p>
          <button
            onClick={onBack}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition"
          >
            Back to Section Selection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Section Selection
          </button>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {sectionName}
          </h1>
          <p className="text-xl text-gray-600">
            Choose a subsection to practice
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-lg text-blue-900 mb-2">
            📚 Focused Practice
          </h3>
          <p className="text-blue-800">
            Each subsection contains 25 questions focused on a specific topic area. 
            This allows you to strengthen weak areas or master specific concepts before 
            taking the full section practice test.
          </p>
        </div>

        {/* Subsection Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {subsections.map(subsection => {
            const Icon = subsection.icon;
            return (
              <div
                key={subsection.id}
                onClick={() => onSelectSubsection(subsection.id)}
                className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl hover:scale-105 transition transform"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {subsection.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {subsection.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500">
                    {subsection.questions} questions
                  </span>
                  <span className="text-blue-600 font-semibold text-sm">
                    Start Practice →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Section Option */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Practice Full Section
              </h3>
              <p className="text-gray-700 mb-4">
                Ready to practice all topics together? Take the full {sectionName} practice test 
                with questions covering all subsections.
              </p>
              <button
                onClick={() => onSelectSubsection('full')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Practice Full Section
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}