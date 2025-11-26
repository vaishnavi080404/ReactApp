import { useState } from 'react'
import Testimonal from './components/Testimonal'
import './App.css'
import reviews from './data'

function App() {
  

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Our Testimonials</h1>
        <div className="h-1 w-24 bg-violet-500 mx-auto rounded mb-6"></div>
        <Testimonal reviews={reviews} />
      </div>
    </div>
  );
}

export default App;