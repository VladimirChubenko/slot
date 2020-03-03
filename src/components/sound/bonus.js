import React from 'react'
import soundfile from '../../assets/bonus.mp3'
import Sound from 'react-sound'

function Bonus() {
 return (
   <Sound
    autoLoad={true}
    volume={10}
    url={soundfile}
    playStatus={Sound.status.PLAYING}
   />
  );
}

export default Bonus;