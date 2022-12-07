const router = require("express").Router();
// const sendMail = require('../utils/mail')
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const {
  certificates,
  portfolio,
  testimonials,
  resume,
  about,
  socmed,
} = require("../data");

// root
router.get("/", (req, res) => {
  res.render("index", {
    certificates,
    portfolio,
    testimonials,
    resume,
    about,
    socmed,
  });
});

// contact
router.post("/contact", (req, res) => {
  const { name, email, subject, text } = req.body;
  const output = `
        <p> You Have New Message</p>
        <h3> Contact Details </h3>
        <ul>
            <li>
                Name: ${name}
            </li>
            <li>
                Email: ${email}
            </li>
            <li>
                Subject: ${subject}
            </li>
        </ul>
        <h3>Message</h3>
        <p>${text}</p>
    `;
  const to = "nikhsan417@gmail.com";
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    })
  );
  const mailOptions = {
    from: email,
    to,
    subject: `PORTFOLIO CONTACT | ${subject}`,
    html: output,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.redirect("/");
});
module.exports = router;
