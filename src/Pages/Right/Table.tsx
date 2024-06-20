
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Detailedtable from './Detailedtable'
interface Employee {
  work_year: number;
  total_jobs: number;
  avg: number;
}

function Table() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [avgSal, setAvgSal] = useState(0);
  const [totalJobs, setTotalJobs] = useState(0); 
  const [indicator, setindicator] = useState(false); 
  const [currentyear, setcurrentyear] = useState(0); 

  const [flag1, setflag1] = useState(true)
  const [flag2, setflag2] = useState(true)
  const [flag3, setflag3] = useState(true)


  useEffect(() => {
    axios.get<Employee[]>('http://localhost:8000/api/employees/work_year/true')
      .then(response => {
        setEmployees(response.data);
        if (response.data.length > 0) {
          const totalSalary = response.data.reduce((acc, curr) => acc + curr.avg, 0);
          const totalJobCount = response.data.reduce((acc, curr) => acc + curr.total_jobs, 0);
          const averageSalary = totalSalary / response.data.length;
          setAvgSal(parseFloat(averageSalary.toFixed(2))); // Rounded to 2 decimal places
          setTotalJobs(totalJobCount);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  function handleclick(index:number){
     setindicator(true)
     console.log(index);
     
     setcurrentyear(employees[index].work_year);
  } 
  console.log(currentyear)



  function handlesort(feature:string,flag:boolean){
    // console.log(flag1);

    axios.get<Employee[]>(`http://localhost:8000/api/employees/${feature}/${flag}`)
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
    
  }


  return (
    <div className='flex gap-16'>
    <div className='mt-4 bg-gray-50 p-6 rounded-lg shadow-md'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gradient-to-r from-blue-600 to-green-500 text-white'>
          <tr >
            <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-medium uppercase tracking-wider' onClick={()=>{handlesort("work_year",flag1);setflag1(!flag1)}}>Year</th>
            <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-medium uppercase tracking-wider' onClick={()=>{handlesort("total_jobs",flag2);setflag2(!flag2)}}>Total Jobs of Year</th>
            <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-medium uppercase tracking-wider' onClick={()=>{handlesort("avg",flag3);setflag3(!flag3)}}>Average Salary of Year</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {employees.map((element, index) => (
            <tr onClick={()=>handleclick(index)} key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition duration-300 ease-in-out`}>
              <td className='px-6 py-4 border border-gray-300'>{element.work_year}</td>
              <td className='px-6 py-4 border border-gray-300'>{element.total_jobs}</td>
              <td className='px-6 py-4 border border-gray-300'>{element.avg}</td>
            </tr>
          ))}
          <tr className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold'>
            <td className='px-6 py-4 border border-gray-300'>Total</td>
            <td className='px-6 py-4 border border-gray-300'>{totalJobs}</td>
            <td className='px-6 py-4 border border-gray-300'>{avgSal}</td>
          </tr>
        </tbody>
      </table>

    </div>
        
      {/* <Vis url={"https://public.tableau.com/views/cinemaviz/Sheet3?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link"}/> */}
        
      {indicator&&<Detailedtable year={currentyear}/>}
    </div>
  );
}

export default Table;
