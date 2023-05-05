import { Add, PlayArrow, ThumbDownOffAltOutlined, ThumbUpOutlined } from "@mui/icons-material"
import "./listItem.scss"
import React, { useState, useEffect } from 'react'
// import ReactPlayer from "react-player"
import trailer_videos from "../../assets/Videos/trailer_videos.mp4"
import axios from "../../axios";
import requests from "../Requests"
import { Link } from "react-router-dom";


const Listitem = ({ index, item,fetchUrl }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovies] = useState([])

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(fetchUrl);
  //     setMovies(request.data.results);
  //     return request;
  //   }
  //   fetchData();
  // }, [fetchUrl])

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
  }

  return (
    <Link to={{ pathname: "/watch" }}>
      <div className="listItem" style={{ left: isHovered && index * 352 - 50 + index * 5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img
          key={movie.id}
          src={`${base_url}${movie.backdrop_path}`} alt={movie.name} />
        {isHovered && (
          <>
            <video src={trailer_videos} autoPlay loop />
            {/* <ReactPlayer className="video" url={trailer_videos} autoplay={true} controls width="452px" height="240px"/> */}
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpOutlined className="icon" />
                <ThumbDownOffAltOutlined className="icon" />
              </div>
              <div className="genre">{movie.name}</div>
              <div className="desc">
                {truncate((movie.overview),50)}
              </div>
              
            </div>
          </>
        )}
      </div>
    </Link>
  )
}

export default Listitem