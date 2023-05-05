import Navbar from '../../components/Navbar/navbar';
import Featured from "../../components/featured/featured";
import "./Home.scss";
import React, { useEffect, useState } from 'react';
import List from "../../components/list/List"
import axios from "axios";
import requests from '../../components/Requests';

const Home = ({ type }) => {

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      <List  title ='Treading Original' fetchUrl ={requests.fetchTrending}/>
      <List  title ='NetFlix Original' fetchUrl ={requests.fetchNetflixOriginals}/>
      <List  title ='Upcoming Movies' fetchUrl ={requests.fetchUpcoming} />
      <List  title ='Action Movies' fetchUrl ={requests.fetchActionMovies} />
      <List  title ='From TV' fetchUrl ={requests.fetchTv} />
      <List  title ='HorrorMovies Movies' fetchUrl ={requests.fetchHorrorMovies} />
      

      
    </div>
  )
}

export default Home