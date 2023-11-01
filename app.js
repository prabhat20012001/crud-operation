
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const userModel=require("./users")  
const cors=require("cors")
app.use(bodyParser.json());
app.use(cors())






//======================== crete user ========================
app.post("/createuser",async(req,res)=>{
    try {
        const bodyData=req.body

        // console.log(bodyData)
        const user=new userModel(bodyData)
        const userData=await user.save()
        res.send(userData)
    } catch (error) {
        res.send(error)
        
    }
})

// =========================read all user =========================

app.get("/getalluser",async(req,res)=>{
    try {
        const userData= await userModel.find({})
        res.send(userData)
    } catch (error) {
        res.send(error)
    }
})


// ======================read one user====================

app.get("/read/:id",async(req,res)=>{
    try {
        const id=req.params.id
        let oneUser= await userModel.findById(id)
        res.send(oneUser)
    } catch (error) {
        res.send(error)
    }
  
})

// ==================Update-user==================
app.put("/updateUser/:id",async(req,res)=>{
    try {
        let id=req.params.id
        // console.log(req.body)
const user=await userModel.findByIdAndUpdate({_id:id},req.body,{new:true})
res.send(user)
    } catch (error) {
        res.send(error)

    }
})

// =============delete user====================
    app.delete("/delete/:id",async(req,res)=>{
        try {
            let id=req.params.id
        const user=await userModel.findByIdAndDelete(id) 
      
         res.send(user)
        } catch (error) {
        
    }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});












