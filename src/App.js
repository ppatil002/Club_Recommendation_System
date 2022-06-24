import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/RegisterPage";
import StudentProfile from "./pages/studentProfile";
import Layout from "./components/mentorDetails/Layout";
import MentorLogin from "./pages/MentorLogin";
import MentorRegister from "./pages/MentorRegistration";
import WelcomePage from "./pages/Welcome";
import StudentInterest from "./pages/StudentInterest";
import NavBar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import PersonalForm from "./pages/Student/PersonalForm";
import ClubList from "./pages/ClubList";
import MentorRequestsreceived from "./components/mentorDetails/RequestsReceived";
import MentorRequestsaccepted from "./components/mentorDetails/RequestsAccepted";
import MentorRecommendation from "./pages/MentorRecommendation";

function App() {
  const mentortoken = localStorage.getItem("MentorToken");
  const studenttoken = localStorage.getItem("StudentToken");

  let routes;

  if (!mentortoken && !studenttoken) {
    routes = (
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/landingPage">
          <LandingPage/>
        </Route>
        <Route path="/home">
          <HomePage/>
        </Route>
        <Route path="/studentlogin">
          <Login />
        </Route>
        <Route path="/studentregister">
          <Register />
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
        <Redirect to="/" />
      </Switch>
    );
  } else if (mentortoken && !studenttoken) {
    routes = (
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/studentlogin">
          <Login />
        </Route>
        <Route path="/studentregister">
          <Register />
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
        <Route path="/mrr">
          <MentorRequestsreceived />
        </Route>
        <Route path="/mra">
          <MentorRequestsaccepted />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else if (!mentortoken && studenttoken) {
    routes = (
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/studentlogin">
          <Login />
        </Route>
        <Route path="/studentInterest">
          <StudentInterest />
        </Route>
        <Route path="/studentregister">
          <Register />
        </Route>
        <Route path="/studentprofile">
          <StudentProfile />
          {/* <BrowserRouter>
              <Layout />
            </BrowserRouter> */}
        </Route>
        <Route path="/studentInterest">
          <StudentInterest />
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
        <Route path="/studentpersonalform">
          <PersonalForm />
        </Route>
        <Route path="/clubs-selected">
          <ClubList />
        </Route>
        <Route path="/mentor-recommendation">
          <MentorRecommendation />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div className="App">
      <Router>
        <main>{routes}</main>
      </Router>
    </div>
  );
}

export default App;
