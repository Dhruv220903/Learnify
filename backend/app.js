import express from 'express';
import bodyParser from 'body-parser';
import UserRouter from './routers/user.router.js';
import cors from 'cors';

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({
    origin: '*',
}));

app.use('/user', UserRouter);

app.get('/', (req, res) => {
    res.status(500).send('hi');
});


app.listen(4000, () => {
    console.log('Server running on port 4000');
});
