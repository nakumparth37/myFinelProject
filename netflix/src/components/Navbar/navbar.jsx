import './navbar.scss'
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScroll] = useState(false);
  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null);
  }

  return (
    <div className={isScrolled ? 'navbar scrolled' : "navbar"}>
      <div className="container">
        <div className="left">
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Logo' />
          <Link to="/" className="link">
            <span>HomePage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className='icon' />
          <span>KID</span>
          <Notifications className='icon' />
          <img src="https://media.licdn.com/dms/image/C5603AQEhMynV_t8sEA/profile-displayphoto-shrink_800_800/0/1600917417542?e=2147483647&v=beta&t=_hd9vKyJqEVK_nSXXj_k7Ls4HHekH49gobY-TEEeUJo" alt="Person" />
          <div className='profile'>
            <ArrowDropDown className='icon' />
            <div className='options'>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar