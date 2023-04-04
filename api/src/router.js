const express = require('express');
const router = express.Router();
const multer = require('multer');

function filename(request, file, callback ) {
    callback(null , file.originalname)
}

const storage = multer.diskStorage({
    destination: 'api/uploads/',
    filename: filename()
})

function fileFilter(request, file, callback) {
    if(file.mimetype != 'image/png') {
        request.fileValidationError = 'Wrong file type';
        callback(null, false, new Error({
            message: 'Wrong file type'
        }))
    } else {
        callback(null, true)
    }
}

const upload = multer({
    fileFilter: fileFilter(),
    storage: storage
})

router.post('/upload', upload.single('photo'), (request, response)=>{
    if(request.fileValidationError) {
        response.status(400).json({
            error: request.fileValidationError
        })
    }
    response.status(201).json({
        success: true
    })
})


module.exports = router ;