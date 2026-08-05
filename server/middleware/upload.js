const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({

    destination: function(req,file,cb){
        cb(null,"uploads/");
    },

    filename:function(req,file,cb){

        cb(
            null,
            Date.now() +
            path.extname(file.originalname)
        );

    }

});

const fileFilter=(req,file,cb)=>{

    const allowed=[
        "image/png",
        "image/jpeg",
        "image/jpg"
    ];

    if(allowed.includes(file.mimetype)){
        cb(null,true);
    }else{
        cb(new Error("Only Images Allowed"),false);
    }

};

const upload=multer({

    storage,
    fileFilter

});

module.exports=upload;