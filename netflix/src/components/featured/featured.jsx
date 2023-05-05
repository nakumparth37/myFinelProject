import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"
import React, { useEffect, useState } from 'react'
import axios from "../../axios";
import requests from "../Requests"


const Featured = ({ type }) => {
    const [content, setContent] = useState({});
    useEffect(() => {
        const getRandomContent = async () => {
            
                const res = await axios.get(requests.fetchNetflixOriginals);
                setContent(res.data.results[
                    Math.floor(Math.random()* res.data.results.length-1)
                ]);
            return res;
        };
        getRandomContent();
    }, []);
    console.log(content)
    function truncate(string , n){
        return string?.length > n ? string.substring(0,n-1)+'...':string;
    }
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
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
            {/* <div className="fedBottom" >
            </div> */}
            <img src={`https://image.tmdb.org/t/p/original/${content?.backdrop_path}`} alt="img" />

            <div className="info">
                <h1 className="movie_title">
                {content?.title || content?.name || content.original_name}
                </h1>
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
                <div className="movies_Desc">
                <span className="desc">{truncate((content?.overview),100)}</span>
                </div>
            </div>
            
        </div>
    )

}

export default Featured