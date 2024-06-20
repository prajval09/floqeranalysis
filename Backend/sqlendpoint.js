const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { log } = require("console");

require('dotenv').config()

const app = express();
// const process.env.PORT = 8000;


app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("MySQL connected");
});



app.get('/api/employees/yearwise/:year',(req,res) =>{
  console.log(req.params.year);
  const sqlq = `select job_title,count(job_title) as total_jobs from employee where work_year =${req.params.year}  group by job_title`
  db.query(sqlq,(err,result)=>{
    if (err) {
      throw err;
    }
    res.json(result);
  })
  
})



app.get('/api/employees/:field/:flag', (req, res) => {
  console.log(req.params.flag);
  const p = req.params.flag==="true"?"asc":"desc";
  const sql = `select work_year,count(work_year) as total_jobs,(salary) as avg from employee group by work_year order by ${req.params.field} ${p}`;
  // console.log(p);
  db.query(sql, (error, result) => {
    if (error) {
      throw error;
    }
    res.json(result);
  });
});




app.get('/api/employees/avg-salary', (req, res) => {
    const sql = 'SELECT AVG(salary) AS avg_salary FROM employee';
    db.query(sql, (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result[0]);
    });
  });

app.listen(8000, () => {
  console.log(`Server running on process.env.PORT ${process.env.PORT}`);
});



