// import React from 'react'

// interface EmployeeDetailsProps {
//     year: number;
//   }
  
//   const Detailedtable: React.FC<EmployeeDetailsProps> = ({ year }) => {
//     return (
//     <div>
//         {year}
//         <div className='mt-20 bg-gray-50 p-6 rounded-lg shadow-md'>
//       <table className='min-w-full divide-y divide-gray-200'>
//         <thead className='bg-gradient-to-r from-blue-600 to-green-500 text-white'>
//           <tr>
//             <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-medium uppercase tracking-wider'>Year</th>
//             <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-medium uppercase tracking-wider'>Total Jobs of Year</th>
//             <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-medium uppercase tracking-wider'>Average Salary of Year</th>
//           </tr>
//         </thead>
//         <tbody className='bg-white divide-y divide-gray-200'>
//             <tr className={`'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition duration-300 ease-in-out`}>
//               <td className='px-6 py-4 border border-gray-300'>element.work_year</td>
//               <td className='px-6 py-4 border border-gray-300'>element.total_jobs</td>
//               <td className='px-6 py-4 border border-gray-300'>element.avg</td>
//             </tr>
          
//           <tr className='bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold'>
//             <td className='px-6 py-4 border border-gray-300'>Total</td>
//             <td className='px-6 py-4 border border-gray-300'>totalJobs</td>
//             <td className='px-6 py-4 border border-gray-300'>avgSal</td>
//           </tr>
//         </tbody>
//       </table>

//     </div>
//     </div>
//   )
// }

// export default Detailedtable

import React, { useEffect, useState } from 'react'
import axios from 'axios';


type Props = {
    year: number;
};

interface Data{
    total_jobs:number;
    job_title:string;
} 

const Detailedtable = (props:Props) => {
      const [data, setdata] = useState<Data[]>([]);

  useEffect(() => {
       axios.get(`http://localhost:8000/api/employees/yearwise/${props.year}`)
      .then(response => {
        setdata(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [props])
    

    return (
    <div>
        <div className='mt-4 bg-gray-50 p-6 rounded-lg shadow-md'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gradient-to-r from-blue-600 to-green-500 text-white'>
          <tr>
            <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-medium uppercase tracking-wider'>job title</th>
            <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-medium uppercase tracking-wider'>Total Jobs of Year for this job</th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
           {data.map((element,index) => (
            <tr className={`'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition duration-300 ease-in-out`}>
              <td className='px-6 py-4 border border-gray-300'>{element.job_title}</td>
              <td className='px-6 py-4 border border-gray-300'>{element.total_jobs}</td>
            </tr>
           ))}
          
        </tbody>
      </table>

    </div>
    </div>
  )
}

export default Detailedtable