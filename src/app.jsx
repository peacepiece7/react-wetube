import React, { useEffect, useState } from "react";
import "./app.module.css";
import VideoList from "./components/vide_list/video_list"
import styles from "./app.module.css"
import Header from "./components/header/header"
import youtubeItems from "./youtube.json"

const App = () => {
  const [videoState, setVideoState] = useState([]);
  const [primaryVideoState, setPrimaryVideoState] = useState(null);

  useEffect(() => {
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    // fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBVHAnrthQ31LMqBRaWYb4BGAYGXHvKd18", requestOptions)
    //   .then(response => response.json())
    //   .then(result => setVideoState(result.items))
    //   .then(() => console.log(videoState))
    //   .catch(error => console.log('error', error));
    setVideoState(youtubeItems.items)

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
      })
      .catch(error => console.log('error', error));
  }

  const handleVideoId = (videoId) => {
    console.log("App is resived video id:", videoId)
  }

  return(
    <div className={styles.container}>
    <Header onSearchValue={handleSearchValue}></Header>
    <VideoList onVideoId={handleVideoId} videos={videoState}></VideoList>
    </div>
  )
}
export default App;
