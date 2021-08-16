import React from "react";
import VideoItem from "../video_item/video_item"
import styles from "./video_list.module.css"

const VideoList = props => {
    const videos = props.videos
    const videoInfo = props.videoInfo
    console.log(videoInfo)


    const handleVideoInfo = (videoInfo) => {
        props.onVideoInfo(videoInfo)
    }
    if(!props.videoInfo){
        return(
            <div className={styles.container}>
                {videos.map((video) => {
                    return <VideoItem onVideoInfo={handleVideoInfo} key={video.id} video={video} videoInfo={props.videoInfo}></VideoItem>
                })}
            </div>
        )
    }else{
        return(
            <div className={styles.divid}>
                {videos.map((video) => {
                    return <VideoItem onVideoInfo={handleVideoInfo} key={video.id} video={video} videoInfo={props.videoInfo}></VideoItem>
                })}
            </div>
        )
    }
    
}

export default VideoList