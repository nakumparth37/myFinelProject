import Navbar from '../../components/Navbar/navbar';
import Featured from "../../components/featured/featured";
import "./Home.scss";
import React, { useEffect, useState } from 'react';
import List from "../../components/list/List"
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers: {
            token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDQxYTM4MTkxMGYxZWU5ZjE0ZTY3YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjE4NTc3NSwiZXhwIjoxNjgzMDQ5Nzc1fQ.aOVunmfuvw4AIM6e5qkl3cpHelpgYHND3onpKtDSkw8"
          }
        }
        );
        console.log(res);
        setLists(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre])
  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}

    </div>
  )
}

export default Home