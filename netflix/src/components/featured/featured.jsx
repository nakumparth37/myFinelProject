import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"
import React, { useEffect, useState } from 'react'
import axios from "axios";

const Featured = ({ type }) => {
    const [content, setContent] = useState({});
    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDQxYTM4MTkxMGYxZWU5ZjE0ZTY3YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjE4NTc3NSwiZXhwIjoxNjgzMDQ5Nzc1fQ.aOVunmfuvw4AIM6e5qkl3cpHelpgYHND3onpKtDSkw8"
                    }
                });
                setContent(res.data[0]);
            } catch (error) {
                console.log(error)
            }
        };
        getRandomContent();
    }, [type]);
    console.log(content)
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
            <img src={content.img} alt="img" />

            <div className="info">
                <img id="name_logo" src={content.imgTitle} alt="" />
                <span className="desc">{content.desc}</span>
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