import { Add, PlayArrow, ThumbDownOffAltOutlined, ThumbUpOutlined } from "@mui/icons-material"
import "./listItem.scss"
import React, { useState,useEffect } from 'react'
// import ReactPlayer from "react-player"
// import trailer_videos from "../../assets/Videos/trailer_videos.mp4"
import axios from "axios";
import { Link } from "react-router-dom";


const Listitem = ({ index,item }) => {

  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
      const getMovie = async () => {
          try {
              const res = await axios.get("/movies/find/" + item, {
                  headers: {
                      token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDQxYTM4MTkxMGYxZWU5ZjE0ZTY3YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjE4NTc3NSwiZXhwIjoxNjgzMDQ5Nzc1fQ.aOVunmfuvw4AIM6e5qkl3cpHelpgYHND3onpKtDSkw8"
                  }
              });
              setMovie(res.data);
              // console.log(res);
          } catch (error) {
              console.log(error);
          }
      }
      getMovie()
  }, [item])


  return (
    <Link to={{pathname: "/watch",movie:movie}}>
    <div className="listItem" style={{ left: isHovered && index * 352 - 50 + index * 5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={movie.imgSm} alt="Movie" />
      {isHovered && (
        <>
          <video src= {movie.trailer} autoPlay  loop/>
          {/* <ReactPlayer className="video" url={trailer_videos} autoplay={true} controls width="452px" height="240px"/> */}
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownOffAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
              {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
    </Link>
  )
}

export default Listitem