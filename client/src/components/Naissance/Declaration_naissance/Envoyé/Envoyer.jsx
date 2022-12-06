import React from "react";
import "./Envoyer.css"
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";


const Envoyer =()=>{
    return(
        <div className="ENVOYER text-white d-flex flex-column align-items-center justify-content-center ">
            <div className=""><Icon  icon="ic:baseline-send-to-mobile" color="#0496FF" width="200" height="200" /></div>
            <div className="">
                  <p>Demande envoyé avec succes!</p>  
                <Link to="/Accueil" className="form-control button is-info is-rounded">Revenir a l'accueil</Link>
            </div>
        </div>
    )
}


export default Envoyer;






























