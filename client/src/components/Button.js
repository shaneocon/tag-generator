import React from "react";
import {Link} from 'react-router-dom'
import Button from "react-bootstrap/Button";


import { useAuth } from "../util/authContext";

function PreferencesButton() {
  let auth = useAuth();
  if (auth.isLoggedIn) {
    return <Button className="prefButton">Save Preferences</Button>
    }

  return (
    <div>
      <Link to="/signup">
        <Button type="button" className="btn btn-primary">Create an Account to Save Preferences </Button>
      </Link>
    </div>
  )
  
}

export default PreferencesButton;






    // return (
    //   <div>
    //   <Link to='https://react.semantic-ui.com/'>
    //   <button type="button" className="btn btn-info">Button</button>
    //   </Link>
    //   </div>
    // );