import React from 'react';
import PropTypes from 'prop-types';
import Display from './Display';

const Keybord = ({
  sounds,
  play,
  power,
  deactivateAudio,
}) => (
  <div className="keybord">
    {sounds.map((sound) => (
      <Display
        key={sound.keyCode}
        sound={power ? sound : { ...sound, url: '#' }}
        play={play}
        deactivateAudio={deactivateAudio}
      />
    ))}
  </div>
);

Keybord.propTypes = {
  sounds: PropTypes.arrayOf(PropTypes.shape({
    keyCode: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  play: PropTypes.func.isRequired,
  power: PropTypes.bool.isRequired,
  deactivateAudio: PropTypes.func.isRequired,
};

export default Keybord;