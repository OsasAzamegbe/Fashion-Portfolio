import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/pages/home/Home'
import Navbar from './components/Navbar'
import Illustrations from './components/pages/illustrations/Illustrations'
import About from './components/pages/about/About'

function App() {
  return (
    <main className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/illustrations" exact component={Illustrations} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
