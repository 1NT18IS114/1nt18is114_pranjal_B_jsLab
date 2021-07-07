const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.status(200).send("<h2>heyyy</h2>")
})
app.post('/api/staff',(req,res)=>{
        res.status(200).send(req.body)
        console.log(req.body);
        
})


app.listen(port,()=>{
    console.log(`listning the port: ${port}`)
})