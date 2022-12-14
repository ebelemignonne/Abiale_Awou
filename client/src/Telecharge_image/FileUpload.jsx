import React, { useState } from 'react'
import axios from 'axios';
 
function FileUpload(){
 
      const [file, setFile] = useState();
      const [fileName, setFileName] = useState("");
 
      const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };
 
      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
          const res = await axios.post(
            "http://localhost:5000/upload",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
 

      return (
        <div className="App">
          <input type="file" onChange={saveFile} />
          <button onClick={uploadFile}>Upload</button>
        </div>
      );
    }

 
export default FileUpload;