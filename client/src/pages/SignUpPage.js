import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/authContext";
import API from "../util/API";

function SignUpPage() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSignUpFormSubmit = (event) => {
    event.preventDefault();
    API.signUpUser(formState)
      .then(() => {
        auth.login({ email: formState.email, password: formState.password });
      })
      .catch((error) => {
        alert("Unable to sign up.");
        console.log(error);
      });
  };

  if (auth.isLoggedIn) {
    return <Redirect to="/protected" />;
  }

  
  return (
    <div style={{backgroundColor: "#bbbbbbed"}} className="text-center mt-5 pt-3 pb-3">
      <h1>Sign Up</h1>
      <br />
      <form onSubmit={handleSignUpFormSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formState.password}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />
        <button type="submit" style={{ backgroundColor: "rgb(27, 134, 221)" }}>
          Submit
        </button>
      </form>
      {/* <img src={img} alt="logo"></img> */}
    </div>
  );
}

export default SignUpPage;
