import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
       <Route path='/Home' exact component={Home} />
       <Route path='/About' component={About} />
       <Route path='/Experience' component={Experience} />
       <Route path='/Projects' component={Projects} />
       <Route path='/Resume' component={Resume} />
     </Switch>
     </Router>
    </>
  );
}

export default App;
