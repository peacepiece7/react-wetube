import React, { useEffect } from "react"
import styles from "./video_item.module.css"

const VideoItem = props => {
    console.log("Items is working")
    const video = props.video
    const videoInfo = props.videoInfo

    const handleVideoClick = () => {
        props.onVideoInfo(video)
    }

    let display = styles.container
    if(videoInfo){
        display = styles.divide
    }

        return <div onClick={handleVideoClick} className={display}>
        <div className={styles.image}><img src={video.snippet.thumbnails.medium.url} alt="medium thumbnail"/></div>
        <div className={styles.title}>{video.snippet.title}</div>
    </div>

}

export default VideoItem