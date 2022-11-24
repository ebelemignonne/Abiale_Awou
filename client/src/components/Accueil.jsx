import React from "react";
import "./Accueil.css"
import { Icon } from '@iconify/react';
import img_Accueil from "../images/img_Accueil.png"
import { Link } from "react-router-dom";

const Accueil =()=>{
    return(
        <div className="Accueil">
            <div className="header_accueil">
                <head>
                    <Link to="/Compte"><Icon className="icon_head cursor" icon="carbon:user-avatar-filled-alt" /></Link>
                    <Link to="/Menu"><Icon className="icon_head cursor" icon="material-symbols:menu-rounded" /></Link>
                </head>
                <img className="cursor" src={img_Accueil} alt="img accueil" />
                {/* mb-3 */}
                    <Icon className="icon_head cursor" icon="ic:baseline-keyboard-double-arrow-down" />

            </div>
            <div className="footer_accueil">
                <div className="footer_accueil_contenu d-grid mx-auto">
                    <Link className=" mx-auto" to="/Naissance"><button className="btn bg-btn-B fs-2 btn-primary">Naissance</button></Link>
                <div className="mx-auto drapeau">
                        <div className="vert taille"></div>
                        <div className="jaune taille"></div>
                        <div className="bleu taille"></div>
                </div>
                    <Link className=" mx-auto" to="/Deces"><button className="btn bg-btn-A fs-2 btn-primary ">Décès</button></Link>
                    <div className="mx-auto drapeau">
                        <div className="vert taille"></div>
                        <div className="jaune taille"></div>
                        <div className="bleu taille"></div>
                    </div>
                <p class="placeholder-glow">
                    {/* pt-3 */}
                    <Link to="/Classeur"><span class="placeholder mon_style col-12 "><p className="text">Classeur</p><Icon className="classeur" icon="emojione-v1:blue-book" /></span></Link>  
                </p>
                </div>
            </div>
        </div>
    )
} 

export default Accueil