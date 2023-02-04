const express = require('express');
const db = require('./db')
const upload = require('./multer');
const app = express();


app.get('/', (req, res) => {
    res.send("hi bharathidasan it working time so wakeup")
});

app.post('/insert',upload.array('images',1), (req, res) => {


    const { sno, name, email, password, job } = req.body

  //  console.log(sno, name, email, password, job);

    const emp_image = req.files.filename;

    // console.log(emp_image);
    // console.log(req.file);

    db.query('insert into emp(name,email,password,emp_image,job) values(?,?,?,?,?)', [name, email, password, emp_image, job], (err, result) => {
        if (err) {
            return res.send({
                message:err
            })
        }else{

            return res.send({
                message:"Created Emp Successfully"
            })
        }
        

    })

});

app.get('/get', (req, res) => {

    db.query('select * from emp', (err, result) => {
        if (err){
            return res.send({
                message:err,
            })
        } else{
         return res.send({
            message:"successfully",

            result:result
         })
        }
        console.log(result);
    })
});

app.put('/update', upload.single("images"), (req, res) => {
    
    const { sno, name, email, password, job } = req.body
    
    const emp_image = req.file.filename;

    //console.log(emp_image);

    db.query('update emp set name=?,email=?,password=?,emp_image=?,job=? where sno=?',[name,email,password,emp_image,job,sno],(err,result)=>{
        if(err) {
            res.send({
                status:"not work"
            })
        }else{
            res.send({
                status:"successfuly",
                result
            })
        }
    })
});

app.delete('/delete', (req, res) => {

    const sno = req.body.sno
    console.log(sno);

    db.query('delete from emp where sno=?', [sno], (err, result) => {

        if (err) {
            res.send({
                status:"not work"
            })
        }else{
            status:'successfully',
            result
        }
            })

});

app.listen(3000, () => {
    console.log("server hosted in localhost:3000");
});