import { useAuth } from "../util/authContext";
import API from "../util/API";
import { useEffect, useState } from "react";

const card = {
  textAlign: "center",
  color: "#191970",

}

// This component provides an example of requesting additional user info that
// isn't available from the auth token. This page should only be rendered from
// within a ProtectedRoute
function UserProfilePage() {
  const auth = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.getUser().then((res) => {
      setUser(res.data);
    });
  }, [auth.isLoggedIn, auth.user.id]);

  return (
    <div style={card} className="card">
      <h2>User Profile</h2>
      <p>ID: {user?._id}</p>
      <p>Email: {user?.email}</p>
      <div>
        <h2>My Preferences</h2>
        <div>Here are your saved scripts:</div>
      </div>
    </div>
  );
}

export default UserProfilePage;
