import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import "./list.scss"
import Listitem from '../listitem/Listitem'

const List = () => {

    const [sliderNumber,setSliderNumber]= useState(0);
    const [isMoved,setIsMoved]= useState(false);

    const listRef = useRef()

    const handleClick = (director) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (director === "left" && sliderNumber > 0) {
            setSliderNumber(sliderNumber-1)
            listRef.current.style.transform = `translatex(${362 + distance}px)`
        }
        if (director === "right" && sliderNumber < 5) {
            setSliderNumber(sliderNumber+1)
            listRef.current.style.transform = `translatex(${-362 + distance}px)`
        }
        console.log(distance);
    }

    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlined className='sliderArrow left' onClick={() => handleClick("left")} style={{display : !isMoved && "none"}} />
                <div className="container" ref={listRef}>
                    <Listitem index = {0} />
                    <Listitem index = {1} />
                    <Listitem index = {2} />
                    <Listitem index = {3} />
                    <Listitem index = {4} />
                    <Listitem index = {5} />
                    <Listitem index = {6} />
                    <Listitem index = {7} />
                    <Listitem index = {8} />
                    <Listitem index = {9} />
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List