import express from 'express'

const routes = express.Router();

routes.get('/', (req, res) =>{
    console.log('hello world!')
    return res.json({ nlw: 'hello world teste!'})
});
routes.post('/' ,(req, res)=>{
    const data = req.body;
    return res.json({
       name: data.nome,
       email: data.idade,
       cargo: data.cargo
    })
})

export default routes;