import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/RegisterPage";
import StudentProfile from "./pages/studentProfile";

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
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
