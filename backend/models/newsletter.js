const mongoose = require('mongoose');


const NewsletterSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Newsletter = mongoose.model('newsletter', NewsletterSchema);

module.exports = Newsletter;