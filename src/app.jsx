import React, { useEffect, useState } from "react";
import "./app.module.css";
import VideoList from "./components/vide_list/video_list"
import styles from "./app.module.css"
import Header from "./components/header/header"
import Watch from "./components/watch/watch"

const App = () => {
  const [videoState, setVideoState] = useState([]);
  const [primaryVideoState, setPrimaryVideoState] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBVHAnrthQ31LMqBRaWYb4BGAYGXHvKd18", requestOptions)
      .then(response => response.json())
      .then(result => setVideoState(result.items))
      .catch(error => console.log('error', error));

  },[])

  const handleSearchValue = (value) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&type=video&key=AIzaSyBVHAnrthQ31LMqBRaWYb4BGAYGXHvKd18`, requestOptions)
      .then(response => response.json())
      .then(result => {
        const youtubeItems = result.items.map((item) => {
          item.id = item.id.videoId
          return item
        })
        setVideoState(youtubeItems)
        setPrimaryVideoState(null)
      })
      .catch(error => console.log('error', error));
  }

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
