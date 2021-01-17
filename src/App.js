import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Grid from './components/Grid';
import GlassCard from './components/Glass';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Nav></Nav>
      <main>
        <GlassCard></GlassCard>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/grid" component={Grid}></Route>
        </Switch>
      </main>
      <footer className="footer1">
        <Footer></Footer>
      </footer>
    </div>
    </Router>
  );
}

export default App;
