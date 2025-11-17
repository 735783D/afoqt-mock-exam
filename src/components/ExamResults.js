import React from 'react';
import { CheckCircle } from 'lucide-react';
import { calculateScore } from '../utils/examLogic';

export default function ExamResults({ examData, answers, onRetake }) {
  const { correct, total } = calculateScore(examData, answers);
  const percentage = ((correct / total) * 100).toFixed(1);
  
  // Determine if this is a passage-based section or single-question section
  const isPassageBased = examData.length > 0 && 
    examData[0].questions && 
    examData[0].questions.length > 1;
  
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
            {examData.map((item, itemIndex) => {
              // Handle both wrapped single questions and passage-based questions
              const questions = item.questions || [item];
              const showPassageHeader = isPassageBased && item.passage;
              
              return (
                <div key={item.id || itemIndex}>
                  {showPassageHeader && (
                    <>
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h3 className="font-semibold text-lg text-blue-800 mb-2">
                          Passage {item.id}
                        </h3>
                        <p className="text-gray-700 whitespace-pre-wrap">{item.passage}</p>
                      </div>
                    </>
                  )}
                  
                  {questions.map(q => {
                    const userAnswer = answers[q.id];
                    const correctAnswerIndex = q.correct ?? q.correctAnswer;
                    const isCorrect = userAnswer === correctAnswerIndex;
                    
                    // Check if options are images or text
                    const isImageOption = q.options && typeof q.options[0] === 'string' && q.options[0].includes('/images/');
                    
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
                              Question {q.id}{q.text ? `: ${q.text}` : ''}
                            </p>
                            
                            {/* Show instrument image for InstComp questions */}
                            {q.instrumentImage && (
                              <div className="mb-4 bg-gray-100 rounded-lg p-4">
                                <p className="text-sm font-semibold text-gray-700 mb-2">Instrument Panel:</p>
                                <img 
                                  src={q.instrumentImage} 
                                  alt="Instrument panel" 
                                  className="max-w-sm border rounded" 
                                />
                              </div>
                            )}
                            
                            {/* Display based on option type */}
                            {isImageOption ? (
                              <>
                                <div className="mb-2">
                                  <strong className="text-sm text-gray-700">Your answer:</strong>
                                  {userAnswer !== undefined ? (
                                    <div className="mt-2">
                                      <div className="inline-block">
                                        <div className="text-sm font-semibold mb-1">
                                          Option {String.fromCharCode(65 + userAnswer)}
                                        </div>
                                        <img 
                                          src={q.options[userAnswer]} 
                                          alt="Your answer" 
                                          className="max-w-xs border-2 border-blue-500 rounded" 
                                        />
                                      </div>
                                    </div>
                                  ) : (
                                    <span className="text-sm text-gray-700"> Not answered</span>
                                  )}
                                </div>
                                {!isCorrect && correctAnswerIndex !== undefined && (
                                  <div className="mb-2">
                                    <strong className="text-sm text-green-700">Correct answer:</strong>
                                    <div className="mt-2">
                                      <div className="inline-block">
                                        <div className="text-sm font-semibold mb-1 text-green-700">
                                          Option {String.fromCharCode(65 + correctAnswerIndex)}
                                        </div>
                                        <img 
                                          src={q.options[correctAnswerIndex]} 
                                          alt="Correct answer" 
                                          className="max-w-xs border-2 border-green-500 rounded" 
                                        />
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </>
                            ) : (
                              <>
                                <p className="text-sm text-gray-700 mb-2">
                                  <strong>Your answer:</strong>{' '}
                                  {userAnswer !== undefined 
                                    ? q.options[userAnswer] 
                                    : 'Not answered'}
                                </p>
                                {!isCorrect && correctAnswerIndex !== undefined && (
                                  <p className="text-sm text-gray-700 mb-2">
                                    <strong className="text-green-700">Correct answer:</strong>{' '}
                                    {q.options[correctAnswerIndex]}
                                  </p>
                                )}
                              </>
                            )}
                            
                            {q.explanation && (
                              <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
                                <p className="text-sm text-gray-800">
                                  <strong className="text-blue-900">Explanation:</strong>{' '}
                                  {q.explanation}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
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

// import React from 'react';
// import { CheckCircle } from 'lucide-react';
// import { calculateScore } from '../utils/examLogic';

// export default function ExamResults({ examData, answers, onRetake }) {
//   const { correct, total } = calculateScore(examData, answers);
//   const percentage = ((correct / total) * 100).toFixed(1);
  
//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="max-w-4xl mx-auto px-4">
//         <div className="bg-white rounded-lg shadow-2xl p-6 md:p-10 mb-6">
//           <div className="text-center mb-8">
//             <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
//             <h1 className="text-3xl font-bold text-blue-900 mb-2">Exam Complete!</h1>
//           </div>
          
//           <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
//             <div className="text-center mb-6">
//               <div className="text-6xl font-bold text-blue-900 mb-2">{percentage}%</div>
//               <div className="text-xl text-gray-700">{correct} out of {total} correct</div>
//             </div>
//             <div className="border-t border-blue-200 pt-4">
//               <h3 className="font-semibold text-lg mb-3 text-blue-900">Score Guide:</h3>
//               <ul className="space-y-1 text-gray-700">
//                 <li>• 21-25 correct: Excellent</li>
//                 <li>• 17-20 correct: Good</li>
//                 <li>• 13-16 correct: Fair - Review needed</li>
//                 <li>• Below 13: Additional practice recommended</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Answer Review */}
//         <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-6">
//           <h2 className="text-2xl font-bold text-blue-900 mb-6">
//             Answer Review & Explanations
//           </h2>
//           <div className="space-y-8">
//             {examData.map(passage => (
//               <div key={passage.id}>
//                 <h3 className="font-semibold text-lg text-blue-800 mb-4">
//                   Passage {passage.id}
//                 </h3>
//                 {/* {passage.questions.map(q => {
//                   const userAnswer = answers[q.id];
//                   const isCorrect = userAnswer === q.correct;
                  
//                   return (
//                     <div 
//                       key={q.id} 
//                       className={`mb-6 p-4 rounded-lg border-2 ${
//                         isCorrect 
//                           ? 'bg-green-50 border-green-300' 
//                           : 'bg-red-50 border-red-300'
//                       }`}
//                     >
//                       <div className="flex items-start gap-3 mb-3">
//                         <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
//                           isCorrect ? 'bg-green-500' : 'bg-red-500'
//                         }`}>
//                           <span className="text-white text-sm">
//                             {isCorrect ? '✓' : '✗'}
//                           </span>
//                         </div>
//                         <div className="flex-grow">
//                           <p className="font-semibold text-gray-900 mb-2">
//                             Question {q.id}: {q.text}
//                           </p>
//                           <p className="text-sm text-gray-700 mb-2">
//                             <strong>Your answer:</strong>{' '}
//                             {userAnswer !== undefined 
//                               ? q.options[userAnswer] 
//                               : 'Not answered'}
//                           </p>
//                           {!isCorrect && (
//                             <p className="text-sm text-gray-700 mb-2">
//                               <strong className="text-green-700">Correct answer:</strong>{' '}
//                               {q.options[q.correct]}
//                             </p>
//                           )}
//                           <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
//                             <p className="text-sm text-gray-800">
//                               <strong className="text-blue-900">Explanation:</strong>{' '}
//                               {q.explanation}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })} */}
//               {passage.questions.map(q => {
//   const userAnswer = answers[q.id];
//   const correctAnswerIndex = q.correct ?? q.correctAnswer;
//   const isCorrect = userAnswer === correctAnswerIndex;
  
//   // Check if options are images or text
//   const isImageOption = q.options && typeof q.options[0] === 'string' && q.options[0].includes('/images/');
  
//   return (
//     <div 
//       key={q.id} 
//       className={`mb-6 p-4 rounded-lg border-2 ${
//         isCorrect 
//           ? 'bg-green-50 border-green-300' 
//           : 'bg-red-50 border-red-300'
//       }`}
//     >
//       <div className="flex items-start gap-3 mb-3">
//         <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
//           isCorrect ? 'bg-green-500' : 'bg-red-500'
//         }`}>
//           <span className="text-white text-sm">
//             {isCorrect ? '✓' : '✗'}
//           </span>
//         </div>
//         <div className="flex-grow">
//           <p className="font-semibold text-gray-900 mb-2">
//             {q.text ? `Question ${q.id}: ${q.text}` : `Question ${q.id}`}
//           </p>
          
//           {/* Display based on option type */}
//           {isImageOption ? (
//             <>
//               <div className="mb-2">
//                 <strong className="text-sm text-gray-700">Your answer:</strong>
//                 {userAnswer !== undefined ? (
//                   <img src={q.options[userAnswer]} alt="Your answer" className="mt-2 max-w-xs border rounded" />
//                 ) : (
//                   <span className="text-sm text-gray-700"> Not answered</span>
//                 )}
//               </div>
//               {!isCorrect && (
//                 <div className="mb-2">
//                   <strong className="text-sm text-green-700">Correct answer:</strong>
//                   <img src={q.options[correctAnswerIndex]} alt="Correct answer" className="mt-2 max-w-xs border-2 border-green-500 rounded" />
//                 </div>
//               )}
//             </>
//           ) : (
//             <>
//               <p className="text-sm text-gray-700 mb-2">
//                 <strong>Your answer:</strong>{' '}
//                 {userAnswer !== undefined 
//                   ? q.options[userAnswer] 
//                   : 'Not answered'}
//               </p>
//               {!isCorrect && (
//                 <p className="text-sm text-gray-700 mb-2">
//                   <strong className="text-green-700">Correct answer:</strong>{' '}
//                   {q.options[correctAnswerIndex]}
//                 </p>
//               )}
//             </>
//           )}
          
//           <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
//             <p className="text-sm text-gray-800">
//               <strong className="text-blue-900">Explanation:</strong>{' '}
//               {q.explanation}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// })}
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           onClick={onRetake}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
//         >
//           Retake Exam
//         </button>
//       </div>
//     </div>
//   );
// }