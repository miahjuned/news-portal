import React from "react";
import './App.css';
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardRightSIde from "./components/Dashboard/Dashboard_RightSIde";
import DashboardSidebar from "./components/Dashboard_sidebar/DashboardSidebar";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
              {/* <About /> */}
            </Route>
            <Route path="/j">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/addnews">
              <DashboardRightSIde></DashboardRightSIde>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
