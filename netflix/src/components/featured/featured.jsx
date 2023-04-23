import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"
import React from 'react'

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="advancer">Advancer</option>
                        <option value="comedy">Comedy</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://lumiere-a.akamaihd.net/v1/images/movie-page-avatar-21-9_r_c7e5c1ba.jpeg?region=0,0,3200,1372&width=2048" alt="img" />

            <div className="info">
                <img id="name_logo" src="https://lumiere-a.akamaihd.net/v1/images/movies-avatar-logo_26816967.png?region=0,0,712,166" alt="" />
                <span className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum deserunt nobis repudiandae corrupti et harum dolor asperiores ex perferendis.</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Featured