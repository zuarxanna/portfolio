const router = require('express').Router();
// const sendMail = require('../utils/mail')
const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
// root
router.get('/', (req, res) => {
    res.render('index');
});

// contact
router.post('/contact', (req, res) => {
    const auth = {
        auth: {
            api_key: 'e68994af7ab3ef8951228e9731f3ecec-7005f37e-83c3eb28',
            domain: 'sandbox9176b6a6a141463da3ae141181485af5.mailgun.org'
            
        }
    }
    const transporter = nodemailer.createTransport(mailgun(auth));

    const mailOptions = {
        from: req.body.email,
        to: 'nikhsan417@gmail.com',
        subject: req.body.subject,
        text: `Hi, I'am ${req.body.name}, ${req.body.text}`
    };

    transporter.sendMail(mailOptions, (err, data) => {
        err ? console.log(err) : res.redirect('/');
    })
})
module.exports = router;