import React, { useState } from 'react';
import ModeSelector from './components/ModeSelector';
import SectionSelector from './components/SectionSelector';
import PracticeMode from './modes/PracticeMode';
import FullExamMode from './modes/FullExamMode';
import './styles/exam.css';

export default function App() {
  const [selectedMode, setSelectedMode] = useState(null); // 'full' or 'practice'
  const [selectedSection, setSelectedSection] = useState(null); // for practice mode

  // Reset to mode selection
  const handleBackToModes = () => {
    setSelectedMode(null);
    setSelectedSection(null);
  };

  // Reset to section selection (practice mode only)
  const handleBackToSections = () => {
    setSelectedSection(null);
  };

  // No mode selected - show mode selector
  if (!selectedMode) {
    return <ModeSelector onSelectMode={setSelectedMode} />;
  }

  // Full exam mode selected
  if (selectedMode === 'full') {
    return <FullExamMode onExit={handleBackToModes} />;
  }

  // Practice mode selected
  if (selectedMode === 'practice') {
    // No section selected yet - show section selector
    if (!selectedSection) {
      return (
        <SectionSelector 
          onSelectSection={setSelectedSection}
          onBack={handleBackToModes}
        />
      );
    }

    // Section selected - show practice for that section
    return (
      <PracticeMode 
        sectionId={selectedSection}
        onExit={handleBackToSections}
      />
    );
  }

  return null;
}