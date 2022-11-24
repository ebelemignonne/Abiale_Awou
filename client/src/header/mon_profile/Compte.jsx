import React from "react";
import "./Compte.css";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import user from "../../images/homme.png"


const Compte = () =>{
    return(
        <div className="contenaire_Compte">
            <div className="compte">
                <Link className="link-compt" to="/Accueil"><Icon className="icon-compte mt-3" icon="game-icons:return-arrow" /></Link>
                <div className="affich_compte">
                    <div className="">
                        {/* <button type="button" className="btn-warning">
                        <Icon icon="mdi:user-circle" color="#6d6875" width="40" height="40" />Upload File
                        <input type="file" />
                        </button> */}
                        <Upload />
                    </div>
                    <div className="mt-1">
                        <h2>Nom du compte</h2>
                        <p>ebele.gaspard@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="param_compte mb-5 ">
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