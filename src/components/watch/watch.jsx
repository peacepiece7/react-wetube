import React from "react";
import styles from "./watch.module.css"
import YouTube from "react-youtube"

const Watch = props => {
    const opts = {
        playerVars: {
          autoplay: 1,
        },
      };

    if(props.videoInfo){
        return (<div className={styles.container}>
                    <div className={styles.title}>{props.videoInfo.snippet.title}</div>
                        <YouTube
                            className={styles.youtube}
                            videoId={props.videoInfo.id}
                            opts={opts}
                        />
                </div>)}
    else{
        return <></>
    }
}

export default Watch