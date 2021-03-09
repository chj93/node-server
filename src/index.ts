import express from 'express';
import router from "./router";
import bodyParser from 'body-parser';
import cors from 'cors';
const multer = require('multer');
const imageSavePath = './uploadTest';

const app = express();

//cors setting
app.use(cors());
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

const storage = multer.diskStorage({
  //파일저장경로
  destination(req, file, callback){
    callback(null, imageSavePath)
  },
  //저장되는 파일이름 형식 커스텀 가능
  filename(req, file, callback){
    callback(null, file.originalname)
  }
});

const upload = multer({storage : storage});

app.post('/upload',upload.single('upLoadImage'),async (req, res, next) => {
  console.log(req);
  console.log(res);
});

/*app.post('/upload', (req, res) => {
  res.send('POST request to the homepage');
  console.log(req);
  console.log(res);
})*/


app.use(bodyParser());
app.get('/api/hello', (req, res) => {
  res.send('hello world');
});

app.use('/api', router);


app.listen(8000, () => {
  console.log('server is listening 8000');
});