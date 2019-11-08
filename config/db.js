const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'ct'
});

// module.exports.setConnection = function(){
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             connection.connect(function(err){
//                 if(!err){
//                     console.log('Database is connected...');
//                     resolve("1");
                    
//                 } else {
//                     console.log('error connecting database');
//                     reject(new Error('Database not connected!'));
                    
//                 }
//             });
        
         
//         }, 2000);
//       }); 
// }





module.exports = {
    connection
}