import express, { Request, Response } from 'express';
import cors from 'cors';
import ProductController from './controllers/productsController';
import ProductService from './services/productsService';
import Product from './database/models/productsModel';
import Pack from './database/models/packModel';
import productsRouter from './routes/productsRoute';
import packsRouter from './routes/packRoute';

const app = express();

const productService = new ProductService(Product, Pack);
const productController = new ProductController(productService);

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/products', productsRouter(productController));
app.use('/packs', packsRouter(productController));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});