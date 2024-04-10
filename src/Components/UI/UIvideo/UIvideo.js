import styles from './UIvideo.module.css';
import PropTypes from 'prop-types';
import cn from 'classnames'
import { useEffect, useRef } from 'react'

const UIvideo = ({src,classes, playbackRate=1.0}) => {
    const videoRef = useRef(null)

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate
    },[])
   
    return(
        <video 
            ref={videoRef}
            className={cn(styles.video, classes)} 
            autoPlay
            loop
            muted
        >
            <source src={src} />
        </video>
)}

UIvideo.propTypes = {
    src: PropTypes.string,
    classes: PropTypes.string,
    playbackRate: PropTypes.number,
  }

export default UIvideo;