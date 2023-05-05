import { Add, PlayArrow, ThumbDownOffAltOutlined, ThumbUpOutlined } from "@mui/icons-material"
import "./listItem.scss"
import React, { useState, useEffect } from 'react'
import trailer_videos from "../../assets/Videos/trailer_videos.mp4"
import axios from "../../axios";
import requests from "../Requests"
import { Link } from "react-router-dom";


const Listitem = ({ index,movieList }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [isHovered, setIsHovered] = useState(false);

console.log(index);
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
  }

  return (
    // console.log({...movies})
    <Link to={{ pathname: "/watch" }}>
      <div className="listItem" style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img
          key={movieList.id}
          src={`${base_url}${movieList.backdrop_path}`} alt={movieList.name} />
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
              <div className="genre">{movieList.name}</div>
              <div className="desc">
                {truncate((movieList.overview),50)}
              </div>
              
            </div>
          </>
        )}
      </div>
    </Link>
    
  )
}

export default Listitem