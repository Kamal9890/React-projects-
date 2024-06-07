import { useState } from 'react' //-> hooks 

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //hooks  

 let [counter , setCounter]= useState(10)  // hooks counter => variable and setCounter => function 

  // ui updation ko react control karta hai 
 // let counter = 5

  const addvalue = ()=>{
  //console.log("clicked" , counter);
  if (counter<= 19) {
    setCounter(counter+1)
    }
  
   
  }


  const removeValue = ()=>{
        //console.log("clicked" , counter);
        if (counter >  0) {
          counter = counter-1 
          setCounter(counter)
          
        }
       

        
        
  }



  return (
    <>
    
    <h1>chai aur react </h1>
    <h2>Counter value : {counter}</h2>

    <button
    onClick={addvalue}
    >Add value {counter}</button>
    <br />

    <button
    onClick={removeValue}
    >Remove value {counter}</button>
    </>
  )
}

export default App
