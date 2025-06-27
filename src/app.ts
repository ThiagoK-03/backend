import express, {Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/index';
import { notFound } from './middlewares/notFound.middleware';
import { DeidadRepository } from './deidad/deidad.repository.js';
import { Deidad } from './deidad/deidad.entity';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', router);
app.use(notFound);

app.listen(3000, ()=> {
    console.log("Server running on http://localhost:3000/")
})

export default app;

const deidadRepository = new DeidadRepository;

function sanitizeDeidadInput(req:Request, res:Response, next: NextFunction){

    req.body.sanitizedInput = {
        name: req.body.name,
        descripcion: req.body.descripcion,
        elemento: req.body.elemento,
    }
}

app.get('/api/deidades', (req, res) => {
    res.json({ data: deidadRepository.findAll() })
});

app.get('/api/deidades/:id',(req,res)=>{
    res.json({ data: deidadRepository.findOne({id:req.params.id})})
})

app.post('/api/deidades', sanitizeDeidadInput, (req, res) =>{
    const input = req.body.sanitizeDeidadInput;

    const deidadInput = new Deidad(
        input.nombre,
        input.descripcion,
        input.elemento
    )

})


