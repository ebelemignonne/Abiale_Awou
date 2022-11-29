import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import "./Inscription.css";





const Inscription = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();
 
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            history.push("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    return (
        <section className="hero fond  d-flex flex-column is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <h2 className='mb-5 text-info fs-2'>INSCRIPTION</h2>
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={Register} className="moi text-white">
                                <p className="has-text-centered">{msg}</p>
                                <div className="field mt-5">
                                    <label className="label text-white">Nom</label>
                                    <div className="">
                                        <input type="text" className="input is-rounded" placeholder="Name"
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label text-white">Email</label>
                                    <div className="">
                                        <input type="text" className="input is-rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label text-white">Mot de passe</label>
                                    <div className="">
                                        <input type="password" className="input is-rounded" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label text-white">Confirm Mot de passe</label>
                                    <div className="">
                                        <input type="password" className="input is-rounded" placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button text-white is-rounded bg-success is-fullwidth">Register <Icon icon="mdi:account-success" className='ms-2' color="white" height="40" /> </button>
                                    <Link to="/Accueil" className=""><button type="submit" name="submit" value="Register" className="button bg-primary text-white is-rounded is-fullwidth mt-1">Suivant <Icon height="40" className='ms-2' icon="ic:outline-arrow-right-alt" /></button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Inscription
