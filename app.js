import express, { Router } from 'express';
import urlrouter from './routes/url.js';
export const app = express();
app.use(express.json());
app.use('/api/v1/',urlrouter);