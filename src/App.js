import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Jobs from "./page/Jobs"
import Login from "./page/Login"
import Detail from './Detail';

function App() {

  let [user, setUser] = useState(true); // if youser is true than login, false, not login

  const ProtectRoute = (props) => {
    // if user is login, then show the detail page
    // if user is not login then show login page
    if (user === true) {
      return <Route{...props} />
    } else {
      return <Redirect to="/login" />
    }
  };
  return (
    <div>
      <Switch>
        <ProtectRoute path="/jobs/:id" render={(props) => <Detail {...props} />} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Jobs} />
      </Switch>
    </div>
  );
}

export default App;
