
const mongoose = require('mongoose');

(async ()=>{
    await mongoose.connect('mongodb://localhost:27017/academic', 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
})()


module.exports = {
    Course: require('./Course')
}