import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/counterAtom'

function App() {
  return (
    <>
      <RecoilRoot>
        <Counter/>
      </RecoilRoot>
    </>
  )
}

function Counter(){

  return (
    <>
      <Count/>
      <Increase/>
      <Decrease/>
    </>
  )
}

function Count(){
  const counter = useRecoilValue(counterAtom)
  return (<h1>{counter}</h1>)
}

function Increase(){
  const setCount = useSetRecoilState(counterAtom)
  return <button onClick={()=>setCount(c=> c+1)}>Increase Count</button>
} 

function Decrease(){
  const setCount = useSetRecoilState(counterAtom)
  return <button onClick={()=>setCount(c=> c-1)}>Decrease Count</button>
}

export default App
