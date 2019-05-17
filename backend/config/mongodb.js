const mongoose = require('mongoose');
// console.log(process.env.PORT);
const{HOST,PORT,DB}=process.env.MongoDB//desestructuro la variable MongoDB de process.env
mongoose.Promise = global.Promise;
//protocolo host y base de datos
mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`,{useNewUrlParser:true});

module.exports=mongoose;