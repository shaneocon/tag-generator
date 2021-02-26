import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import ProtectedPage from "./pages/ProtectedPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import UserProfilePage from "./pages/UserProfilePage";
import { ProvideAuth } from "./util/authContext";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            maxWidth: "50rem"
          }}
        >
          <Navbar />

          <Switch>
            <Route path="/home-page">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <PrivateRoute path="/protected">
              <ProtectedPage />
            </PrivateRoute>
            <PrivateRoute path="/my-profile">
              <UserProfilePage />
            </PrivateRoute>
          </Switch>

          <Footer />
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
