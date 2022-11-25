import express from "express";
import FileUpload from "express-fileupload";
import ProductRoute from "./routes/ProductRoute.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();



app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);


 
app.listen(5000, ()=> console.log('Server running at port 5000'));









/****************************************************PARAMETRES GENERAUX***************************************************/ 
// const express = require('express')
// const mysql = require('mysql')
// const multer = require('multer')
// const path = require('path')
// const cors = require("cors");
// const bodyParser = require('body-parser');

// const app = express()



// const PORT = 3500;


//use express static folder
// app.use(cors());
// app.use(express.static("./public"))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use('/', express.static(path.join(__dirname, '/')));


// Database connection


// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password:"",
//     database: "abiale_awou"
// });

// db.connect(function (err) {
//   if (err) {
//       return console.error('error: ' + err.message);
//   }
//   console.log('Connecté a la base de données Mysql.');
// })

/*****************************************DEBUT PARAAMETRES DE LA TABLE IMAGES********************************************* */
// ! Use of Multer
// ! Use of Multer



// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//       cb(null, './images/');
//     },     // './public/images/' directory name where save the file
//   filename: function(req, file, cb){
//       const ext = file.mimetype.split("/")[1];
//       cb(null, `uploads/${file.originalname}-${Date.now()}.${ext}`);
//   }
// });

// const upload = multer({
//   storage: storage
// });



// CORS



// app.use(cors({
//     origin: true,
//     methods: ["GET", "POST"],
//     credentials: true,
// }));

// app.post("/api/image", upload.single('image'),(req, res, err) => {

//   if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {

//     res.send({ msg:'Only image files (jpg, jpeg, png) are allowed!'})};

//     const image = req.file.filename;
//     const id =1

//     const sqlInsert = "UPDATE images SET `image` = ? WHERE id = ?;"
//     db.query(sqlInsert, [image, id] , (err, result) => {
//       if(err){
//         console.log(err)
//         res.send({
//           msg: err
//         })
//       };
//         if(result){

//           res.send({
//             data: result,
//             msg: 'Your image has been updated'
//           });
//         }
//       });
    
//     });


    // route get

    
// app.get("/api/image", (req, res) => {

//   const id = 1;

//   const sqlInsert = "SELECT * FROM images WHERE id =?;"

//   db.query(sqlInsert, [id] , (err, result) => {

//     if(err) {
//       console.log(err)
//       res.send({
//           msg: err
//       })
//     }

//     if(result) {

//       res.send({
//         image: result[0].image,
//       });
//     }
//   });
// })





// @type   POST
// route for post data
// app.post("/upload", upload.single('image'), (req, res) => {
//   if (!req.file) {
//       console.log("No file upload");
//   } else {
//       console.log(req.file.filename)
//       var imgsrc = 'http://127.0.0.1:3500/images/' + req.file.filename
//       var insertData = "INSERT INTO images(file_src)VALUES(?)"
//       db.query(insertData, [imgsrc], (err, result) => {
//           if (err) throw err
//           console.log("file uploaded")
//       })
//   }
// });
/***********************************************FIN PARAMETRES TABLE IMAGES***************************************** */





/***********************************************DEBUT PARAMETRES TABLE NAISSANCE***************************************** */
// app.get("/", (req, res) => {
//   res.send("Hello world");
// }); 

// //Selectionne toutes les information de la table naissance
// app.get('/api/getAll/naissance', (req, res) => {
//   db.query("SELECT * FROM naissance", (err, result) => {
//     if (err) res.status(500).send("probleme" + err);

//     res.status(200).json(result);
//   });
// });


//Selection un seul acte de la table naissance



// app.get("/api/getOnenaissance/:id", (req, res) => {
//   db.query(
//     "SELECT * FROM naissance WHERE id_naissance = ?",
//     [req.params.id_naissance],
//     (err, result) => {
//       if(err) res.status(500).send("probleme" + err);
      
//       res.status(200).json(result);
//     }
//     );
//   });

  
  // ajout d'un acte de naissance dans la table naissance
// app.post("/api/naissance", (req, res) => {
//      const {id_naissance, nom, image} = req.body;
     
//      if(!nom || !image){
//        res.status(400).json({error: "merci de remplir les champs manquant"})
//       }
      
//       db.query(
//         "INSERT INTO naissance VALUES(NULL,?,?)",
//         [nom, image, id_naissance],
//         (err, result) => {
//           if(err){
//             res.status(400).json({error: err.message})
//             return
//           }
//           res.status(201).json({message: "Acte ajputé avec succes!"});
//         }
//   );
// });
/***********************************************FIN PARAMETRES TABLE NAISSANCE***************************************** */




/***********************************************DEBUT PARAMETRES TABLE UTILISATEURS***************************************** */
// app.get("/", (req, res) => {
//   res.send("Hello world");
// }); 

//Selectionne toutes les information de la table utilisateurs
// app.get('/api/getAll/utilisateurs', (req, res) => {
//   db.query("SELECT * FROM utilisateurs", (err, result) => {
//     if (err) res.status(500).send("probleme" + err);

//     res.status(200).json(result);
//   });
// });


//Selection un seul  utilisateur
// app.get("/api/getOne/utilisateurs/:id", (req, res) => {
//   db.query(
//     "SELECT * FROM utilisateurs WHERE id_utilisateur = ?",
//     [req.params.id_utilisateur],
//     (err, result) => {
//       if(err) res.status(500).send("probleme" + err);
      
//       res.status(200).json(result);
//     }
//     );
//   });

  
  // ajout d'un de utilisateurs dans la table utilisateurs
// app.post("/api/posteOne/utilisateurs", (req, res) => {
//      const {id_utilisateur, nom, prenom, tel, email, password} = req.body;
     
//      if(!nom || !prenom || !tel || !email || !password){
//        res.status(400).json({error: "merci de remplir les champs manquant"})
//       }
      
//       db.query(
//         "INSERT INTO utilisateurs VALUES(NULL,?,?,?,?,?)",
//         [nom, prenom, tel, email, password, id_utilisateur],
//         (err, result) => {
//           if(err){
//             res.status(400).json({error: err.message})
//             return
//           }
//           res.status(201).json({message: "Acte ajputé avec succes!"});
//         }
//   );
// });













//create connection
// const PORT = process.env.PORT || 3500
// app.listen(PORT, () => console.log(`Serveur connecté au port: ${PORT}`))



