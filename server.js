const { error } = require('console');
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'catdb',
});
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.get('/data', (req, res) => {
  pool.query('SELECT * FROM catinfo', (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
});
app.post('/v1/api/addcat',(req,res) =>{
    const {breed ,name} = req.body;
    pool.query('insert into catinfo(breed,name) values(?,?)',[breed,name],(error,results) =>{
 if(error){
    return res.status(500).json({ error: error.message });
return;
 }

 res.json({ message: 'Cat added successfully', id: results.insertId });

    });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
