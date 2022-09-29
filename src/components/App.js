import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
    <NavBar />
    <Switch >
    <Route exact path="/" component={Home}>
      <Home />
    </Route>
    <Route path="/about" component={About}>
      <About />
    </Route>
    <Route path="/login" component={Login}>
      <Login />
    </Route>
    </Switch>
    </div>
  )
}

export default App