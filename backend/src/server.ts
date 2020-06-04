import express, { json } from 'express'
import routes from './routes'

const app = express();
app.use(express.json());  
app.use(routes);

app.listen(5759);