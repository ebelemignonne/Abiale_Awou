import React from "react";
import "./Accept.css"
import maman1 from "../images/maman1.jpg"
import { Link } from "react-router-dom";


const Accept = () => {
    return(
        <div className="Accept">
            <div className="contenu_Accept">
                    <div className="Accept_haut">
                        <img className="img_accept" src={maman1} alt="mon imag"/>
                    <section className="sect_Accept">
                        <h2>Abiale & Awou</h2>
                    </section>
                </div>
                <div className="Accept_bas">
                <section className="sect_Accept_bas">
                <p>Declarer la naissance du nouveau né ou le déces de votre parent depuis chez vous en utilisent votre smart phone.</p>

                <p>En utilisant l’application, vous acceptez nos <Link to="/Conditions">conditions de services </Link> et notre politique de confidentialité. Cliquer <Link to='/Politiques'>ici</Link> pour plus d’informations.</p>
                    </section>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="button bg-primary badge is-rounded "><Link to="/Choix" className="link_Accept">J'accept</Link></button>
                        <button className="button badge is-rounded  bg-danger"><Link to="/" className="link_Accept">Je n'accepte pas</Link></button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Accept