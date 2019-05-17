const router = require('express').Router();
const Email = require('../config/email');

router.get('/prueba', (req, res) => {

    let message = {
        to: 'xxxxxx.com',
        subject: 'Email de prueba hbs',
        template: 'email',
        context: {
            title: 'Email de pruebas',
            text: 'Enviamos una prueba por handlebars'
        },
        attachments:[
            {
                filename: 'text1.txt',
                content: 'Hello World!'
            }
        ]
    }
    
    Email.transporter.sendMail(message,(error,info) => {
        if(error){
            return res.status(500).send(error);
        } else {
            Email.transporter.close();
            res.status(200).send('Respuesta "%s"' + info.response);
        }
    });
});

module.exports = router;