import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
 
const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useNavigate();
 
    useEffect(() => {
        refreshToken();
        getUsers();
    }, );
 
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push("/");
            }
        }
    }

    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
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
        const response = await axiosJWT.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    return (
        <div className="container mt-5">
            <h1>Welcome Back: {name}</h1>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
 
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard















// import React from "react";
// import { useEffect, useState} from "react";
// import "./Password.css";
// import { useForm } from "react-hook-form";



// function Password() {

//   // methode poste image
//   const imageHandler = (event) => {
//     const file = event.target.files[0];
//     const formData = new FormData()
//     formData.append('image', file)

//   fetch(`http://localhost:3500/api/image`, {
//     method: 'POST',
//     body: formData,
//     headers: {
//       'Accept': 'multipart/form-data',
//     },
//     credentials: 'include',
//   })
//   .then(res => res.json())
//   .then(res => {
//     setUploadStatus(res.msg);
//   })
//   .catch(error => {
//     console.error(error);
//   })

// }

// const [uploadStatus, setUploadStatus] = useState('');


// // une récupération GET.
// const [image, setImage] = useState('');

// useEffect(() => {
//   fetch(`http://localhost:3500/api/image`, {
//     method: 'GET',
//     headers: {
//       "content-Type": 'application/json, charset=UTF-8',
//       'Accept': 'application/json, text/html',
//     },
//     credentials: 'include',
//   })
//   .then(data => data.json())
//   .then((data) => {
//     setImage('http://localhost:3500/' + data.image)
//     console.log(image)
//   });
// })



//   return(
//     <div className="password d-flex flex-column align-items-center justify-content-evenly">
//       <h2> {uploadStatus} </h2>
//       <input type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler} />
//       {image && <img src={image} alt="img"/>}

//       <Formulair />
//     </div>
//   )
// }




// // formulaire


//  function Formulair() {
//   const { register, handleSubmit } = useForm({
//     defaultValues: {
//       firstName: '',
//       lastName: '',
//       category: '',
//       checkbox: [],
//       radio: ''
//     }
//   });

//   return (
//     <form className="d-flex flex-column justify-content-evenly" onSubmit={handleSubmit(console.log)}>
//       <input {...register("firstName", { required: true })} placeholder="First name" />

//       <input {...register("lastName", { minLength: 2 })} placeholder="Last name" />

//       <select {...register("category")}>
//         <option value="">Select...</option>
//         <option value="A">Category A</option>
//         <option value="B">Category B</option>
//       </select>
      
//       <input {...register("checkbox")} type="checkbox" value="A" />

//       <input {...register("radio")} type="radio" value="A" />

//       <input type="submit" />
//     </form>
//   );
// }

// export default Password








// import React, { useState } from 'react'
// import axios from 'axios';
 

// const FileUpload = ()=>{
//       const [file, setFile] = useState();
//       const [fileName, setFileName] = useState("");
 
//       const saveFile = (e) => {
//         setFile(e.target.files[0]);
//         setFileName(e.target.files[0].name);
//       };
 
//       const uploadFile = async (e) => {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("fileName", fileName);
//         try {
//           const res = await axios.post(
//             "http://localhost:3000/upload",
//             formData
//           );
//           console.log(res);
//         } catch (ex) {
//           console.log(ex);
//         }
//       };
 
    
//       return (
//         <div className="App">
//           <input type="file" onChange={saveFile} />
//           <button onClick={uploadFile}>Upload</button>
//         </div>
//       );
    
// }
 
// export default FileUpload;