import React from "react";
import styles from "./watch.module.css"
import YouTube from "react-youtube"

const Watch = props => {
    const videoInfo = props.videoInfo
    const opts = {
        playerVars: {
          autoplay: 1,
        },
      };
      const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    if(videoInfo){
        return (<div className={styles.container}>
                    <div className={styles.title}>{videoInfo.snippet.title}</div>
                        <YouTube
                            videoId={videoInfo.id}
                            opts={opts}
                            onReady={_onReady}
                        ></YouTube>
                        {/* <iframe
                            title="youtube ifram"
                            id="player" 
                            type="text/html"
                            src={`http://www.youtube.com/embed/${videoInfo.id}?enablejsapi=1&origin=http://example.com`}
                            frameBorder="0">    
                        </iframe> */}
                </div>)}
    else{
        return <></>
    }
}

export default Watch