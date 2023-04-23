import { ArrowBackOutlined } from "@mui/icons-material"
import "./watch.scss"
import React from 'react'
import trailer_videos from "../../assets/Videos/trailer_videos.mp4"

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                <p className="home"> Home</p>
            </div>
            <video className="video" src={trailer_videos} autoPlay controls progress />
        </div>
    )
}

export default Watch