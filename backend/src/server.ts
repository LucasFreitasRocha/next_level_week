import express, { json } from 'express'

const app = express();

app.get('/', (req, res) =>{
    console.log('hello world!')
    res.json({ nlw: 'hello world teste!'})
});

app.listen(5759);