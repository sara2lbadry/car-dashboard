import React from 'react'
import './navbar.css'
import {FiSearch} from "react-icons/fi"
import {IoIosNotificationsOutline} from 'react-icons/io'
import portrait from '../../assets/portrait.svg'

function Navbar() {
  return (
    <section id='nav'>
      <div className="navbar_container">
        <div className="search_container">
          <FiSearch className='sreach_icon' />
          <input type="text" placeholder='Search or type' />
        </div>
        <div className='right'>
          <IoIosNotificationsOutline className='notification_icon' />
          <div className='portrait_img'>
            <img src={portrait} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar