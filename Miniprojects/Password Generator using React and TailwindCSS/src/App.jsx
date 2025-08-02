import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length,setLength] = useState(8);
  const[numberAllow, setNumber] = useState(false);
  const[specchar, setSpecChar] = useState(false);
  const[password, setPassword] = useState();

  const passwordRef = useRef(null)

  const passGen = useCallback(()=>{
    let pass = ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str += "0123456789"
    if(specchar) str += "@#$%^&*()!{}[]~`"

    for(let i =0;i<length;i++){
      let char = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);

    }

    setPassword(pass);
  },[length,numberAllow,specchar,setPassword])

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,33);
    window.navigator.clipboard.writeText(password);
  },[password])


  useEffect(()=>{
    passGen()
  },[length,numberAllow,specchar,passGen])

  return (
    <>
      
      <div className='firstdiv w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white'>
        <h1 className='text-2xl text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className=' bg-amber-50 text-black outline-none w-full py-1 px-3' placeholder='Password' ref={passwordRef} readOnly  />
          <button onClick={copyPassword} className='cursor-pointer outline-none  text-white px-3 py-1 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-3'>
          <div className='flex items-center gap-x-2'>
            <input type="range" min={6} max={32} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}  />
            <label>Length:{length}</label>
          </div>
          

          <div className='flex items-center gap-x-1'>
          <input type="checkbox" className='cursor-pointer' defaultChecked={numberAllow} id="numberInput" 
            onChange={()=>{setNumber((prev)=>!prev)}}  />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" className='cursor-pointer' defaultChecked={specchar} id='charAllow' 
            onChange={()=>{setSpecChar((prev)=>!prev)}}  />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )

}
export default App
