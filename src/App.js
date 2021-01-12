import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Grid from './components/Grid';
import GlassCard from './components/Glass';
import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <GlassCard />
        <br />
        <Grid></Grid>
      </main>
      <footer className="footer1">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
