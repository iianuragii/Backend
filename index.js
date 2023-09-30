const app = require('express')();
const query = require('./nodemongo');

const PORT = 5080;

app.listen(PORT,() =>{
     console.log(`Server running on ${PORT}`)
});

app.get('/', (req,res)=>{
    res.send(p)
});
console.log(query.p)
console.log(col)

app.get('/fool', (req,res)=>{
    res.send("Hiii Your fooled")          
});
