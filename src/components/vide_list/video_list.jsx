import React from "react";
import VideoItem from "../video_item/video_item"
import styles from "./video_list.module.css"

const VideoList = props => {

    const handleVideoInfo = (videoInfo) => {
        props.onVideoInfo(videoInfo)
    }

    let display = styles.container
    if(props.videoInfo){
        display = styles.divide
    }

    return(
        <div className={display}>
            {props.videos.map((video) => {
                return <VideoItem onVideoInfo={handleVideoInfo} key={video.id} video={video} videoInfo={props.videoInfo}></VideoItem>
            })}
        </div>
    )
    
}

export default VideoList