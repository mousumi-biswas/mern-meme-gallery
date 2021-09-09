const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUpload,
     getallSingleFiles,remove} = require('../controllers/fileuploaderController');
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.delete('/singleFile/:_id',  remove)



module.exports = {
    routes: router
}