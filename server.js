const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3000;
const fs = require('fs');
require('dotenv').config();
const bodyParser = require('body-parser');

//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoURI = process.env.MONGO_URI;

//connection to database
mongoose.connect(mongoURI)
    .then(() => console.log('connected to Mongodb'))
    .catch(err => console.error('error catches: ', err));

app.listen(port);

//define user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const Users= mongoose.model('Users', userSchema);

//login
app.get('/singup', (req,res) => {
    fs.readFile('public/singup.html', 'utf-8', (err, data) => {
     if(err){
         console.error(err);
         console.log("404 errror not found");
         return;
     }
     res.send(data);
    });
 });

app.get('/users', (req, res) => {
    User.find({})
        .then(users => res.send(JSON.stringify(users)))
        .catch(err => res.status(500).json({ message: err.message }));
});


app.post('/users', (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    user.save()
        .then(newUser => res.json(newUser))
        .catch(err => res.json({ message: err.message }));
});

//update 
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updateData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    User.findByIdAndUpdate(userId, updateData, { new: true })
        .then(updatedUser => {
            if (!updatedUser) {
                return res.status(404).json({ message: 'user not found' });
            }
            res.json(updatedUser);
        })
        .catch(err => res.status(500).json({ message: err.message }));
});


//delete

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

    User.findByIdAndDelete(userId)
        .then(deleteUser => {
            if (!deleteUser) {
                return res.json({ message: 'user not found' });
            }
            res.json({ message: 'user deleted succesfully' });
        })
        .catch(err => res.json({ message: err.message }));

});