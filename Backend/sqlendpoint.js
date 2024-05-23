const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { log } = require("console");

const app = express();
const port = 8000;


app.use(cors());

const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
//   password: 'prajval',
  database: 'dataset',
  port: 3306 
});

db.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("MySQL connected");
});



app.get('/api/employees/yearwise/:year',async(req,res) =>{
  console.log(req.params.year);
  const sqlq = `select job_title,count(job_title) as total_jobs from employee where work_year =${req.params.year}  group by job_title`
  db.query(sqlq,(err,result)=>{
    if (err) {
      throw err;
    }
    res.json(result);
  })




app.get('/api/employees/:field/:flag', async(req, res) => {
  // console.log(req.params.flag);
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


})


app.get('/api/employees/avg-salary', (req, res) => {
    const sql = 'SELECT AVG(salary) AS avg_salary FROM employee';
    db.query(sql, (error, result) => {
      if (error) {
        throw error;
      }
      res.json(result[0]);
    });
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
