import React from "react"
import { useNavigate } from "react-router-dom"





const Login = () => {
  const navigate = useNavigate();
  const Submit = (e) => {
      navigate("/src/components/About.js")
  }

  return (
    <div className="App">
      <form>
        <header><h1>Form </h1></header>
        <label>First Name:-</label>
        <input placeholder='enter first name' /> <br />

        <label>Second Name:-</label>
        <input placeholder='enter second name' /> <br />

        <label>Last Name:-</label>
        <input placeholder='enter last name' /><br />

        <label>Email:- </label>
        <input placeholder='enter email' /><br />

        <label>Password:-</label>
        <input placeholder='enter password' type='password' /><br />

        <button
          onClick={Submit}
        >submit</button>
      </form>
    </div>)
}

export default Login;