import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import "./list.scss"
import Listitem  from '../listitem/Listitem'
import axios from '../../axios'
import requests from '../Requests'


const List = ({title,fetchUrl }) => {

    const indexArray=[0,1,2,3,4,5,6,7,8,9];
    

const [sliderNumber, setSliderNumber] = useState(0);
const [isMoved, setIsMoved] = useState(false);
const [movies, setMovies] = useState([])

useEffect(() => {
  async function fetchData() {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    return request;
  }
 
  fetchData();
 
}, [fetchUrl])
// console.log(movies);
let movieList = movies.sort(() => Math.random() - Math.random()).slice(0, 10)
console.log(movieList);


const listRef = useRef()

const handleClick = (director) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x-50;
    
    if (director === "left" && sliderNumber > 0) {
        setSliderNumber(sliderNumber - 1)
        listRef.current.style.transform = `translatex(${230 + distance}px)`
    }
    if (director === "right" && sliderNumber < 5) {
        setSliderNumber(sliderNumber + 1)
        listRef.current.style.transform = `translatex(${-230 + distance}px)`
    }
    console.log(distance);
   
}

return (

    <div className='list'>
        <span className="listTitle">{title}</span>
        <div className="wrapper">
            <ArrowBackIosNewOutlined className='sliderArrow left' onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }} />
            <div className="container" ref={listRef}>
                {movies.map((movieList,indexArray)=>(
                    movieList.backdrop_path &&(
                    <Listitem index={indexArray}  movieList={movieList}/>
                )))}
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")} />
        </div>
    </div>
    
)

}

export default List








// Noow rowaaa
{/* <div className='list'> */}
        //     <h2>{title}</h2>
        //     <div className='list__posters'>
        //         {movies.map(movie => (
        //             ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
        //                 <img
        //                     className={`list__poster ${isLargeRow && "list__posterLarge"}`}
        //                     key={movie.id}
        //                     src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        //             )))}
        //     </div>
        // </div>