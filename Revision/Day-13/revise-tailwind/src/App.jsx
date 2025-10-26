import './App.css'

function App() {

  return (
    <>
      <div className='flex items-center justify-center flex-col'>
      <div className='mt-8'>
        <h1 className='text-blue-400'>Webinar<span className='text-white'>.gg</span></h1>
      </div>
      <br/>
      <br/>
      <div>
        <h1 className='text-white font-bold'>Verify Your Age</h1>
      </div>

      <br></br>
      <br></br>
      <p className='font-light text-white'>Please Confirm Your Birth Year. This Data will not be stored</p>
      <input placeholder='Your Birth year' className='bg-red-200' />
      <br></br>
      <button className='text-white rounded bg-gray-500 pl-5 pr-5'>Continue</button>
      </div>
    </>
  )
}

export default App
