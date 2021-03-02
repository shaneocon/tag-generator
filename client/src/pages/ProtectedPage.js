import { NavLink } from 'react-router-dom'
import { useAuth } from "../util/authContext";

const card = {
  textAlign: "center",
  color: "#191970",

}

function ProtectedPage() {
  const auth = useAuth();
  return (
    <div style={card} className="card">
      <h2>Registered Account</h2>
      <p>Email: {auth.user.email}</p>
      <p>User ID: {auth.user.id}</p>

      <NavLink to="/user-profile"> My Account </NavLink>
    </div>
  );


}

export default ProtectedPage;