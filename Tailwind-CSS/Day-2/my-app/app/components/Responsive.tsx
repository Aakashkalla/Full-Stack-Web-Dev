import React from 'react'

const Responsive = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center gap-4'>
      <div className='h-40 w-40 rounded-2xl bg-neutral-400'></div>
      <div className='h-40 w-40 rounded-2xl bg-red-400'></div>
      <div className='h-40 w-40 rounded-2xl bg-blue-400'></div>
    </div>
  )
}

export default Responsive
