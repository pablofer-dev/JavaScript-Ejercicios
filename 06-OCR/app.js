const express = require('express');
const { resolve } = require('path');
const path = require('path');
const worker = require('tesseract.js');
const multer = require('multer')
const fs = require("fs");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        urlDestination = path.join(__dirname, 'uploads')
        fs.mkdirSync(urlDestination, { recursive: true })
        cb(null, urlDestination)
    },
    filename: function (req, file, cb) {
        var rightNow = new Date();
        var res = rightNow.toISOString().slice(0, 10).replace(/-/g, "");
        cb(null, res + ' - ' + file.originalname)
    }
})

const upload = multer({ storage: storage })
const app = express();

app.set('port', process.env.PORT || 3000)
app.use(express.static(path.join(__dirname, 'public')))

app.post('/file', upload.single('file'), async function (req, res) {
    let resultIMG = await name(path.join(__dirname, 'uploads', req.file.filename))
    let textResolve = resultIMG.data.text;
    res.send(`<h1>${textResolve}</h1>`)
});
const server = app.listen(app.get('port'), () => {
    console.log('Conectado al puerto: ' + app.get('port'));
})
async function name(file) {
    return worker.recognize(file, 'eng', { logger: e => { console.log(e); } })
}