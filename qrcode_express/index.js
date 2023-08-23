import path from 'path'
import express from 'express';
import { toDataURL } from 'qrcode';

const app = express();
const __dirname = "ABSOLUTE_PATH";

const port = "8000"

app.get('/qrcode', function (req, res) {
    const texto = req.query.texto

    //gera o qrcode em data url
    toDataURL(texto, function (err, url) {
        res.send(url);
    })
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
    console.log(`Serviço rodando na porta ${port}`)
})