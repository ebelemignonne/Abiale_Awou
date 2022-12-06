import React from "react";
import "./Naissance.css";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

const Naissance =()=>{
    return(
        <div className="contenaire_naissance mx-auto d-flex flex-column">
            <Entete />
            <CommentCaMarche1 />
        </div>
    )
}

function Entete (){
  return(
    <div className="entete d-flex align-items-center ">
            <div className="bloc_naissance d-flex flex-column justify-content-between mx-auto">
                <div className="bloc1 d-flex justify-content-between mt-4 fs-1">
                    <Link to="/Accueil"><Icon icon="game-icons:return-arrow" color="white" width="40" height="40" hFlip={true} vFlip={true} /></Link>
                    <Link to="/Menu"><Icon icon="material-symbols:menu-rounded" color="white" width="40" height="40" /></Link>
                </div>

                <div className="bloc2 mt-2 d-flex flex-column justify-content-between  ">
                    <Icon className="img-mairie" icon="map:city-hall" color="#0496FF" width="200" height="200" />                    
                    <div className="fs-1 col_mairie d-flex justify-content-center">La Mairie</div>
                </div>
            </div>
    </div>
  )
}

function CommentCaMarche1() {
    return (
          <div className="ca_marche ps-1 pe-1 d-flex flex-column align-items-center justify-content-center mx-auto">
             <h2 className="form-control bg-info text-center text-white fs-5">Choisissez l'une des options ci-dessous:</h2>
           <Icon className=" deplacement-icon" icon="ph:arrow-fat-lines-down-fill" color="#006BA6" width="40" height="40" />
             <div class="d-grid gap-1 mt-2">
                 <Link to='/Declaration' class="d-grid gap-2">
                     <button class="btn bg_but_naissance btn-primary pt-3
                      pb-3"  type="button">Déclaration d'une naissance</button>
                 </Link>
                 <Link to='/Modification' class="d-grid gap-2">
                     <button class="btn bg_but_naissance btn-primary pt-3
                      pb-3" type="button">Demande de modification d'acte de naissance</button>
                 </Link>
                 <Link to='/Reclamation' class="d-grid gap-2">
                     <button class="btn bg_but_naissance btn-primary pt-3
                      pb-3" type="button">Demande de legalisation d'acte de naissance</button>
                 </Link>
                 <Link to='/Retranscription' class="d-grid gap-2">
                     <button class="btn bg_but_naissance btn-primary pt-3
                      pb-3" type="button">Retranscription dacte de naissance</button>
                 </Link>
             </div>
          </div>
     
    )
  }


export default Naissance;