import { ArrowBackOutlined } from "@mui/icons-material"
import "./watch.scss"
import React from 'react'
import trailer_videos from "../../assets/Videos/trailer_videos.mp4"
import { useLocation,Link } from "react-router-dom"


const Watch = () => {
    const location = useLocation()
    const movie = location.movie;
    console.log (location);
    return (
        <div className="watch">
            <Link to="/">
            <div className="back">
                <ArrowBackOutlined />
                <p className="home"> Home</p>
            </div>
            </Link>
            <video className="video" src={trailer_videos} autoPlay controls progress />
        </div>
    )
}

export default Watch