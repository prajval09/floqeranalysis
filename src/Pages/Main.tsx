import React from 'react'
import Left from './Left/Left'
import Table from './Right/Table'
import Vis from './Right/Vis'
function Main() {
  return (
    <div className='flex flex-col items-center gap-12' >
       {/* <Left/> 
       <Table/>  */}
      <div className='flex gap-11 m-auto'>
      <Vis url={"https://public.tableau.com/views/FloquerAssignment/Sheet1?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link"}/>
      <Vis url={"https://public.tableau.com/views/FloquerAssignment/Sheet2?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link"}/>
      </div>

      <div className='flex gap-11 m-auto'>
      <Vis url={"https://public.tableau.com/views/FloquerAssignment/Sheet3?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link"}/>
      <Vis url={"https://public.tableau.com/views/FloquerAssignment/Sheet5?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link"}/>
      </div>
    </div> 
  )
}

export default Main