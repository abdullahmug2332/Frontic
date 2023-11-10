import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navmain() {
    const navigate=()=>{
        navigate('/booking.js')
    } ;
 
    return (
        <div className='maincontainer'>
            <nav>
                <div className="logo">
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
                <h1 className='mainname'>Frontic</h1>
                <h2 className='slogen'>Once a year go someplace you've never been before.</h2>
                <button onClick={()=>navigate} className='booknow'>Book Now</button>
            </div>
        </div>
    )
}
