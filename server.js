const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./server/models/userModel');
const routes = require('./server/routes/routes');

const app = express();

const PORT = process.env.PORT || 8080;

mongoose
    .connect('mongodb+srv://ilya:medik852456@cursachcluster.lht8y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useFindAndModify: false, useUnifiedTopology: true,  useNewUrlParser: true })
    .then(() => {
        console.log('Подключились к базе данных!');
    });

app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/', routes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('./front/build'))

    app.get('*', ((req, res) =>{
        res.sendFile(path.resolve(__dirname, 'front', 'build', 'index.html'))
    }))
}

app.listen(PORT, () => {
    console.log('Сервер загружен на порту: ', PORT)
})