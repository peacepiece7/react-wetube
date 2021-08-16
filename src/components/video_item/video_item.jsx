import React from "react"
import styles from "./video_item.module.css"

const VideoItem = props => {
    const video = props.video
    const videoInfo = props.videoInfo

    const handleVideoClick = () => {
        props.onVideoInfo(video)
    }

    if(!videoInfo){
        return <div onClick={handleVideoClick} className={styles.container}>
        <div className={styles.image}><img src={video.snippet.thumbnails.medium.url} alt="medium thumbnail"/></div>
        <div className={styles.title}>{video.snippet.title}</div>
    </div>
    }
    else{
        return <div onClick={handleVideoClick} className={styles.divide}>
        <div className={styles.image}><img src={video.snippet.thumbnails.medium.url} alt="medium thumbnail"/></div>
        <div className={styles.title}>{video.snippet.title}</div>
    </div>
    }

}

export default VideoItem