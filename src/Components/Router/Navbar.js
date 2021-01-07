import React,{useState} from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [showNav,setShowNav] = useState(false);
    const displayOptions = () => {
        if(showNav === true){
            return (
                <ul>
                <li onClick={() => setShowNav(!showNav)}>
                    <Link to="/" className="btn">Home</Link>
                </li>
                <li onClick={() => setShowNav(!showNav)}>
                    <Link to="/about" className="btn">About</Link>
                </li>
                <li onClick={() => setShowNav(!showNav)}>
                    <Link to="/people" className="btn">People</Link>
                </li>
            </ul>
            )
        }
        return;
    }
    return (
        <div>
            <button className='btn' onClick={() => setShowNav(!showNav)}>{showNav == false ? "Show More" : "Show Less"}</button>
            {displayOptions()}
            
        </div>
    );
};

export default Navbar;