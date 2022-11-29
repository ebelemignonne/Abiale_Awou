import React from "react";
import { Link } from "react-router-dom";
import choix from "../images/choix.png"
import "./Choix.css";



const Choix = () => {
    return(
        <div className="Choix">
            <div className="choix_contenu">
                <img src={choix} alt="img mon bebe" className="choix" />
                <div className="les_btn d-flex  align-items-center justify-content-around mb-1 ">
                    <Link to="/Connexion" className="button bt_connexion is-rounded text-white bg-primary  ">Connexion</Link>
                    <Link to="/Inscription" className="button text-white is-rounded bg-primary ">  Creer un compte </Link>
                </div>
            </div>
        </div>
    )
}

export default Choix