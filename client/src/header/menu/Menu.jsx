import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { Icon } from '@iconify/react';

const Menu =()=>{
    return(
        <div className="conteneur_menu">
            <div className="proprietes ">
            <div className="btn-group-vertical propriete" role="group" aria-label="Vertical button group">
            <button type="button" className="btn btn-primary p-but mb-1 "><Link className="link-menu" to="/Accueil">Accueil</Link></button>
            <button type="button" className="btn btn-primary mb-1"><Link className="link-menu" to="/Naissance">Naissance</Link></button>
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary mb-1 dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                Options
                </button>
                <ul className="dropdown-menu">
                    <li><Link to="/Declaration" className="dropdown-item" >Declaration d'une naissance</Link></li>
                    <li><Link to="/Modification" className="dropdown-item" >Modification acte de naissance</Link></li>
                    <li><Link to="/Reclamation" className="dropdown-item" >Demande copie acte de naissance</Link></li>
                    <li><Link to="/Retranscription" className="dropdown-item" >Retranscription acte de naissance</Link></li>
                </ul>
            </div>
            <button type="button" className="btn mb-1 btn-primary "><Link to="/Deces" className="link-menu">Deces</Link></button>
            <button type="button" className="btn btn-primary "> <Link to="/Classeur" className="link-menu ">Classeur</Link></button>
            </div>
            </div>
            <Link to="/Accueil"><Icon className="mt-5 me-3" icon="game-icons:return-arrow" color="white" width="40" height="40" hFlip={true} vFlip={true} /></Link>
        </div>
    )
}

export default Menu