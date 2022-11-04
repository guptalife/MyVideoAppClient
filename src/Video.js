import React, { useRef} from 'react'
function Video(props) {
  const videoRef = useRef();
  React.useEffect(() => {
    const video = videoRef.current;
    if (props.stream)
      video.srcObject = props.stream;
  }, [props.stream]);
  return (
      <video
       style={{
        width : props.width?props.width:'100%',
        height :props.height?props.height:'100%',
        padding :props.padding?props.padding:0,
         border:'1px solid red',
         objectFit:'cover'
       }}
       muted={props.muted}
       ref={videoRef} autoPlay />
  )
}

export default Video;