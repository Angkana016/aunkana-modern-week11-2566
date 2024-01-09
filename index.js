const express = require('express')
const app = express()

//http://localhost:3000/
app.get('/',(rep,res)=>{
    res.send('Home Page')
})
//http://localhost:3000/about
app.get('/About',(rep,res)=> {
    rep,send('About Page')
    
})

const port = 3000
app.listen(3000,function (){   
    console.log(`Server running at http://localhost:${port}`);
});
    