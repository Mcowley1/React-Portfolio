import React from 'react';

function Nav() {

    const categories = [
        {
            name: "linkedin",
            description: "work page"
        },
        {
            name: "facebook",
            description: "social page"
        },
        {
            name: "gmail",
            description: "can email me here"
        },
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return(
        <header>
            <h1>
                <a href="#">Matthew's Portfolio</a>
            </h1>
            <nav>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#Portfolio">Portfolio</a></li>
                    <li><a href="#Resume">Resume</a></li>
                    {categories.map((category) => 
                    <li key={category.name}>
                      <span onClick={categorySelected}>
                          {category.name}
                      </span>
                    </li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;