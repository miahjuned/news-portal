import React, { createContext, useState } from "react";
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
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import User from "./components/User/User";


export const UserContext = createContext();

function App() {
  const [logInUser, setLogInUser] = useState({});
  

  return (
    <UserContext.Provider value={[logInUser, setLogInUser]}>
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
              <User></User>
            </Route>
            
            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/dashboard">
              
              {/* <Dashboard></Dashboard> */}
            </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
