import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import "./Connexion.css"
 
const Connexion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();

 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/login', {
                email: email,
                password: password
            });
            history.push("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
    return (
        <section className="hero fond is-fullheight is-fullwidth">
            <div className="hero-body ">
                <div className="container ">
                    <h2 className='mb-5 text-info fs-2'>CONNEXION</h2>
                    <div className="columns  is-centered">
                        <div className="column is-4-desktop ">
                            <form onSubmit={Auth} className="moi">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field  mt-2">
                                    <label className="label  text-white">Email uniquement.</label>
                                    <div className=" ">
                                        <input type="text" className="input is-rounded " placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-3">
                                    <label className="label text-white">Password</label>
                                    <div className="">
                                        <input type="password" className="input is-rounded" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button bg-success opacity-75 text-white is-rounded is-fullwidth">Connexion <Icon className='ms-2' icon="carbon:vpn-connection" color="white" width="30" height="30" /></button>
                                    <Link to="/Accueil" className=""><button type="submit" name="submit" value="Register" className="button is-rounded text-white  bg-primary is-fullwidth mt-1">Suivant <Icon height="40" className='ms-2' icon="ic:outline-arrow-right-alt" /></button></Link>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Connexion








// import React from "react";
// import "./Connexion.css"
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { Icon } from '@iconify/react';




// function Connexion() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);
   
//   return (
//     <div className="Connexion">
//         <div className="container">
//             <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
//                 <div className="text">
//                       <h2 className="connexion fs-1">Connextion</h2>
//                 </div>
//                 <p className="text_conect text-center">Completez ces informations afin de vous connecter a votre compte</p>
//                 <div>
//                     <label htmlFor=""></label>
//                     <input type="email" className="form-control bg" autoComplete="email" placeholder="Email" {...register("email", { required: true, maxLength: 30 })} />
//                 </div>
//                 <div>
//                     <label htmlFor=""></label>
//                     <input type="password" className="form-control bg" placeholder="Mot de passe" autoComplete="password" {...register("password", { required: true, maxLength: 30 })} />
//                 </div>
//                       <div className="paragraph ms-2 mt-3">
//                          <Link to="/Password">Mot de passe oubli???</Link> 
//                       </div>
//                       <div className="d-grid gap-2 col-10 mx-auto">
//                         <button className="d-grid gap-2 col-10 mx-auto btn badge rounded-pill bg-success bg-opacity-50 mt-4 d-flex align-items-center justify-content-center" type="submit">Envoyer<Icon icon="fluent-mdl2:accept-medium" /></button>
//                         <Link to="/Accueil" className="d-grid gap-2 col-10 mx-auto"><button type="submit" className="btn badge rounded-pill bg-primary ">Suivant <Icon icon="ic:outline-arrow-right-alt" /></button></Link>
//                       </div>
//             </form>
//         </div>
                  
//     </div>
//   );
// }



// export default Connexion;