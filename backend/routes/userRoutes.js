
const express = require('express');
const app=express()
const db = require('../db');

const router = express.Router();


router.post('/add', (req, res) => {

    const { name, email } = req.body;
   

    
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required' });
    }

    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    console.log('query',query);
    db.query(query, [name, email], (err, result) => {
        if (err) {
            console.error('Database error:', err); 
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('ERROR CREATING',result)
        res.status(200).json({ message: 'User added successfully' });
    });
});

router.get('/show',(req,res)=>{
try {
    const query='SELECT * FROM users'
    db.query(query,(err,result)=>{
        if (err) {
            console.error('Database error:', err); 
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('success');
        res.status(200).json({data:result})
    })
    
} catch (error) {
    
}
})



module.exports = router;
