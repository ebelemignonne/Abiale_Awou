import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import logo1 from "../images/Abiale-A-copie2.png"



const Home = () =>{
    return(
        <div className="home">
            {/* <img src={logo1} alt="" /> */}
            <Link to="/Accept" className="link_home"><img src={logo1} alt="" /></Link>
            {/* <img className="logo_home"  src={logo} alt="logo_de_l'application"/> */}
        </div>
    )
}

export default Home