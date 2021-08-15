import React from "react";
import VideoItem from "../video_item/video_item"
import styles from "./video_list.module.css"

const VideoList = props => {
    const videos = props.videos

    const handleVideoId = (videoId) => {
        props.onVideoId(videoId)
    }

    return(
        <div className={styles.container}>
            {videos.map((video) => {
                return <VideoItem onVideoId={handleVideoId} key={video.id} video={video}></VideoItem>
            })}
        </div>
    )
}

export default VideoList