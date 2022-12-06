/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import "./Dashboard.css"
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
 
const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useNavigate();
 
    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5001/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push("/list");
            }
        }
    }

    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5001/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5001/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    return (
        <div className="container_dash placeholder-glow d-flex flex-column align-items-center justify-content-around">
            <div className="head_dash  d-flex align-items-center justify-content-between">
                <Link to="/Menu"><Icon icon="material-symbols:menu-rounded" color="white" width="40" height="40" /></Link>
                <Link to="/Naissance"><Icon icon="game-icons:return-arrow" color="white" width="40" height="40" hFlip={true} vFlip={true} /></Link>
            </div>
            <div className='header_daash   d-flex align-items-center flex-row justify-content-between text-info'>
                <div className='ms-1'>
                    <h1>TABLEAU DE BORD</h1>
                    <p className='bg-primary text-center'>Nom de l'Agent connecté:</p>
                    <p className='form-control bg-primary text-center text-info border-info'>{name}</p>

                </div>
            <Icon className='' icon="ant-design:dashboard-outlined" color="#00b4ff" width="100" height="100" />
            </div>

            <div className='corps_dash'>
                <p className='text-info text-center fs-4'>Lite des angents enregistré</p>
                <table className="table is-striped is-fullwidth">
                    <thead className='bg-primary'>
                        <tr >
                            <th className='text-white'>No</th>
                            <th className='text-white'>Nom</th>
                            <th className='text-white'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td className='bg-success text-white'>{index + 1}</td>
                                <td className='bg-success text-white opacity-75'>{user.name}</td>
                                <td className='bg-success text-white opacity-75'>{user.email}</td>
                            </tr>
                        ))}
    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard