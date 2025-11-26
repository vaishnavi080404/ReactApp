import React from 'react'
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();

  function backHandler() {
    navigate(-1); // Navigate back to the previous page
  }
  return (
    <div>
    <div>
      <h1>About</h1>
      <button onClick={backHandler}>Back</button>

    </div>
    </div>
  )
}

export default About
