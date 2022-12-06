import React from "react";
import "./Accueil.css"
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import maman1 from "../images/maman1.jpg"

const Accueil =()=>{
    return(
        <div className="Accueil  ">
            <div className="header_accueil">
                <head>
                    <Link to="/Compte"><Icon className="icon_head  cursor" icon="carbon:user-avatar-filled-alt" color="white" /></Link>
                    <Link to="/Menu"><Icon className="icon_head cursor" icon="material-symbols:menu-rounded" color="white" /></Link>
                </head>
                <img className="cursor" src={maman1} width="250" alt="img accueil" />
                <Link to="/Stop">
                    <Icon className="icon_head mb-2" icon="ic:baseline-keyboard-double-arrow-down" color="0496FF" />
                </Link>

            </div>
            <div className="footer_accueil">
                <div className="footer_accueil_contenu mx-auto">
                    <Link  to="/Naissance" className="button fs-2 is-fullwidth is-medium text-white bg-primary is-rounded "> <Icon className="point_accueil" icon="mdi:cursor-pointer" color="white" width="25" height="25" rotate={1} />Naissance</Link>
                <div className="mx-auto  d-flex drapeau">
                        <div className="vert  taille"></div>
                        <div className="jaune  taille"></div>
                        <div className="bleu  taille"></div>
                </div>
                    <Link  to="/Deces" className="button  is-fullwidth fs-2 bg-primary is-rounded text-white "> <Icon className="point_accueil1" icon="mdi:cursor-pointer" color="white" width="25" height="25" rotate={1} />Décès</Link>
                    <div className="mx-auto -glow drapeau">
                        <div className="vert  taille"></div>
                        <div className="jaune  taille"></div>
                        <div className="bleu  taille"></div>
                    </div>
                <Link to="/classeur" className="button bg-primary is-rounded is-large d-flex flex-row justify-content-around is-fullwidth">
                    <Icon className="classeur" icon="emojione-v1:blue-book" />
                    <p className="text-white classeurP mt-2">Classeur</p> 
                </Link>
                </div>
            </div>
        </div>
    )
} 

export default Accueil