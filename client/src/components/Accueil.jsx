import React from "react";
import "./Accueil.css"
import { Icon } from '@iconify/react';
import maman1 from "../images/maman1.png"
import { Link } from "react-router-dom";

const Accueil =()=>{
    return(
        <div className="Accueil placeholder-glow ">
            <div className="header_accueil">
                <head>
                    <Link to="/Compte"><Icon className="icon_head  cursor" icon="carbon:user-avatar-filled-alt" color="white" /></Link>
                    <Link to="/Menu"><Icon className="icon_head cursor" icon="material-symbols:menu-rounded" color="white" /></Link>
                </head>
                <img className="cursor" src={maman1} alt="img accueil" />
                {/* mb-3 */}
                <Link to="/Dashboard">
                    <Icon className="icon_head  cursor" icon="ic:baseline-keyboard-double-arrow-down" color="white" />
                </Link>

            </div>
            <div className="footer_accueil">
                <div className="footer_accueil_contenu mx-auto">
                    <Link  to="/Naissance" className="button fs-2 is-fullwidth is-medium text-white bg-primary is-rounded ">Naissance</Link>
                <div className="mx-auto  d-flex drapeau">
                        <div className="vert  taille"></div>
                        <div className="jaune  taille"></div>
                        <div className="bleu  taille"></div>
                </div>
                    <Link  to="/Deces" className="button  is-fullwidth fs-2 bg-primary is-rounded text-white ">Décès</Link>
                    <div className="mx-auto -glow drapeau">
                        <div className="vert  taille"></div>
                        <div className="jaune  taille"></div>
                        <div className="bleu  taille"></div>
                    </div>
                <Link to="/classeur" className="button placeholder bg-info is-rounded is-large d-flex flex-row justify-content-around is-fullwidth">
                   <p className="text-white mt-2">Classeur</p> 
                <Icon className="classeur" icon="emojione-v1:blue-book" />
                </Link>
                </div>
            </div>
        </div>
    )
} 

export default Accueil