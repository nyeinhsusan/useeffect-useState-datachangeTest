import React, { useEffect, useState } from 'react'
import "./App.css"
const App = () => {
  const [count,setcount]=useState(10);
  //We use useEffect for count 
  // useEffect(()=>{
  //   if(count>0){
  //     setcount(count-1);
  //   }
  // },[count])//will render change data in count
//We need time interval that is build in function 


// useEffect(()=>{
//   if(count>0){
//    setInterval(()=>{
//     setcount(count-1);//We need to put time that will work every 1 second 
//    },1000)
  
//   }
// },[count])
//that time we need to kill setinterval if count less than 0 So we also need call back clearInterval build in  function to terminate

useEffect(()=>{
  if(count > 0){
   const interval = setInterval(()=>{
    setcount(count-1);
   },1000)

   return()=>clearInterval(interval);
  }
},[count])


  return (
    <div className='container'>
     <h1>{count}</h1>
    
    </div>
  )
}

export default App
