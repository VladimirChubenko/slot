import React from 'react'
import soundfile from '../../assets/spin.mp3'
import Sound from 'react-sound'

function Spin(props) {
 return (
   <Sound
    url={soundfile}
    volume={30}
    playStatus={Sound.status.PLAYING}
    onLoading={props.handleSongLoading}
    onPlaying={props.handleSongPlaying}
    onFinishedPlaying={props.handleSongFinishedPlaying}
   />
  );
}

export default Spin;