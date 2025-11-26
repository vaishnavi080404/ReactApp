// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item'
import ItemDate from './components/ItemDate'


function App() {
  // const [count, setCount] = useState(0)
    const response = [
    {
      itemName:"Nirma",
      itemDate:'8',
      itemMonth:'April',
      itemYear:'2004'


    }
  ];

  return (
    <>
    <div className='hi'>hiii</div>
    <Item name ={response[0].itemName} ></Item>
    <ItemDate  day ={response[0].itemDate} month={response[0].itemMonth}year={response[0].itemYear}></ItemDate>
    </>
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    
  )
}

export default App;
