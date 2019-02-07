import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Contact from '../contact/contact';
const Home = () => (
    <div>
      Home
    </div>
  )
  
  const About = () => (
    <div>
      About
    </div>
  )
  
  const Code = () => (
    <div>
      Code
    </div>
  )
  

  
  const Info = () => (
    <div>
      info
    </div>
  )
  
const Main = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/code" component={Code} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/info" component={Info} />
    </div>
  )
export default Main;