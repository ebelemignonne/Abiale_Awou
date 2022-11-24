import React from "react";
import "./Connexion.css"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Icon } from '@iconify/react';




function Connexion() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <div className="Connexion">
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
                <div className="text">
                      <h2 className="connexion fs-1">Connextion</h2>
                </div>
                <p className="text_conect text-center">Completez ces informations afin de vous connecter a votre compte</p>
                <div>
                    <label htmlFor=""></label>
                    <input type="email" className="form-control bg" autoComplete="email" placeholder="Email" {...register("email", { required: true, maxLength: 30 })} />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="password" className="form-control bg" placeholder="Mot de passe" autoComplete="password" {...register("password", { required: true, maxLength: 30 })} />
                </div>
                      <div className="paragraph ms-2 mt-3">
                         <Link to="/Password">Mot de passe oublié?</Link> 
                      </div>
                      <div className="d-grid gap-2 col-10 mx-auto">
                        <button className="d-grid gap-2 col-10 mx-auto btn badge rounded-pill bg-success bg-opacity-50 mt-4 d-flex align-items-center justify-content-center" type="submit">Envoyer<Icon icon="fluent-mdl2:accept-medium" /></button>
                        <Link to="/Accueil" className="d-grid gap-2 col-10 mx-auto"><button type="submit" className="btn badge rounded-pill bg-primary ">Suivant <Icon icon="ic:outline-arrow-right-alt" /></button></Link>
                      </div>
            </form>
        </div>
                  
    </div>
  );
}



export default Connexion;