const mongoose = require('mongoose');
const db = require('./models');


// db.Course.find().then(courses =>{
//     console.log(courses)
//     process.exit();
// });

(async ()=>{
    try {
        let courses = await db.Course.find();
        console.log(courses)
        
    } catch (error) {
        
    }
    process.exit();    
})()


