// import React from 'react';
// import { ArrowLeft, CheckCircle } from 'lucide-react';

// const sections = [
//   { 
//     id: 'verbal-analogies', 
//     name: 'Verbal Analogies', 
//     questions: 25, 
//     time: 8,
//     description: 'Word relationships and reasoning',
//     available: false
//   },
//   { 
//     id: 'arithmetic', 
//     name: 'Arithmetic Reasoning', 
//     questions: 25, 
//     time: 29,
//     description: 'Word problems and calculations',
//     available: true
//   },
//   { 
//     id: 'word-knowledge', 
//     name: 'Word Knowledge', 
//     questions: 25, 
//     time: 5,
//     description: 'Vocabulary and definitions',
//     available: false
//   },
//   { 
//     id: 'math-knowledge', 
//     name: 'Math Knowledge', 
//     questions: 25, 
//     time: 22,
//     description: 'Algebra, geometry, and math concepts',
//     available: false
//   },
//   { 
//     id: 'reading-comp', 
//     name: 'Reading Comprehension', 
//     questions: 25, 
//     time: 38,
//     description: 'Reading passages and analysis',
//     available: true
//   },
//   { 
//     id: 'situational-judgment', 
//     name: 'Situational Judgment', 
//     questions: 50, 
//     time: 35,
//     description: 'Leadership scenarios and decision-making',
//     available: false
//   },
//   { 
//     id: 'self-description', 
//     name: 'Self-Description Inventory', 
//     questions: 220, 
//     time: 40,
//     description: 'Personality assessment',
//     available: false
//   },
//   { 
//     id: 'physical-science', 
//     name: 'Physical Science', 
//     questions: 20, 
//     time: 10,
//     description: 'Physics, chemistry, and general science',
//     available: false
//   },
//   { 
//     id: 'table-reading', 
//     name: 'Table Reading', 
//     questions: 40, 
//     time: 7,
//     description: 'Quick data extraction from tables',
//     available: false
//   },
//   { 
//     id: 'instrument-comp', 
//     name: 'Instrument Comprehension', 
//     questions: 25, 
//     time: 5,
//     description: 'Aircraft instrument interpretation',
//     available: false
//   },
//   { 
//     id: 'block-counting', 
//     name: 'Block Counting', 
//     questions: 30, 
//     time: 4.5,
//     description: 'Spatial reasoning with 3D blocks',
//     available: false
//   },
//   { 
//     id: 'aviation-info', 
//     name: 'Aviation Information', 
//     questions: 20, 
//     time: 8,
//     description: 'Aircraft systems and flight principles',
//     available: false
//   }
// ];

// export default function SectionSelector({ onSelectSection, onBack }) {
//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="max-w-6xl mx-auto px-4">
//         {/* Header */}
//         <div className="mb-8">
//           <button 
//             onClick={onBack}
//             className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4 transition"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Back to Mode Selection
//           </button>
          
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">
//             Practice Mode
//           </h1>
//           <p className="text-xl text-gray-600">
//             Choose a section to practice
//           </p>
//         </div>

//         {/* Section Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {sections.map(section => (
//             <div
//               key={section.id}
//               onClick={() => section.available && onSelectSection(section.id)}
//               className={`bg-white rounded-lg shadow-lg p-6 transition ${
//                 section.available 
//                   ? 'cursor-pointer hover:shadow-xl hover:scale-105' 
//                   : 'opacity-50 cursor-not-allowed'
//               }`}
//             >
//               <div className="flex items-start justify-between mb-4">
//                 <h3 className="text-xl font-bold text-gray-900 flex-grow">
//                   {section.name}
//                 </h3>
//                 {section.available && (
//                   <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
//                 )}
//                 {!section.available && (
//                   <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">
//                     COMING SOON
//                   </span>
//                 )}
//               </div>
              
//               <p className="text-gray-600 text-sm mb-4">
//                 {section.description}
//               </p>
              
//               <div className="flex justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
//                 <span>{section.questions} questions</span>
//                 <span>{section.time} min</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Info Box */}
//         <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
//           <h3 className="font-semibold text-lg text-blue-900 mb-2">
//             Practice Mode Features
//           </h3>
//           <ul className="space-y-2 text-blue-800">
//             <li>• Questions appear in the same order each time for consistent learning</li>
//             <li>• No time pressure - take as long as you need</li>
//             <li>• Detailed explanations for every answer</li>
//             <li>• Review your answers after completing the section</li>
//             <li>• Retake sections as many times as you want</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const sections = [
  { 
    id: 'verbal-analogies', 
    name: 'Verbal Analogies', 
    questions: 25, 
    time: 8,
    description: 'Word relationships and reasoning',
    available: true
  },
  { 
    id: 'arithmetic', 
    name: 'Arithmetic Reasoning', 
    questions: 25, 
    time: 29,
    description: 'Word problems and calculations',
    available: true
  },
  { 
    id: 'word-knowledge', 
    name: 'Word Knowledge', 
    questions: 25, 
    time: 5,
    description: 'Vocabulary and definitions',
    available: true
  },
  { 
    id: 'math-knowledge', 
    name: 'Math Knowledge', 
    questions: 25, 
    time: 22,
    description: 'Algebra, geometry, and math concepts',
    available: true
  },
  { 
    id: 'reading-comp', 
    name: 'Reading Comprehension', 
    questions: 25, 
    time: 38,
    description: 'Reading passages and analysis',
    available: true
  },
  { 
    id: 'situational-judgment', 
    name: 'Situational Judgment', 
    questions: 50, 
    time: 35,
    description: 'Leadership scenarios and decision-making',
    available: true
  },
  { 
    id: 'self-description', 
    name: 'Self-Description Inventory', 
    questions: 220, 
    time: 40,
    description: 'Personality assessment',
    available: true
  },
  { 
    id: 'physical-science', 
    name: 'Physical Science', 
    questions: 20, 
    time: 10,
    description: 'Physics, chemistry, and general science',
    available: true
  },
  { 
    id: 'table-reading', 
    name: 'Table Reading', 
    questions: 40, 
    time: 7,
    description: 'Quick data extraction from tables',
    available: true
  },
  { 
    id: 'instrument-comp', 
    name: 'Instrument Comprehension', 
    questions: 25, 
    time: 5,
    description: 'Aircraft instrument interpretation',
    available: true
  },
  { 
    id: 'block-counting', 
    name: 'Block Counting', 
    questions: 30, 
    time: 4.5,
    description: 'Spatial reasoning with 3D blocks',
    available: false
  },
  { 
    id: 'aviation-info', 
    name: 'Aviation Information', 
    questions: 20, 
    time: 8,
    description: 'Aircraft systems and flight principles',
    available: true
  }
];

export default function SectionSelector({ onSelectSection, onBack }) {
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
            Back to Mode Selection
          </button>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Practice Mode
          </h1>
          <p className="text-xl text-gray-600">
            Choose a section to practice
          </p>
        </div>

        {/* Section Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map(section => (
            <div
              key={section.id}
              onClick={() => section.available && onSelectSection(section.id)}
              className={`bg-white rounded-lg shadow-lg p-6 transition ${
                section.available 
                  ? 'cursor-pointer hover:shadow-xl hover:scale-105' 
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 flex-grow">
                  {section.name}
                </h3>
                {section.available && (
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                )}
                {!section.available && (
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">
                    COMING SOON
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                {section.description}
              </p>
              
              <div className="flex justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
                <span>{section.questions} questions</span>
                <span>{section.time} min</span>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-lg text-blue-900 mb-2">
            Practice Mode Features
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li>• Questions appear in the same order each time for consistent learning</li>
            <li>• No time pressure - take as long as you need</li>
            <li>• Detailed explanations for every answer</li>
            <li>• Review your answers after completing the section</li>
            <li>• Retake sections as many times as you want</li>
          </ul>
        </div>
      </div>
    </div>
  );
}