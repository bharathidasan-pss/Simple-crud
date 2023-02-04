//middle ware packege
const multer=require('multer')

const upload=multer(
    {
        storage:multer.diskStorage({
            destination:(req,file,cb)=>{
                cb(null,"image")
            },
            filename:(req,file,cb)=>{
                cb(null,`${Date.now()}-${file.originalname}`)
            }            
        })
    }
)

module.exports=upload