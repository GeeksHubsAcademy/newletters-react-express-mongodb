const express = require('express');
const router = express.Router();

const app = express();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.post( '/subscribe', (req, res) => {
  const email = req.body;

  if(!email){
    res.status(400).send('Invalid email')
  } else {
    res.status(200).send('Successful registration')
  }
});





module.exports = router;
