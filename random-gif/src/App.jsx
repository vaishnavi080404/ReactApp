import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'

export default function App() {
  return(
    <div className="w-full  flex flex-col items-center justify-start bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 ">


      <h1 className='  w-11/12 mt-[40px] text-center px-10 py-2 text-4xl bg-white rounded-lg  '>
        RANDOM GIFs
      </h1>

      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
    </div>

  )
}
