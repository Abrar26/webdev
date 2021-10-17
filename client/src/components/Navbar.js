import React,{useState} from 'react';
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const style1 = {color:"#fff",fontWeight:"bold"}
const style2 = {color:"black",fontWeight:"bold"}
const Navbar = () => {
    const [route,setRoute] = useState(false);
    const condition = route ? style2 : style1;

    return (
        <div className="navz">
            <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
                <button className="navbar-toggler nav-btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav navlink navlink">
                    <li className="nav-item active nav-btn">
                        <NavLink className="nav-link" style={condition} to="/" onClick={()=> setRoute(false)} >Home</NavLink>
                    </li>
                    <li className="nav-item nav-btn">
                        <NavLink className="nav-link" style={condition} onClick={()=> setRoute(true)} to="/addSkill">Add Skill</NavLink>
                    </li>
                    <li className="nav-item nav-btn">
                        <NavLink className="nav-link" style={condition} onClick={()=> setRoute(true)} to="/contact">Contact us</NavLink>
                    </li>
                    </ul>
                </div>
            </nav>


        </div>
    )
}

export default Navbar
