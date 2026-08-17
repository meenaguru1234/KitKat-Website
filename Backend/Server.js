const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
const dotenv = require("dotenv")
dotenv.config()
const BookDemoSchema = require("../Backend/Controller/Middleware/BookDemoSchema")
const contactschema = require("./Controller/Middleware/contactschema")
const cors = require("cors")
app.use(cors())


// Book Demo Class functions
app.get("/GetBookDemo", (req,res)=>{
   res.json({msg:"Server Created Successfully"})
    
})



app.post("/postBookDemo", async(req,res)=>{
    console.log(req.body);
   
    try {

        let { name, mob, email, selectcourse} = req.body

        const data = await new BookDemoSchema({
            ...req.body
        })

        const savedata = await data.save()
        res.status(200).json({msg:"Book Demo Class Data", savedata})




        
    } catch (error) {
        res.status(400).json({msg:"Server Error", error})
    }
    
})

// End ------------------------------------------------- Book Demo Class functions


// start ------------------------------------------------- Contact page form functions



app.post("/postContact", async(req,res)=>{
    console.log(req.body);
    
   
    try {

        let { name, mob,company, email, selectcourse,tellabout, agree } = req.body
        let existingEmail = await contactschema.findOne({ email: req.body.email });
    if (existingEmail) return res.status(400).json({ msg: "Email already used" });

    const data = new contactschema({
      ...req.body,
    });


      
        const savedata = await data.save()
        res.status(200).json({msg:"send msg to the company", savedata})




        
    } catch (error) {
        res.status(400).json({msg:"Server Error", error})
    }
    
})


app.get("/GetContact", async(req,res)=>{

    const getdata = await contactschema.find()
   res.json({msg:"Server Created Successfully", getdata})
    
})





mongoose.connect(process.env.DB)
. then(()=>{
    console.log("DB is Connected");
    
}).catch(()=>{
    console.log("DB is not connected");
    
})


app.listen(process.env.PORT , ()=>{
    console.log(`Server Running Port is : ${process.env.PORT}`);
    
})
