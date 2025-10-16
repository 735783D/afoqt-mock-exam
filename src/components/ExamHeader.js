// import React from 'react';
// import { Clock } from 'lucide-react';
// import { formatTime } from '../utils/examLogic';

// export default function ExamHeader({ 
//   currentPassage, 
//   totalPassages, 
//   timeRemaining, 
//   answeredCount, 
//   totalQuestions 
// }) {
//   const timeWarning = timeRemaining < 5 * 60;
  
//   return (
//     <div className="bg-blue-900 text-white p-4 md:p-6 shadow-lg sticky top-0 z-10">
//       <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
//         <div>
//           <h1 className="text-xl font-bold">AFOQT Reading Comprehension</h1>
//           <p className="text-sm text-blue-200">
//             Passage {currentPassage + 1} of {totalPassages}
//           </p>
//         </div>
//         <div className="text-right">
//           <div className="flex items-center gap-2 justify-end">
//             <Clock className="w-5 h-5" />
//             <span className={`text-2xl font-mono font-bold ${timeWarning ? 'text-red-300' : ''}`}>
//               {formatTime(timeRemaining)}
//             </span>
//           </div>
//           <p className="text-sm text-blue-200">
//             {answeredCount} of {totalQuestions} answered
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import { Clock } from 'lucide-react';
// import { formatTime } from '../utils/examLogic';

// export default function ExamHeader({ 
//   currentPassage, 
//   totalPassages, 
//   timeRemaining, 
//   answeredCount, 
//   totalQuestions 
// }) {
//   const timeWarning = timeRemaining && timeRemaining < 5 * 60;
  
//   return (
//     <div className="bg-blue-900 text-white p-4 md:p-6 shadow-lg sticky top-0 z-10">
//       <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
//         <div>
//           <h1 className="text-xl font-bold">AFOQT Reading Comprehension</h1>
//           <p className="text-sm text-blue-200">
//             Passage {currentPassage + 1} of {totalPassages}
//           </p>
//         </div>
//         <div className="text-right">
//           {timeRemaining !== null ? (
//             <>
//               <div className="flex items-center gap-2 justify-end">
//                 <Clock className="w-5 h-5" />
//                 <span className={`text-2xl font-mono font-bold ${timeWarning ? 'text-red-300' : ''}`}>
//                   {formatTime(timeRemaining)}
//                 </span>
//               </div>
//               <p className="text-sm text-blue-200">
//                 {answeredCount} of {totalQuestions} answered
//               </p>
//             </>
//           ) : (
//             <>
//               <div className="flex items-center gap-2 justify-end">
//                 <span className="text-lg font-semibold text-blue-200">Practice Mode</span>
//               </div>
//               <p className="text-sm text-blue-200">
//                 {answeredCount} of {totalQuestions} answered
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Clock } from 'lucide-react';
import { formatTime } from '../utils/examLogic';

export default function ExamHeader({ 
  currentPassage, 
  totalPassages, 
  timeRemaining, 
  answeredCount, 
  totalQuestions,
  sectionName = "Reading Comprehension"
}) {
  const timeWarning = timeRemaining && timeRemaining < 5 * 60;
  
  return (
    <div className="bg-blue-900 text-white p-4 md:p-6 shadow-lg sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">AFOQT {sectionName}</h1>
          <p className="text-sm text-blue-200">
            {sectionName.includes("Reading") ? "Passage" : "Problem"} {currentPassage + 1} of {totalPassages}
          </p>
        </div>
        <div className="text-right">
          {timeRemaining !== null ? (
            <>
              <div className="flex items-center gap-2 justify-end">
                <Clock className="w-5 h-5" />
                <span className={`text-2xl font-mono font-bold ${timeWarning ? 'text-red-300' : ''}`}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
              <p className="text-sm text-blue-200">
                {answeredCount} of {totalQuestions} answered
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-lg font-semibold text-blue-200">Practice Mode</span>
              </div>
              <p className="text-sm text-blue-200">
                {answeredCount} of {totalQuestions} answered
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}