import React from 'react'
import soundfile from '../../assets/background.mp3'
import Sound from 'react-sound'

function Back(props) {
 return (
   <Sound
    url={soundfile}
    loop={true}
    volume={10}
    playFromPosition={12000}
    playStatus={Sound.status.PLAYING}
    onLoading={props.handleSongLoading}
    onPlaying={props.handleSongPlaying}
    onFinishedPlaying={props.handleSongFinishedPlaying}
   />
  );
}

export default Back;