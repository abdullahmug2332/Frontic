import React from 'react'

export default function Bookingdata() {
    return (
        <div className='bookingdata' >
            <div className="bookingcon">
                <div className="datearrival">
                <h3 className='datea'>Date Arrival</h3>
                    <input className='date' type="date" />
                </div>
                <div className="datedeparcher">
                <h3 className='dated'>Date Departure</h3>
                    <input className='date' type="date" />
                </div>
                <div className="personsnumber">
                    <h3 className='sp'>Select Persons </h3>
                    <select name="" id="">
                        <option value="">Number of Persons</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">5+</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
