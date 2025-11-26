
import React from 'react';
import './App.css'
import Products from './components/Products';
import NewProduct from './components/NewProduct';

function App() {
  console.log("App is running");

  const products = [
    {
      id:'p1',
      title:'Maggi',
      amount:100,
      date :new Date(2021,8,10),
    },
    {
       id:'p2',
      title:'Noodles',
      amount:150,
      date :new Date(2022,8,10),

    }
  ];

  function printProductData(data){
    console.log('im inside App.js');
    console.log(data);
  }
 

  return (

    <>
    
      <div>
        <NewProduct vaishnavi={printProductData}/>
        <Products items={products}></Products>
        
      </div>
    </>
  )
}

export default App
