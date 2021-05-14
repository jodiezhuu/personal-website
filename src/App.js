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
       <Route path='/personal-website' exact component={Home} />
       <Route path='/personal-website' component={Home} />
       <Route path='/personal-website/about' component={About} />
       <Route path='/personal-website/experience' component={Experience} />
       <Route path='/personal-website/projects' component={Projects} />
       <Route path='/personal-website/resume' component={Resume} />
     </Switch>
     </Router>
    </>
  );
}

export default App;
