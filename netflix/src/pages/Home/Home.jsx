import  Navbar  from '../../components/Navbar/navbar';
import  Featured from "../../components/featured/featured";
import "./Home.scss";
import React from 'react';
import List from "../../components/list/List"

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <Featured type="movie"/>
        <List />
        <List />
        <List />
        <List />
        
    </div>
  )
}

export default Home