const express=require('express')
const app=express()
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes=require('./routes/userRoutes')

app.use(cors())
app.use(express.json());
app.use(bodyParser.json())

app.use('/api/users', userRoutes);

app.listen(5000,()=>{
    console.log('started in 5000')
})