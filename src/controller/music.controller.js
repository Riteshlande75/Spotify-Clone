const musicModel = require("../models/music.model");
const jwt = require("jsonwebtoken");
const {uploadFile} = require("../services/storage.service")

async function createMusic(req , res) {
    

     const token = req.cookies.token;

     if(!token){

        return res.status(401).json({message:"Unauhtorized"})
     }
 try {

 
   const decoded = jwt.verify(token,process.env.JWT_SECRET)

   if (decoded.role !== "artist"){
    return res.status(403).json({message: "you dont have access to create a music"})
   }
 } 
 catch(err){
 return res.status(401).json({message:"Unauhtorized"})
 }
  
const { title } = req.body;
const file = req.file;

if (!file) {
  return res.status(400).json({ message: "Audio file is required (multipart field name: file)" });
}

const result = await uploadFile(file.buffer.toString('base64'))


const music = await musicModel.create({
    uri: result.url,
    title,
    artist : decoded.id,
})
 

res.status(201).json({
    message:"Music created successfullly",
    music:{
        id:music._id,
        uri: music.uri,
        title: music.title,
        artist: music.artist,
    }

})
}

module.exports = {createMusic}  