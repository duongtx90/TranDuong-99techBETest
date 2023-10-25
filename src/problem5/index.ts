import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import blogRoutes from './routes/blogs.route';
dotenv.config();
import {connect} from './models'

connect();
const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/blogs", blogRoutes)



app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});