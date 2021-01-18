import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: black;
  border: 2px solid yellow;
  border-radius: 7px;
  margin-top: 4px;
`;


const ContactList = () => {

    return(
        <Container>
            <h1>Contact Me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" row="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </Container>
        // <Container>
        //     <h1>Contact me</h1>
        //     <h3>Phone: 407-616-8141</h3>
        //     <h3>Email: matthewcowley01@gmail.com</h3>
        //     <h3>Github:<a>https://github.com/Mcowley1</a></h3>  
        // </Container>
    )
}

export default ContactList;