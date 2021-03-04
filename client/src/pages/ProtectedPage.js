import { NavLink } from 'react-router-dom'
import { useAuth } from "../util/authContext";


function ProtectedPage() {
  const auth = useAuth();
  return (
    <div style={{ backgroundColor: "#ff8243f2" }} className="text-center mt-5 pt-3 pb-3">
      <h2>Registered Account</h2>
      <p>Email: {auth.user.email}</p>
      <p>User ID: {auth.user.id}</p>

      <NavLink to="/user-profile"> My Account </NavLink>
      <p/>
      <NavLink to="/home-page"> Go Home </NavLink>
    </div>
  );


}

export default ProtectedPage;