const QRCode = require('qrcode');

const generateQR = async text => {
    try {
        return await QRCode.toString(text);

    } catch (err) {
        console.log(err);
    }
}

(async () => {
    const qr = await generateQR('https://www.google.com');
    console.log(typeof(qr));
})();
