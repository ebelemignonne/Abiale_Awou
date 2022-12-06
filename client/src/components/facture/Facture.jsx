import React from "react";
import { Icon } from '@iconify/react';
import "./Facture.css";
import Airtel from "../../images/Airtel1.jpg"
import Moov from "../../images/moov1.jpg"
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect"


const Facture = ()=>{ 

    return(
        <div className="contenaire_facture d-flex flex-column align-items-center justify-content-around">
            <div className="heid_facture d-flex align-items-center justify-content-between">
                <Link to="/Menu"><Icon icon="material-symbols:menu-rounded" color="white" width="40" height="40" /></Link>
                <Link to="/Naissance"><Icon icon="game-icons:return-arrow" color="white" width="40" height="40" hFlip={true} vFlip={true} /></Link>
            </div>
            <div className="d-flex block_teimbre placeholder-glow align-items-center flex-column justify-content-between mt-2">
                <div className="teimbre1 d-flex ">
                    <TextAnnime />
                </div>
                <div className="teimbre2 placeholder mb-2 d-flex justify-content-center align-items-center ">
                    <Icon className="teimbre " icon="mdi:postage-stamp" color="#0496FF" width="100" height="100" />
                    <div className="text-center">
                        <p className="text-black">ACHETER UN TEIMBRE ICI</p>
                        <Icon icon="mdi:cursor-pointer" color="006BA6" width="40" height="40" rotate={2} />                    </div>
                </div>
            </div>
            
            <div className="BLOC_FACTURE ">
                <div className="bloc_facture1 d-flex mx-auto flex-row align-items-center justify-content-between">
                    <div className="d-flex airtel flex-column align-items-center  justify-content-evenly" >
                       <Link to="/Forma"> <img  src={Airtel} width="100px" alt="logo airtel" /></Link>
                        <Link to="/Forma" className="button is-rounded is-danger  is-outlined"><Icon icon="arcticons:airtel" color="#e80000" width="24" height="24" />Aitel Monney</Link>
                    </div>
                    <div className="d-flex moov flex-column align-items-center  justify-content-evenly">
                       <Link to="/Forma"><img src={Moov} width="100" alt="logo moov" /></Link> 
                        <Link to="/Forma" className="button is-rounded is-info is-outlined"><Icon icon="carbon:application-mobile" color="#015da8" width="24" height="24" /> Moov Money</Link>
                    </div>
                </div>
            </div>
         </div>
    )
}





// text annime
const TextAnnime = ()=>{

  return(
      <div className="taxt_deces fs-1 text-white">
          <div className="text_intro">
              <div className="text_anim ms-2 text-info">
                  <Typewriter
                  options={{autoStart: true,
                  loop: true,
                  delay: 40,
                  strings:[
                    "La legalisation d'un acte de naissance necessite l'achat d'un timbre de 1000fcfa plus les frais supplementaire de 1000 fcfa .  Choisissez ci-dessous le mode de paiement qui vous conviens."
                  ],
                  }} />
              </div>
          </div>
      </div>
  )
}

 



export default Facture