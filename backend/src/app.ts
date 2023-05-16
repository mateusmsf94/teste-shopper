import express, { Request, Response } from 'express';
import cors from 'cors';
import { Pool } from 'mysql2/promise';
import ProductController from './controllers/productsController';
import ProductService from './services/productsService';
import productsRoute from './routes/productsRoute';
import packsRoute from './routes/packRoute';
import pool from './database/config/db'; // Import the pool instance

const app = express();

const productService = new ProductService(pool);
const productController = new ProductController(productService);

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/products', productsRoute(productController));
app.use('/packs', packsRoute(productController));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
