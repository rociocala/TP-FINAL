const mongoose = require('mongoose');
const URI = 'mongodb+srv://rociocala:navidad2022@clusterfinal.ar3n235.mongodb.net/proyectobdFinal';
//const URI ='mongodb://localhost/proyectodbFinal';
mongoose.connect(URI)
.then(db=>console.log('DB is connected'))
.catch(err=>console.error(err))
module.exports = mongoose;
