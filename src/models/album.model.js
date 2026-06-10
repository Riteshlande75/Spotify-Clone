const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({

    title:{
        type:String,
        require: true,
    },

    music:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "music"
    }],

    artist : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true,
    }
})

const ablumModel = mongoose.model("album",albumSchema)

module.exports = ablumModel;