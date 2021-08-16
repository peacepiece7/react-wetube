import React, { useCallback, useEffect, useState } from "react";
import "./app.module.css";
import VideoList from "./components/vide_list/video_list"
import styles from "./app.module.css"
import Header from "./components/header/header"
import Watch from "./components/watch/watch"

const App = props => {
  // youtube는 props.yotube와 같은 참조 값을 가짐, 이 참조값이 변경될 경우(fetch) 아래 useEffect가 실행됨
  const youtube = props.youtube
  const [videoState, setVideoState] = useState([]);
  const [primaryVideoState, setPrimaryVideoState] = useState(null);

  useEffect(() => {
    youtube.getLoading().then((result) => {
      setVideoState(result)
    })
  },[youtube])

  const handleSearchValue = useCallback((value) => {
    youtube.getSearch(value).then((result)=>{
      setVideoState(result)
    })
    setPrimaryVideoState(null)
  }, [youtube])

  const handleVideoInfo = (videoInfo) => {
    setPrimaryVideoState(videoInfo)
  }

  return(
    <div className={styles.container}>
    <Header onSearchValue={handleSearchValue}></Header>
        <Watch videoInfo={primaryVideoState}></Watch>
        <VideoList onVideoInfo={handleVideoInfo} videos={videoState} videoInfo={primaryVideoState} ></VideoList>
    </div>
  )
}
export default App;
