import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/index';
import { notFound } from './middlewares/notFound.middleware';
import { DeidadRepository } from './deidad/deidad.repository.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', router);
app.use(notFound);



export default app;

const repository = new DeidadRepository;



app.get('/api/deidades', (req, res) => {
    res.json({ data: repository.findAll() })
});

