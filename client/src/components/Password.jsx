import React from "react";
import { useEffect, useState, setUploadStatus } from "react";
import "./Password.css";



function Password() {

  const imageHandler = (event) => {

    const file = event.target.files[0];
    const formData = new FormData()
    formData.append('image', file)

  fetch(`http://localhost:3500/api/image`, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'multipart/form-data',
    },
    credentials: 'include',
  })
  .then(res => res.json())
  .then(res => {
    setUploadStatus(res.msg);
  })
  .catch(error => {
    console.error(error);
  })

}

// une récupération GET.
const [image, setImage] = useState('');

useEffect(() => {
  fetch(`http://localhost:3500/api/image`, {
    method: 'GET',
    headers: {
      "content-Type": 'application/json, charset=UTF-8',
      'Accept': 'application/json, text/html',
    },
    credentials: 'include',
  })
  .then(data => data.json())
  .then((data) => {
    setImage('http://localhost:3500/' + data.image)
    console.log(image)
  });
})



  return(
    <div>
      <input type="file" name="image" accept="image/*" multiple={false} onChange={imageHandler} />
      {image && <img src={image} alt="img"/>}
    </div>
  )
}

export default Password








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