import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // doing this the current value is stored in the first name n lastname

  // const[firstName, setFirstName] = useState("");

  // const[lastName, setLastName] = useState("");
  
  // console.log(firstName);
  // console.log(lastName);

  
  // function changeHandler(event) {
  //   // console.log("first name changed");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event) {
  //   // console.log("last name changed");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const[formData, setFormData]= useState({firstName:"", lastName:"", email:"",comments:"", isFriendly:true, mode:'', favCar:''});
  // console.log(formData.firstName);
  // console.log(formData.lastName);
  //  
  function changeHandler(event) {
    const {name, value, type, checked} = event.target;
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        // [event.target.name]: event.target.value
        [name]: type === "checkbox" ? checked : value
        // if the type is checkbox then checked will be true or false
        // else it will be the value of the input field

      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log('finally submitted');
    console.log(formData);
  }

  return (
    <div>
     <form onSubmit={submitHandler}>
      <input type="text" placeholder="first name" 
      onChange={changeHandler} 
      name='firstName'
      value={formData.firstName}
      />
          <br></br>
          <br></br>
    
          <input type="text" placeholder="last name" 
      onChange={changeHandler}
      name='lastName'
      value={formData.lastName}
      />
       <br></br>
          <br></br>

           <input type="email" placeholder="email" 
      onChange={changeHandler}
      name='email'
      value={formData.email}
      />

        <br></br>
          <br></br>
          <textarea
          placeholder='comments'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
          />

          <br></br>
          <br></br>

          <input type='checkbox'
          onChange={changeHandler}
          name='isFriendly'
          id='isFriendly'
          checked={formData.isFriendly}
          />
          <label htmlFor='isFriendly'>Are you friendly?</label>
          <br></br>
          <br></br>

          <fieldset>
          <legend>Current Mode</legend>
           <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value='Online'
          id='Online'
          checked={formData.mode === 'Online'}
          />
          <label htmlFor='Online'>Online</label>
          
          <input
          type='radio'
          onChange={changeHandler}
          name='mode'//name should be same for radio buttons so that we can select only one at a time else we can select multiple
          value='Offline'
          id='Offline'
          checked={formData.mode === 'Offline'}//so that we can check if the value is equal to Offline or not n gives a boolean value

          />
          <label htmlFor='Offline'>Offline</label>

          </fieldset>

          <br></br>
          <br></br>

         
         <label htmlFor='favCar'>Choose your favourite car</label>
          <select
          onChange={changeHandler}
          name='favCar'
          value={formData.favCar}
          id='favCar'
          >
            <option value="">-- Choose a car --</option>
            <option value="Volvo">Volvo</option>
            <option value="Mercedes">Mercedes</option>
            <option value="BMW">BMW</option>
          </select>

          <br></br>
          <br></br>

          {/* <input type='submit'value='submit'/> */}
          
          <button >Submit</button>
          




      
     </form>
    </div>

  )
  }


export default App;
