// import React from 'react';

// export default function ExamWelcome({ onBegin }) {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-6">
//       <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 max-w-4xl w-full mx-4">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="mb-4">
//             <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
//               <span className="text-white text-4xl font-bold">USAF</span>
//             </div>
//           </div>
//           <h1 className="text-4xl font-bold text-blue-900 mb-2">
//             Air Force Officer Qualifying Test
//           </h1>
//           <h2 className="text-2xl text-blue-700">AFOQT Mock Exam</h2>
//         </div>

//         {/* Important Notice */}
//         <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8">
//           <h3 className="font-bold text-xl text-red-900 mb-3 flex items-center gap-2">
//             <span className="text-2xl">⚠️</span>
//             IMPORTANT TESTING RULES
//           </h3>
//           <ul className="space-y-3 text-gray-800">
//             <li className="flex items-start gap-2">
//               <span className="text-red-600 font-bold mt-1">•</span>
//               <span><strong>No going back:</strong> Once you move to the next question, you cannot return to previous questions.</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-red-600 font-bold mt-1">•</span>
//               <span><strong>Timed sections:</strong> Each section has a strict time limit. The test will automatically advance when time expires.</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-red-600 font-bold mt-1">•</span>
//               <span><strong>Answer every question:</strong> There is NO PENALTY for wrong answers. Make your best guess even if you're unsure.</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-red-600 font-bold mt-1">•</span>
//               <span><strong>No pausing:</strong> Once started, you cannot pause a section. Ensure you have adequate time before beginning.</span>
//             </li>
//             <li className="flex items-start gap-2">
//               <span className="text-red-600 font-bold mt-1">•</span>
//               <span><strong>Breaks provided:</strong> You'll receive timed breaks between sections to rest and refocus.</span>
//             </li>
//           </ul>
//         </div>

//         {/* Test Structure */}
//         <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
//           <h3 className="font-semibold text-xl mb-4 text-blue-900">
//             Test Structure
//           </h3>
//           <div className="space-y-3 text-gray-700">
//             <div className="flex justify-between items-center py-2 border-b border-blue-200">
//               <span className="font-medium">Verbal Analogies</span>
//               <span className="text-gray-600">25 questions • 8 minutes</span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-blue-200">
//               <span className="font-medium">Arithmetic Reasoning</span>
//               <span className="text-gray-600">25 questions • 29 minutes</span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-blue-200">
//               <span className="font-medium">Word Knowledge</span>
//               <span className="text-gray-600">25 questions • 5 minutes</span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-blue-200">
//               <span className="font-medium">Math Knowledge</span>
//               <span className="text-gray-600">25 questions • 22 minutes</span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-blue-200">
//               <span className="font-medium">Reading Comprehension</span>
//               <span className="text-gray-600">25 questions • 38 minutes</span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-blue-200">
//               <span className="font-medium">Situational Judgment</span>
//               <span className="text-gray-600">50 questions • 35 minutes</span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-blue-200">
//               <span className="font-medium">Self-Description Inventory</span>
//               <span className="text-gray-600">220 questions • 40 minutes</span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-blue-200">
//               <span className="font-medium">Physical Science</span>
//               <span className="text-gray-600">20 questions • 10 minutes</span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-blue-200">
//               <span className="font-medium">Table Reading</span>
//               <span className="text-gray-600">40 questions • 7 minutes</span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-blue-200">
//               <span className="font-medium">Instrument Comprehension</span>
//               <span className="text-gray-600">25 questions • 5 minutes</span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-blue-200">
//               <span className="font-medium">Block Counting</span>
//               <span className="text-gray-600">30 questions • 4.5 minutes</span>
//             </div>
//             <div className="flex justify-between items-center py-2">
//               <span className="font-medium">Aviation Information</span>
//               <span className="text-gray-600">20 questions • 8 minutes</span>
//             </div>
//           </div>
//           <div className="mt-4 pt-4 border-t border-blue-200">
//             <p className="text-center text-gray-700 font-semibold">
//               Total Testing Time: Approximately 5 hours (including breaks)
//             </p>
//           </div>
//         </div>

//         {/* What You'll Need */}
//         <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
//           <h3 className="font-semibold text-xl mb-4 text-gray-900">
//             Before You Begin
//           </h3>
//           <ul className="space-y-2 text-gray-700">
//             <li className="flex items-center gap-2">
//               <span className="text-green-600">✓</span>
//               <span>Scratch paper and pencil for calculations</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="text-green-600">✓</span>
//               <span>Quiet testing environment free from distractions</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="text-green-600">✓</span>
//               <span>5+ hours of uninterrupted time</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="text-green-600">✓</span>
//               <span>Water and any necessary materials nearby (this won't happen in the real exam)</span>
//             </li>
//           </ul>
//         </div>

//         {/* Begin Button */}
//         <div className="text-center">
//           <button
//             onClick={onBegin}
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg text-xl transition duration-200 shadow-lg"
//           >
//             I Understand - Begin Test
//           </button>
//           <p className="mt-4 text-sm text-gray-600">
//             By clicking this button, you acknowledge that you have read and understood all testing rules.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function ExamWelcome({ onBegin }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 max-w-4xl w-full mx-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <div className="w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 p-3">
              <img 
                src="/logo512.png" 
                alt="Logo" 
                className="w-full h-full object-contain brightness-0 invert"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-white text-4xl font-bold">Jason</span>';
                }}
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            Air Force Officer Qualifying Test
          </h1>
          <h2 className="text-2xl text-blue-700">Jason's AFOQT Mock Exam</h2>
        </div>

        {/* Important Notice */}
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-xl text-red-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            IMPORTANT TESTING RULES
          </h3>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-1">•</span>
              <span><strong>No going back:</strong> Once you move to the next question, you cannot return to previous questions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-1">•</span>
              <span><strong>Timed sections:</strong> Each section has a strict time limit. The test will automatically advance when time expires.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-1">•</span>
              <span><strong>Answer every question:</strong> There is NO PENALTY for wrong answers. Make your best guess even if you're unsure.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-1">•</span>
              <span><strong>No pausing:</strong> Once started, you cannot pause a section. Ensure you have adequate time before beginning.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold mt-1">•</span>
              <span><strong>Breaks provided:</strong> You'll receive timed breaks between sections to rest and refocus.</span>
            </li>
          </ul>
        </div>

        {/* Test Structure */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-xl mb-4 text-blue-900">
            Test Structure
          </h3>
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="font-medium">Verbal Analogies</span>
              <span className="text-gray-600">25 questions • 8 minutes</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="font-medium">Arithmetic Reasoning</span>
              <span className="text-gray-600">25 questions • 29 minutes</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="font-medium">Word Knowledge</span>
              <span className="text-gray-600">25 questions • 5 minutes</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="font-medium">Math Knowledge</span>
              <span className="text-gray-600">25 questions • 22 minutes</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="font-medium">Reading Comprehension</span>
              <span className="text-gray-600">25 questions • 38 minutes</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="font-medium">Situational Judgment</span>
              <span className="text-gray-600">50 questions • 35 minutes</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="font-medium">Self-Description Inventory</span>
              <span className="text-gray-600">220 questions • 40 minutes</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="font-medium">Physical Science</span>
              <span className="text-gray-600">20 questions • 10 minutes</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="font-medium">Table Reading</span>
              <span className="text-gray-600">40 questions • 7 minutes</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="font-medium">Instrument Comprehension</span>
              <span className="text-gray-600">25 questions • 5 minutes</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="font-medium">Block Counting</span>
              <span className="text-gray-600">30 questions • 4.5 minutes</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium">Aviation Information</span>
              <span className="text-gray-600">20 questions • 8 minutes</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-200">
            <p className="text-center text-gray-700 font-semibold">
              Total Testing Time: Approximately 5 hours (including breaks)
            </p>
          </div>
        </div>

        {/* What You'll Need */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-xl mb-4 text-gray-900">
            Before You Begin
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Scratch paper and pencil for calculations</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Quiet testing environment free from distractions</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>3+ hours of uninterrupted time</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600">✓</span>
              <span>Water and any necessary materials nearby</span>
            </li>
          </ul>
        </div>

        {/* Begin Button */}
        <div className="text-center">
          <button
            onClick={onBegin}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg text-xl transition duration-200 shadow-lg"
          >
            I Understand - Begin Test
          </button>
          <p className="mt-4 text-sm text-gray-600">
            By clicking this button, you acknowledge that you have read and understood all testing rules.
          </p>
        </div>
      </div>
    </div>
  );
}