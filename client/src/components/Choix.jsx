import React from "react";
import { Link } from "react-router-dom";
import bebe from "../images/bebe.png"
import "./Choix.css";



const Choix = () => {
    return(
        <div className="Choix">
            <div className="choix_contenu">
                <img src={bebe} alt="img mon bebe" />
                <div className="d-grid1 gap-05 col-6 mx-auto">
                    <Link className="lin_choix" to="/Connexion"><button className="btn btn1 cool rounded-pill bg-cool">Connexion</button></Link>
                    <Link className="lin_choix mt-1" to="/Inscription"><button className="btn btn2 badge rounded-pill  bg-primary2">  Creer un compte </button></Link>
                </div>
            </div>
        </div>
    )
}

export default Choix