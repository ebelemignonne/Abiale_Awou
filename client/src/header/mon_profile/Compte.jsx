import React from "react";
import "./Compte.css";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import user from "../../images/homme.png"


const Compte = () =>{
    return(
        <div className="contenaire_Compte">
            <div className="compte">

                <Link className="link-compt" to="/Accueil"><Icon className="icon-compte mt-3" icon="game-icons:return-arrow" width="40" height="40" hFlip={true} vFlip={true} /></Link>
                <div className="affich_compte">
                    <div className="">
                        <Upload />
                    </div>
                    <div className="mt-1">
                        <h2>Nom du compte</h2>
                        <p>ebele.gaspard@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="param_compte mb-5 ">
                <Link to="/ModifProfile" className="p1 text-white text-decoration-none text-center d-flex flex-colunm align-items-center justify-content-around">
                <Icon icon="mdi:puzzle-edit" color="#006BA6" width="50" height="50" />
                    Modifier mon profile
                </Link>
                <Link to="/Contribution" className="p2 text-decoration-none text-white text-center d-flex flex-colunm align-items-center justify-content-around">
                    <Icon to="/Contribution" icon="pajamas:first-contribution" color="#006BA6" width="50" height="50" />
                    Contribuer pour faire<br />évoluer l'application
                </Link>
                <Link to="/Evaluation" className="p3 text-decoration-none text-white text-center d-flex flex-colunm align-items-center justify-content-around">
                    <Icon icon="game-icons:self-love" color="#006BA6" width="50" height="50" />
                    Evaluez l'application
                </Link>
                <Link to="/Contact" className="p4 text-decoration-none text-white text-center d-flex flex-colunm align-items-center justify-content-around">
                    <Icon className="me-5" icon="ooui:message" color="#006BA6" width="45" height="45" />
                    Nous contacter
                </Link>
                <Link to="/Parametres" className="p5 text-decoration-none text-white text-center d-flex flex-colunm align-items-center justify-content-around">
                <Icon icon="ri:user-settings-fill" color="#006BA6" width="50" height="50" />
                    Aller aux parametres
                </Link>
            </div>
        </div>
    )
}

const Upload =()=>{
    return(
        <div className="upload">
            <img src={user} height="70" width="70" alt="" />
            <div className="round d-flex justify-content-center ">
                <input type="file" />
                <Icon icon="material-symbols:camera-enhance" color="#fff" width="30" height="30" />
            </div>
        </div>
    )
}


export default Compte