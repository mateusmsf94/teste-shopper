import express, { Request, Response } from 'express';
import cors from 'cors';
import priceUpdaterRoute from './routes/priceUpdaterRoute';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/priceUpdater', priceUpdaterRoute)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
