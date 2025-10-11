// import React from 'react';

// export default function ExamStart({ onStart, totalQuestions, timeLimit }) {
//   const minutes = Math.floor(timeLimit / 60);
  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-6 md:p-8">
//       <div className="bg-white rounded-lg shadow-2xl p-6 md:p-10 max-w-2xl w-full mx-4">
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold text-blue-900 mb-2">
//             AFOQT Reading Comprehension
//           </h1>
//           <h2 className="text-xl text-blue-700">Mock Exam</h2>
//         </div>
        
//         <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
//           <h3 className="font-semibold text-lg mb-3 text-blue-900">
//             Exam Instructions:
//           </h3>
//           <ul className="space-y-2 text-gray-700">
//             <li>• <strong>Time Limit:</strong> {minutes} minutes</li>
//             <li>• <strong>Questions:</strong> {totalQuestions} questions</li>
//             <li>• Read each passage carefully before answering</li>
//             <li>• You can navigate between passages using the arrow buttons</li>
//             <li>• All answers are based solely on passage content</li>
//             <li>• The timer will count down automatically</li>
//             <li>• After submission, you'll see detailed explanations for each answer</li>
//           </ul>
//         </div>
        
//         <button
//           onClick={onStart}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200 text-lg"
//         >
//           Start Exam
//         </button>
//       </div>
//     </div>
//   );
// }


// import React from 'react';

// export default function ExamStart({ onStart, totalQuestions, timeLimit, sectionName = "Reading Comprehension", isPracticeMode = false }) {
//   const minutes = Math.floor(timeLimit / 60);
  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-6 md:p-8">
//       <div className="bg-white rounded-lg shadow-2xl p-6 md:p-10 max-w-2xl w-full mx-4">
//         <div className="text-center mb-6">
//           {isPracticeMode && (
//             <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
//               Practice Mode
//             </div>
//           )}
//           <h1 className="text-3xl font-bold text-blue-900 mb-2">
//             {sectionName}
//           </h1>
//           <h2 className="text-xl text-blue-700">
//             {isPracticeMode ? "Practice Session" : "Mock Exam"}
//           </h2>
//         </div>
        
//         <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
//           <h3 className="font-semibold text-lg mb-3 text-blue-900">
//             {isPracticeMode ? "Practice Instructions:" : "Exam Instructions:"}
//           </h3>
//           <ul className="space-y-2 text-gray-700">
//             {isPracticeMode ? (
//               <>
//                 <li>• <strong>No time limit:</strong> Take as long as you need</li>
//                 <li>• <strong>Questions:</strong> {totalQuestions} questions</li>
//                 <li>• You can navigate between questions freely</li>
//                 <li>• Detailed explanations provided after completion</li>
//                 <li>• Practice as many times as you want</li>
//               </>
//             ) : (
//               <>
//                 <li>• <strong>Time Limit:</strong> {minutes} minutes</li>
//                 <li>• <strong>Questions:</strong> {totalQuestions} questions</li>
//                 <li>• Read each passage carefully before answering</li>
//                 <li>• You can navigate between passages using the arrow buttons</li>
//                 <li>• All answers are based solely on passage content</li>
//                 <li>• The timer will count down automatically</li>
//               </>
//             )}
//           </ul>
//         </div>
        
//         <button
//           onClick={onStart}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200 text-lg"
//         >
//           {isPracticeMode ? "Start Practice" : "Start Exam"}
//         </button>
//       </div>
//     </div>
//   );
// }


import React from 'react';

export default function ExamStart({ onStart, totalQuestions, timeLimit, sectionName = "Reading Comprehension", isPracticeMode = false }) {
  const minutes = Math.floor(timeLimit / 60);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-6 md:p-8">
      <div className="bg-white rounded-lg shadow-2xl p-6 md:p-10 max-w-2xl w-full mx-4">
        <div className="text-center mb-6">
          {isPracticeMode && (
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Practice Mode
            </div>
          )}
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            {sectionName}
          </h1>
          <h2 className="text-xl text-blue-700">
            {isPracticeMode ? "Practice Session" : "Mock Exam"}
          </h2>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
          <h3 className="font-semibold text-lg mb-3 text-blue-900">
            {isPracticeMode ? "Practice Instructions:" : "Exam Instructions:"}
          </h3>
          <ul className="space-y-2 text-gray-700">
            {isPracticeMode ? (
              <>
                <li>• <strong>No time limit:</strong> Take as long as you need</li>
                <li>• <strong>Questions:</strong> {totalQuestions} questions</li>
                <li>• You can navigate between questions freely</li>
                <li>• Detailed explanations provided after completion</li>
                <li>• Practice as many times as you want</li>
              </>
            ) : (
              <>
                <li>• <strong>Time Limit:</strong> {minutes} minutes</li>
                <li>• <strong>Questions:</strong> {totalQuestions} questions</li>
                <li>• Read each passage carefully before answering</li>
                <li>• You can navigate between passages using the arrow buttons</li>
                <li>• All answers are based solely on passage content</li>
                <li>• The timer will count down automatically</li>
              </>
            )}
          </ul>
        </div>
        
        {isPracticeMode && sectionName.includes("Arithmetic") && (
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded p-4 mb-6">
            <p className="text-sm text-yellow-900">
              <strong>⚠️ Practice Mode Note:</strong> In practice mode, some formulas and values (like π ≈ 3.14) may be provided for learning purposes. 
              In <strong>Full Exam Mode</strong>, you will need to know these formulas and values from memory.
            </p>
          </div>
        )}
        
        <button
          onClick={onStart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200 text-lg"
        >
          {isPracticeMode ? "Start Practice" : "Start Exam"}
        </button>
      </div>
    </div>
  );
}