import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Grid from './components/Grid';
import GlassCard from './components/Glass';
import Portfolio from './components/Portfolio';
import ContactList from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Nav></Nav>
      <main>
        <Switch>
          <Route path="/" exact component={GlassCard}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/grid" component={Grid}></Route>
          <Route path="/contact" component={ContactList}></Route>
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
