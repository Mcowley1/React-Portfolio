import React from 'react';

function Nav() {

  const style = {
      backgroundColor: 'black',
      opacity: '0.5',
  }

    return(
        <header style={style}>
            <h1>
                <a href="#">Matthew's Portfolio</a>
            </h1>
            <nav>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;