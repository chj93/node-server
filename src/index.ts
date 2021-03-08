import express from 'express';
import router from "./router";
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser());
app.get('/api/hello', (req, res) => {
  res.send('hello world');
});

app.use('/api', router);


app.listen(8000, () => {
  console.log('server is listening 8000');
});