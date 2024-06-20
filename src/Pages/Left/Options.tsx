import React from 'react'
import { Link } from 'react-router-dom'
function Options() {
  return (
    <div className='m-10 '>
      <ul className='flex justify-between px-4 py-12 text-[#1A2B88] font-bold'>
        <Link to={'/table'}>
        <li className='flex gap-3'><img src="Assets/Table.svg" alt="Image" />Table</li>
        </Link>
        <Link to={'/analytics'}>
        <li className='flex gap-3'><img src="Assets/Analytics.svg" alt="Image" />Analytics</li>
        </Link>
      </ul>
    </div>
  )
}

export default Options