import Product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";

export const getProducts = async(req, res)=>{
    try {
        const response = await Product.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getProductById = async(req, res)=>{
    try {
        const response = await Product.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveProduct = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const nom = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extnom(file.nom);
    const fileNom = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileNom}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileNom}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Product.create({nom: nom, image: fileNom, url: url});
            res.status(201).json({msg: "Product Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const updateProduct = async(req, res)=>{
    const product = await Product.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileNom = "";
    if(req.files === null){
        fileNom = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extnom(file.nom);
        fileNom = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileNom}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const nom = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileNom}`;
    
    try {
        await Product.update({nom: nom, image: fileNom, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Product Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProduct = async(req, res)=>{
    const product = await Product.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await Product.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}