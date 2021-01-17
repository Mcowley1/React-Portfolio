import React from 'react';
import Zoom from 'react-reveal/Zoom'


function Nav() {

  const style = {
      backgroundColor: 'black',
      opacity: '0.7',
      fontSize: '20px'
  }

  const style2 = {
      display: 'flex',
      justifyContent: 'space-between',
      listStyle: 'none'
  }

    return(
        <Zoom>
        <header style={style}>
            <h1>
                <a href="#">Matthew's Portfolio</a>
            </h1>
            <nav>
                <ul style={style2}>
                    <li><a href="about">About Me</a></li>
                    <li><a href="grid">Grid</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        </Zoom>
    )
}

export default Nav;