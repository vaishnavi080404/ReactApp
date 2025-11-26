import { useState } from "react";
import "./index.css"; // Make sure this path is correct

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form submitted:", formData);
  }

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={submitHandler}>
        <h2 className="form-title">User Registration</h2>

        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={changeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={changeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={changeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={changeHandler}
          >
            <option value="">-- Select a country --</option>
            <option value="India">India</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
            <option value="australia">Australia</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="streetAddress">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            placeholder="123 Street Name"
            value={formData.streetAddress}
            onChange={changeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            placeholder="Mumbai"
            value={formData.city}
            onChange={changeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            placeholder="Maharashtra"
            value={formData.state}
            onChange={changeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            placeholder="400001"
            value={formData.zipCode}
            onChange={changeHandler}
          />
        </div>

        <fieldset className="form-section">
          <legend>By Email</legend>

          <div className="checkbox-group">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Can we email you about comments?</p>
            </div>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Can we email you about candidates?</p>
            </div>
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Can we email you about offers?</p>
            </div>
          </div>
        </fieldset>

        <fieldset className="form-section">
          <legend>Push Notifications</legend>
          <p>Would you like to receive push notifications?</p>

          <div className="radio-group">
            <input
              type="radio"
              name="pushNotifications"
              value="everything"
              id="pushEverything"
              checked={formData.pushNotifications === "everything"}
              onChange={changeHandler}
            />
            <label htmlFor="pushEverything">Everything</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              name="pushNotifications"
              value="same as email"
              id="pushEmail"
              checked={formData.pushNotifications === "same as email"}
              onChange={changeHandler}
            />
            <label htmlFor="pushEmail">Same as Email</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              name="pushNotifications"
              value="no push notifications"
              id="pushNothing"
              checked={formData.pushNotifications === "no push notifications"}
              onChange={changeHandler}
            />
            <label htmlFor="pushNothing">No Push Notifications</label>
          </div>
        </fieldset>

        <button type="submit" className="submit-btn">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
