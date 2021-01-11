import React from 'react';

function Footer() {

    const style = {
        backgroundColor: "black",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
        opacity: "0.5"
    };

    return (
        <footer style={style}>
            <a href="https://github.com/Mcowley1?tab=repositories"><img src="https://img.icons8.com/bubbles/50/000000/github.png"/></a>
            <a href="https://www.linkedin.com/in/matthew-cowley-92b509142/"><img src="https://img.icons8.com/bubbles/50/000000/linkedin.png"/></a>
            <a href="Matthewcowley01@gmail.com"><img src="https://img.icons8.com/bubbles/50/000000/gmail.png"/></a>
            <p>Powered by React</p>
        </footer>
    );
}

export default Footer;