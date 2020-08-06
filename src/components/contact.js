import React from 'react';
import file from '../images/file_icon.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import instagram from '../images/insta.png';


class Contact extends React.Component {
    render() {
        return (
        <div className="App-contact">
          <a href="https://drive.google.com/file/d/1SGVATAfiGqU2U2RXWRr4-Q-FUJ6g_LoO/view?usp=sharing"> <img className="contact-img" src={file} alt="file icon"/> </a>
          <a href="https://www.linkedin.com/in/ruyanglin/"> <img className="contact-img" src={linkedin} alt="linkedin icon"/>  </a>
          <a href="https://www.github.com/ruyanglin"> <img className="contact-img" src={github} alt="github icon"/>  </a>
          <a href="https://www.instagram.com/timecrop/"> <img className="contact-img" src={instagram} alt="instagram icon"/>  </a>
        </div>
        )
    }
}

export default Contact;