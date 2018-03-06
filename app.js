'use strict';
const fs = require('fs');
const nodemailer = require('nodemailer');
const config = require('./userConfig'); 

// QQ邮箱需要一个授权码，其余邮箱用邮箱密码
let transporter = nodemailer.createTransport(config);

fs.writeFile('text2.txt', 'Hello Node.js', 'utf8', (error) => {
    if (error) throw error;
})

let mailOptions = {
    from: '"admin" <397605307@qq.com>',
    to: '2200395475@qq.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>',
    attachments: [{
        filename: 'text2.txt',
        content: fs.readFileSync('text2.txt', 'utf-8')
    }]
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    console.log('Message sent: %s', info.messageId);
});