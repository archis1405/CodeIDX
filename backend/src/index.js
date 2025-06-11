import express from 'express';
import cors from 'cors';
import apiRouter from './routes/index.js';

import {PORT} from './config/serverConfig.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/api', apiRouter);


app.get('/ping', (req, res) => {
  return res.json({message : 'Server is running'});
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});