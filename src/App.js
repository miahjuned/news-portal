import React from "react";
import './App.css';
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddNews from "./components/AddNews/AddNews";
import NewAdmin from "./components/AddAdmin/NewAdmin";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
              {/* <About /> */}
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/add-admin">
              <NewAdmin></NewAdmin>
            </Route>
            
            <Route path="/addnews">
              <AddNews></AddNews>
            </Route>
            
            <Route path="/users">
              <AddNews></AddNews>
            </Route>
            
            <Route path="/login">
              <AddNews></AddNews>
            </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
