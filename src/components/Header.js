import React from 'react';
import ReactStars from 'react-stars'


function Header({setsearchTitle}){
    return(
        <div style={{marginTop:"20px"}} className="navbar bg-dark rounded text-white">
            <h2>Our Movies</h2>
            
            <input
                    id="myInput"
                    placeholder="Search Movies..."
                    onChange={(e)=>setsearchTitle(e.target.value)}
            />
        </div>
    )
}

export default Header;