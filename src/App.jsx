import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AA from  "./components/AA"



function App() {

  const[counter,setCounter]=useState(0)

  return <><h1>Hello World</h1>
  <button onClick={()=>setCounter(prev=>prev+1)}>Click Here</button>
  <h1>{counter}</h1>

  </>
}

export default App
