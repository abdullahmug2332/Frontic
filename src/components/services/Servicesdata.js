import React from "react";

export default function Servicesdata() {
    return (
        <>
        <h1 className="topheadingservices" >Services</h1>
        <div className="servicesdata">
            <div className=" servicesup">
                <div className="scon service1">
                    <img className="sevicespic1" width={338} src="hotelfood.jpeg" alt="" />
                    <h1 className="serviceh1">Healthy Food</h1>
                    <p className="serivcep">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, repellat?</p>
                </div>
                <div className="scon service2">
                    <img className="sevicespic2" width={338} height={224} src="hotelroom.jpeg" alt="" />
                    <h1 className="serviceh1">Comfortable Rooms</h1>
                    <p className="serivcep">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, optio?</p>
                </div>
                <div className="scon service3">
                    <img className="sevicespic3"  width={337} height={224}  src="hotelswimmingpool.jpeg" alt="" />
                    <h1 className="serviceh1">Swimming pool</h1>
                    <p className="serivcep">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, non.</p>
                </div>
            </div>
            <div className="servicesdown">
                <div className="scon service4">
                    <img className="sevicespic4"  width={338} height={224}  src="hotelsaman.jpeg" alt="" />
                    <h1 className="serviceh1">Luggage Safety </h1>
                    <p className="serivcep">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, earum!</p>
                </div>
                <div className="scon service5">
                    <img className="sevicespic5"  width={338} height={224}  src="hotelgym.jpeg" alt="" />
                    <h1 className="serviceh1">Gym</h1>
                    <p className="serivcep">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, unde.</p>
                </div>
                <div className="scon service6">
                    <img className="sevicespic6"  width={338} height={224}  src="hoteldisco.jpeg" alt="" />
                    <h1 className="serviceh1">Disco</h1>
                    <p className="serivcep">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quis?</p>
                </div>
            </div>
            <button className='booknows'>Book Now</button>
        </div>
        </>
    );
}
