import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarFunc from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import ProtectedPage from "./pages/ProtectedPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

// import CardResult from "./components/Card";

import UserProfilePage from "./pages/UserProfilePage";
import { ProvideAuth } from "./util/authContext";



function App() {
  return (
    <ProvideAuth>
      <Router>
        <NavbarFunc />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            maxWidth: "50rem",
          }}
        >
          <Switch>
            <Route exact path={["/home-page","/" ]}>
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
            <PrivateRoute path="/user-profile">
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
