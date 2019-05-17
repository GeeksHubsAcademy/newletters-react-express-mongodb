const NodeMailer = require('nodemailer');
const Hbs = require('nodemailer-handlebars');
const Path = require('path');

const Email = {};

Email.transporter = NodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xxxx@gmail.com',
        pass: 'xxxxxxx'
    },
    tls: {
        rejectUnauthorized: false
    }
},{
    from: 'xxxxxxx@gmail.com',
    headers: {}
});

Email.transporter.use('compile', Hbs({
    viewEngine: 'hbs',
    extName: '.hbs',
    viewPath: Path.join(__dirname, '../views/email-templates')
}));



module.exports = Email;