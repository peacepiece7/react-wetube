import React from "react"
import styles from "./video_item.module.css"

const VideoItem = props => {
    const video = props.video

    const handleVideoClick = () => {
        console.log("Click video id is..", video.id)
        props.onVideoId(video.id)
    }

    return <div onClick={handleVideoClick} className={styles.container}>
        <div className={styles.image}><img src={video.snippet.thumbnails.medium.url} alt="medium thumbnail"/></div>
        <div className={styles.title}>{video.snippet.title}</div>
    </div>

}

export default VideoItem