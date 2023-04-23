import { Add, PlayArrow, ThumbDownOffAltOutlined, ThumbUpOutlined } from "@mui/icons-material"
import "./listItem.scss"
import React, { useState } from 'react'
// import ReactPlayer from "react-player"
import trailer_videos from "../../assets/Videos/trailer_videos.mp4"


const Listitem = ({ index }) => {

  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className="listItem" style={{ left: isHovered && index * 352 - 50 + index * 5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src="https://mcdn.wallpapersafari.com/medium/43/95/Y89vjE.png" alt="Movie" />
      {isHovered && (
        <>
          <video src= {trailer_videos} autoPlay  loop/>
          {/* <ReactPlayer className="video" url={trailer_videos} autoplay={true} controls width="452px" height="240px"/> */}
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownOffAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 min</span>
              <span className="limit">+16</span>
              <span>2016</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis commodi blanditiis mollitia molestiae vitae fugit dolores.
            </div>
            <div className="genre">Horror</div>
          </div>
        </>
      )}
    </div>
  )
}

export default Listitem