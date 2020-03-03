import React from 'react'
import soundfile from '../../assets/stop.mp3'
import Sound from 'react-sound'

function Stop() {
 return (
   <Sound
    autoLoad={true}
    url={soundfile}
    volume={5}
    playStatus={Sound.status.PLAYING}
   />
  );
}

export default Stop;