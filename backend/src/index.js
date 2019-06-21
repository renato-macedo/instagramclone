const express =  require('express');
const mongoose  =  require('mongoose');
require('dotenv').config()
const routes =  require('./routes');
const path = require('path');
const cors = require('cors');
const config = require('./config/config.json');
const app =  express();

const server = require('http').Server(app);
const io = require('socket.io')(server);


mongoose.connect(`${ process.env.MONGO_CONNECTION || config.MONGO_CONNECTION }`,{ useNewUrlParser: true });

// Make io available on every route
app.use((req, res, next) => {
    
    req.io = io;

    // Ensures that every route or middleware coming after this will be executed
    next();
})

// CORS
app.use(cors());

// Provides static files
app.use('/images',express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

// Routes
app.use(routes);

const port = process.env.PORT || config.PORT;
server.listen(port, ()=> console.log(`Servidor rodando na porta ${port}`));