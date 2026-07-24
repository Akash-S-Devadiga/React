import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AA from  "./components/AA"

const fruits = ["Apple", "Mango", "Orange"];


function App() {

function submitHandler(e){
  e.preventDefault();
  console.log("form submitted "+form.name)
}


  const[counter,setCounter]=useState(0)


  const[form,setform]=useState({
    name:"",
    place:""
  })

 useEffect(() => {

    console.log("Effect Running");

    return () => {
      console.log("Cleaning Previous Effect");
    };

  }, [counter]);
  return <><h1>Hello World</h1>
  <button onClick={()=>setCounter(prev=>prev+1)}>Click Here</button>
  <h1>{counter}</h1>
  {counter>5?<h1>count is greater than 5</h1>:<h1>count is lesser than 5</h1>}

  {counter&&<h1>count exists</h1>}

  <AA name="AKASH"/>

     {fruits.map((fruit,index) => (
        <h2 key={index}>{index}:{fruit}</h2>
      ))}

     


     {/* form handling  */}
  
      <div>

        <input type="text" 
        value={form.name}
        onChange={(e)=>{setform({
          ...form,
          name:e.target.value
        })}}/>
      </div>
      <form onSubmit={submitHandler}>
      <div>

       <input type="text" 
        value={form.place}
        onChange={(e)=>{setform({
          ...form,
          place:e.target.value
        })}}/>
      </div>

      <button>Submit</button>
      </form>
      <h2>Name: {form.name}</h2>:<h2>Place: {form.place}</h2>
  </>
}

export default App
