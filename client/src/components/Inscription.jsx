import React from "react";
import "./Inscription.css"
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Icon } from '@iconify/react';


const Inscription = () =>{

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

return(
    <div className="Inscription">
            <div className="container">


                <form onSubmit={handleSubmit(onSubmit)} post={"http://localhost:8000/createOneInscript"}  className="mx-auto" >
                <div className="text_inscription">
                    <h2>Inscription</h2>
                </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" className="form-control bg" autoComplete="Nom" name="Nom" placeholder="Nom" {...register("Nom", { required: true, maxLength: 30 })} />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" className="form-control bg " autoComplete="lastName" name="Prenom" placeholder="Prenom" {...register("Prenom", { required: true, maxLength: 30 })} />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="number" className="form-control bg " autoComplete="Tel" name="Tel" placeholder="Tel" {...register("Tel", { required: true, maxLength: 30 })}/>
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="email" className="form-control bg" autoComplete="email" name="Email" placeholder="Email" {...register("Email", { required: true, maxLength: 30 })}/>
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input type="password" className="form-control bg " autoComplete="Password" name="Password" placeholder="Mot de passe" {...register("Password", { required: true, maxLength: 30 })} />
                    </div>
                         <div className="d-grid gap-2 col-10 mx-auto">
                           <button className="d-grid gap-2 col-10 mx-auto btn badge rounded-pill bg-success bg-opacity-50 mt-4 d-flex align-items-center justify-content-center" type="submit">Envoyer<Icon icon="fluent-mdl2:accept-medium" /></button>
                           <Link to="/Accueil" className="d-grid gap-2 col-10 mx-auto"><button type="submit" name="submit" value="Register" className="btn badge rounded-pill bg-primary ">Suivant <Icon icon="ic:outline-arrow-right-alt" /></button></Link>
                         </div>


                </form>

            </div>
    </div>
)
}




export default Inscription