const mysql=require('mysql')

let db=mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"Root",
    database:'crud'
})
db.connect((err)=>{
    if(err) throw err;
    // console.log("Database crud connected ");
})


module.exports=db