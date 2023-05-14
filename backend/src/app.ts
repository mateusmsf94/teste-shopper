import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
