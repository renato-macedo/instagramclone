const express =  require('express');
const multer =  require('multer');
const uploadConfig =  require('./config/upload');
const PostController =  require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
require('dotenv').config()

const routes =  new express.Router();
const upload =  multer(uploadConfig);

//  Method: GET
//  Description: Home
routes.get('/', (req, res)=>{
    res.send('Home');
})

//  Method: GET
//  Description: Retrieve posts
routes.get('/posts', PostController.index);


//  Method: POST
//  Description: Create a new post 
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.addLike);






module.exports = routes;