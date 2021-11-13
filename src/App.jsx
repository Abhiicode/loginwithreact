import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [registeredValues, setRegisteredValues] = useState({
    userid: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisteredValues({ ...registeredValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registeredValues.name);
    console.log(registeredValues.userid);
    console.log(registeredValues.email);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formHere">
        <h1>Registration Form</h1>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={registeredValues.name}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={registeredValues.email}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <label>
          UserId:
          <input
            type="text"
            name="userid"
            value={registeredValues.userid}
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
