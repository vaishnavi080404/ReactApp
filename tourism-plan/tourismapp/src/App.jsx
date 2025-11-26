import React, { useState } from 'react';
import Tours from './components/Tours';
import data from './data';
import './App.css';

function App() {
  const [tours, setTours] = useState(data);
  const [interestedTours, setInterestedTours] = useState([]);

function removeTour(id) {
  const newTours = tours.filter((tour) => tour.id !== id);
  setTours(newTours);
}

if (tours.length === 0) {
  return (
    <div className='refresh-container'>
      <h2>No Tours Left</h2>
      <button className='refresh-btn' onClick={() => setTours(data)}>
        Refresh Tours
      </button>
    </div>
  );
}
  function handleInterest(tour, date) {
    setInterestedTours([...interestedTours, { ...tour, date }]);
  }

  function handleUninterest(id) {
    setInterestedTours(interestedTours.filter((tour) => tour.id !== id));
  }
  

  return (
    <div>
      {/* <h1 className='counter'>Interested Tours: {interestedTours.length}</h1> */}
      <Tours
      
        tours={tours}
        removeTour={removeTour}
        interestedTours={interestedTours}
        handleInterest={handleInterest}
        handleUninterest={handleUninterest}

      />
      <h1 className='counter'>Interested Tours: {interestedTours.length}</h1>
    </div>
  );
}

export default App;
