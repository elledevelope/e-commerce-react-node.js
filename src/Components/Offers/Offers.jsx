import React from 'react'
import './Offers.css'
import excusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclusive <br />
                    Offers For You
                </h1>
                <p>ONLY ON BEST SELLERS PROCUCTS</p>
                <button>Check Now</button>
            </div>

            <div className="offers-right">
                <img src={excusive_image} alt="excusive image" />
            </div>
        </div>
    )
}

export default Offers