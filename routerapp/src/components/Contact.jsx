import React from 'react'
import { useNavigate } from 'react-router-dom';
const Contact = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/about");
  }

  return (
    <div>
    <div>
      <h1>Contact</h1>
    </div>
    <button onClick={clickHandler}>
      move to About page
    </button>
    </div>
  )
}

export default Contact
