import React from 'react'
import './style.css'
import PWSkills from './images/PWSkills.png'

function Banner() {
    return (
        <>
            <div className='container'>
                <div className='banner'>
                    <div className='banner-img'>
                        <img src={PWSkills} />
                    </div>
                    <div className='banner-search'>
                        <form>
                        <input type="text" placeholder="What do you want to learn"></input>
                        </form>
                    </div>
                    <button className='banner-btn'>
                        Login / Register
                    </button>
                </div>
            </div>


        </>
        
    )

}

export default Banner;