// Exam utility functions

export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const calculateScore = (examData, answers) => {
  let correct = 0;
  let total = 0;
  
  examData.forEach(passage => {
    passage.questions.forEach(q => {
      total++;
      if (answers[q.id] === q.correct) correct++;
    });
  });
  
  return { correct, total };
};

export const getScoreGrade = (correct, total) => {
  const percentage = (correct / total) * 100;
  
  if (percentage >= 84) return { grade: 'Excellent', color: 'green' };
  if (percentage >= 68) return { grade: 'Good', color: 'blue' };
  if (percentage >= 52) return { grade: 'Fair', color: 'yellow' };
  return { grade: 'Needs Improvement', color: 'red' };
};

export const getTotalQuestions = (examData) => {
  return examData.reduce((total, passage) => {
    return total + passage.questions.length;
  }, 0);
};