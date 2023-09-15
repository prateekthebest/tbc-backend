import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use(morgan('combined')); // HTTP request logging
app.use(helmet()); // Security headers
app.use(compression()); // Response compression

// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

export default app;
