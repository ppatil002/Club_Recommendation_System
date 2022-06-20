import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/RegisterPage";
import StudentProfile from "./pages/studentProfile";
import Layout from "./components/mentorDetails/Layout";
import MentorLogin from "./pages/MentorLogin";
import MentorRegister from "./pages/MentorRegistration";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/studentprofile">
            <StudentProfile />
            {/* <BrowserRouter>
              <Layout />
            </BrowserRouter> */}
          </Route>
          <Route path="/mentorForm">
          {/* <Layout/> */}
            <Layout />
          </Route>
          <Route path="/mentorlogin">
            <MentorLogin />
          </Route>
          <Route path="/mentorregistration">
            <MentorRegister />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
