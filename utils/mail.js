const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'e68994af7ab3ef8951228e9731f3ecec-7005f37e-83c3eb28',
        domain: 'sandbox9176b6a6a141463da3ae141181485af5.mailgun.org'
        
    }
}

const transporter = nodemailer.createTransport(mailgun(auth));

const mailOptions = {
    from: 'firdaus.husna@gmail.com',
    to: 'nikhsan417@gmail.com',
    subject: 'testing',
    text: 'is it works ?'
};

transporter.sendMail(mailOptions, (err, data) => {
    if(err) return console.log(err);
    console.log('Message Sent')
});