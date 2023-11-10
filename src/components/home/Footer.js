import React from 'react'

export default function Footer() {
    return (
        <>
        <div className='footer'>
            <ul className='sevicesfooter'>
                <li className='ld'>Services</li>
                <li>Tour</li>
                <li>Swiming</li>
                <li>Surfing</li>
                <li>Kayak</li>
            </ul>
            <ul className="practicefooter">
                <li className='ld'>Practice</li>
                <li>Travel</li>
                <li>Popular places</li>
                <li>Destination</li>
                <li>Tour</li>
                <li>Family vacations</li>
            </ul>
            <ul className="connescts">
            <input className='search' type="search" placeholder='Search here' />
                <i className='fa fa-search' ></i>
                <div className="pages">
                    <li><a href="#" class="fa fa-facebook"></a></li>
                    <li><a href="#" class="fa fa-instagram"></a></li>
                    <li><a href="#" class="fa fa-twitter"></a></li>
                    <li><a href="#" class="fa fa-youtube"></a></li>
                    <li><a href="#" class="fa fa-pinterest"></a></li></div>
            </ul>
            
        </div>
         <p className='copyright'>Copyright ©2023 All rights reserved | Frontic</p>
        </>
    )
}
