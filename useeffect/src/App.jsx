// useEffect() is a React Hook that runs after your component renders.
// You can use it to do something when the component:

// Mounts (shows up)

// Updates (like when a variable changes)

// Unmounts (disappears)






import {useEffect, useState } from 'react'

import './App.css'


function App() {

  const[text,setText]= useState('');
 


  //every time the component renders, this useEffect will run
  //This is not a good practice, as it will cause an infinite loop
  //because the component will re-render every time the state changes
  // useEffect(() => {
  //   console.log('useEffect called');
  // });

  // useEffect(() => {
  //   console.log('useEffect called');
  // }, []); // This will only run once when the component mounts


  // useEffect(() => {
  //   console.log('useEffect called');
    
  // },[text]); // This will run when the 'name' state changes

  useEffect(() => {
    console.log('listener added');

    return () => {
      console.log('listener removed');
    }
  },[text]); 

//   What Happens When You Use It
// Initial Load:

// useEffect runs

// Console logs: ✅ useEffect called - listener added

// You type a letter (say “A”):

// text changes

// React cleans up the old effect
// Console: ❌ useEffect cleanup - listener removed

// Then it runs the effect again
// Console: ✅ useEffect called - listener added

// You type another letter (“AB”):

// Cleanup logs: ❌ useEffect cleanup - listener removed

// Then logs: ✅ useEffect called - listener added

  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }

  return (
  <input type='text' onChange={changeHandler}></input>
  )
}

export default App;



// useEffect Syntax	                     When it Runs	
// useEffect(() => { ... })            	  After every render (mount + update)	
// useEffect(() => { ... }, [])        	 Only once after initial mount	
// useEffect(() => { ... }, [text])	     On first render + whenever text changes


// import React, { useState, useEffect } from 'react';

// function WindowSizeTracker() {
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight
//   });

//   useEffect(() => {
//     // Handler to call on window resize
//     function handleResize() {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });
//     }

//     // ✅ Add event listener
//     window.addEventListener('resize', handleResize);

//     // 🧹 Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []); // 👈 Empty dependency array means this runs once on mount

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>📏 Window Size Tracker</h2>
//       <p>Width: {windowSize.width}px</p>
//       <p>Height: {windowSize.height}px</p>
//     </div>
//   );
// }

// export default WindowSizeTracker;
