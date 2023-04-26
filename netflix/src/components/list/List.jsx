import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import "./list.scss"
import Listitem from '../listitem/Listitem'

const List = ({ list }) => {

    const [sliderNumber, setSliderNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    
    const listRef = useRef()

    const handleClick = (director) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (director === "left" && sliderNumber > 0) {
            setSliderNumber(sliderNumber - 1)
            listRef.current.style.transform = `translatex(${362 + distance}px)`
        }
        if (director === "right" && sliderNumber < 5) {
            setSliderNumber(sliderNumber + 1)
            listRef.current.style.transform = `translatex(${-362 + distance}px)`
        }
        console.log(distance);
    }

    return (
        <div className='list'>
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <ArrowBackIosNewOutlined className='sliderArrow left' onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }} />
                <div className="container" ref={listRef}>
                    {list.content.map((item, i) => (
                        <Listitem index={i} item={item} />
                    ))}


                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List