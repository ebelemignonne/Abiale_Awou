import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Stop.css"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';


const Stop = () => {
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
        <section className="Stop ">
            <div className='logo_stop mx-auto d-flex align-items-center flex-column justify-content-evenly'>
                <div className='logo_stop1 mx-auto d-flex align-items-center flex-column justify-content-evenly'>
                    <Icon className='text-info opacity-75' icon="bi:sign-stop" width="200" height="200" />
                    <Icon icon="ic:baseline-back-hand" color="#0496FF" width="70" height="70" />

       `-`         </div>
            </div>
            <div className=" form_stop d-flex align-items-center flex-column justify-content-center">
                <p className='text-info'>Entrez votre email et le code d'acces.</p>
                <form onSubmit={Auth} className="">
                        <p className="has-text-centered">{msg}</p>
                    <div className="">
                        <label className="label text-white">Email</label>
                        <input type="text" className="input is-rounded is-info" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className=" mt-4">
                        <label className="label text-white">Code d'acces</label>
                        <input type="password" className="input bg-primary is-rounded" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                        <div className="field mt-5">
                        <Link to="/Dashboard" className="button is-success  is-rounded is-fullwidth">Connexion</Link>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default Stop;