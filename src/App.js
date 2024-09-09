import React, { useState } from 'react';
import DrumPad from './components/DrumPad';
import Display from './components/Display';

const soundBank = [
  { key: 'Q', sound: 'kick.wav', label: 'Kick' },
  { key: 'W', sound: 'snare.wav', label: 'Snare' },
  { key: 'E', sound: 'hihat.wav', label: 'Hi-Hat' },
  // Add more sounds here...
];

function App() {
  const [currentSound, setCurrentSound] = useState('');

  const handlePlaySound = (soundLabel) => {
    setCurrentSound(soundLabel);
  };

  return (
    <div id="drum-machine" className="app-container">
      <Display currentSound={currentSound} />
      <div id="pad-container">
        {soundBank.map((pad) => (
          <DrumPad 
            key={pad.key}
            keyTrigger={pad.key}
            sound={pad.sound}
            label={pad.label}
            onPlaySound={handlePlaySound}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
