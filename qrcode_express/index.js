import path from 'path'
import express from 'express';
import { toDataURL } from 'qrcode';

const app = express();
const __dirname = "/home/arsenal/workspace/coders.dev/qrcode_express";

const port = "8000"
toDataURL('I am a pony!', function (err, url) {
    console.log(url)
})

app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/qrcode', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})