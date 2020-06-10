import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Jobs from "./page/Jobs"
import Login from "./page/Login"
import Detail from './Detail';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useSelector } from "react-redux";

function App() {
  const history = useHistory()

  let user = useSelector((state) => state.user)


  const ProtectRoute = (props) => {
    // if user is login, then show the detail page
    // if user is not login then show login page
    if (user.isAuthenticated === true) {
      return <Route{...props} />
    } else {
      return <Redirect to="/login" />
    }
  };
  return (
    <div>
      <div>${user.email}</div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">ITViec</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>


            <Nav.Link onClick={() => history.push("/Login")}>Login</Nav.Link>


            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>


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
