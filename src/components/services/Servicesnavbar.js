import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Servicesnavbar() {
  return (
    <div>
        <div>
     <div className='servicescontainer'>
            <nav>
                <div className="logoabout">
                    <img className='logoimg' src="Logo.png" height={50} width={50} alt="" />
                </div>
                <div className="navitems">
                    <ul className='navbaritems'>
                    <li><NavLink className='links' to="/">Home</NavLink></li>
                        <li><NavLink className='links' to="/About">About</NavLink></li>
                        <li><NavLink className='links' to="/Services">Services</NavLink></li>
                        <li><NavLink className='links' to="/Booking">Booking</NavLink></li>
                    </ul>
                </div>
                <div className="phone">
                    <i className="fa fa-phone"></i>
                    <p className='number'>123-489-9381</p>
                </div>
            </nav>
            <div className="main">
                <h1 className='mainname'>Our Services</h1>
                <h2 className='slogen'>Our duty is make you feel comfortable</h2>
                <button className='booknow'>Book Now</button>
            </div>
        </div>
    </div>
    </div>
  )
}
