import React from "react";
import "./Naissance.css";
import Accordion from 'react-bootstrap/Accordion';
import { Icon } from '@iconify/react';
import Mairie from '../../images/Mairie.png'
import { Link } from "react-router-dom";

const Naissance =()=>{
    return(
        <div className="contenaire_naissance mx-auto d-flex justify-content-between flex-column">
            <Entete />
            <CommentCaMarche />
        </div>
    )
}

function Entete (){
  return(
    <div className="entete">
                    <div className="bloc_naissance d-flex flex-column mx-auto">
                <div className="bloc1 d-flex justify-content-between mt-4 fs-1">
                    <Link to="/Accueil"><Icon icon="game-icons:return-arrow" color="white" width="40" height="40" hFlip={true} vFlip={true} /></Link>
                    <Link to="/Menu"><Icon icon="material-symbols:menu-rounded" color="white" width="40" height="40" /></Link>
                </div>
                <div className="bloc2 mt-2 d-flex flex-column justify-content-between  ">
                    <img className="img-mairie" src={Mairie} alt="mairie" />
                    <div className="fs-1 col_mairie d-flex justify-content-center">La Mairie</div>
                </div>
            </div>
    </div>
  )
}


function CommentCaMarche() {
    return (
      <Accordion className="ca_marche mx-auto">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="border border-4 fs">Que voulez vous faire? </Accordion.Header>
          <Accordion.Body>
          <h2>Choisissez l'une des options ci-dessous:</h2>
          <Icon className="ms-4 deplacement-icon" icon="ph:arrow-fat-lines-down-fill" color="#311847" width="40" height="40" />
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
                     pb-3" type="button">Reclamation d'une copie d'acte de naissance</button>
                </Link>
                <Link to='/Retranscription' class="d-grid gap-2">
                    <button class="btn bg_but_naissance btn-primary pt-3
                     pb-3" type="button">Retranscription dacte de naissance</button>
                </Link>
            </div>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  }


export default Naissance;