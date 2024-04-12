import express from 'express';
import mongoose, { mongo } from 'mongoose';
const app = express();

mongoose.connect('mongodb://localhost/firstapi');

app.use(express.json());

app.get('/', (req, res) =>{
    res.send("Olá");
});

app.listen(3000, () => {
    console.log("Server is listening 🔥");

});