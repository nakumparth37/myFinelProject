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
      <List title ='NetFlix Original' fetchUrl ={requests.fetchNetflixOriginals} isLargeRow/>
      <List title ='Action Movies' fetchUrl ={requests.fetchActionMovies} />
      {/* <List title ='Documentary Movies' fetchUrl ={requests.fetchDocumentaries}/>
      <List title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <List title ='Horrors Movies' fetchUrl ={requests.fetchHorrorMovies} />
      */}
    </div>
  )
}

export default Home