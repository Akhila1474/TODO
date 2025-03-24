const express= require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const todoModel=require('./models/model.js');
const app=express();
const url='mongodb+srv://hny:123@akhi.fgsqn.mongodb.net/hny?retryWrites=true&w=majority&appName=akhi';
mongoose.connect(url)
.then((result)=>{console.log("created connection")
    app.listen('3001',()=>{console.log("server is running successfully"+" "+`http://localhost:3001`)});
})
.catch((err)=>{console.log(err+"failed to connect")})
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("WELCOME TO PAGEE");
})
app.get('/todos', (req, res) => {
    todoModel.find()  
        .then((result) => {
            console.log("Printing:", result);
            res.json(result);
        })
        .catch((err) => {
            console.error("Error fetching tasks", err);
            res.status(500).json({ error: "Failed to fetch tasks" });
        });
});
app.post('/add',(req,res)=>{
    try {
        // const {task} = req.params;  
        const task=req.body.task;
        const newTask = new todoModel({ task });
        // const result =  newTask.save();
       todoModel.create({task})
       .then((result)=>{
        console.log("Task added:", result);
        res.json(result)
       })
        
      } catch (error) {
        console.error("Failed to add task", error);
        res.json(error);
      }
})
app.put('/update/:id',(req,res)=>{
    todoModel.findById(req.params.id)
    .then((result)=>{
        result.done=true;
        result.save();
        res.send(result);
    })
    .then((result)=>{console.log("done put operation")})
    .catch((err)=>{console.log("put operation failed")})
    
})
app.delete('/remove/:id',(req,res)=>{
    todoModel.findByIdAndDelete(req.params.id)
    .then((result)=>{console.log("deleeted the request") 
        res.send(result)
    })
    .catch((err)=>{console.log("error of deleting")})
})
