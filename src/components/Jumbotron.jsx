import React from 'react';
import IPhone from "../assets/images/iphone-14.jpg"
import HoldingIPhone from "../assets/images/iphone-hand.png"

function Jumbtron() {
    return (  
        <div className="jumbotron-section wrapper">
            <h2 className='title'>New</h2>
            <img className='logo' src={IPhone} alt="iPhone 14" />
            <p className='text'>Big and bigger.</p>
            <span className='description'>
                From $41.67/mo. or $999 after trade-in.
            </span>
            <ul className='links'>
                <li><button className='button'>Buy</button></li>
                <li><a className='link'>Learn more</a></li>
            </ul>
            <img className='iphone-img' src={HoldingIPhone} alt="Person holding iPhone"/>
        </div>
    );
}

export default Jumbtron;