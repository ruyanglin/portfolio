import React from 'react';
import Container from '@material-ui/core/Container';
import ryan from '../images/ryan.jpg';

class Bio extends React.Component {

    constructor() {
        super();
        this.state = {msg: "Hi, I'm Ryan Lin. Welcome to my portfolio! Currently under construction."}
    }
    render() {
        return (
            <Container>
                <img src={ryan} className="App-logo" alt="ryan lin"/>
                <h2> {this.state.msg} </h2>
            </Container>
        )
    }
}

export default Bio;