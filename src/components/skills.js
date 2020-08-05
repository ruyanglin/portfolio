import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


class Skills extends React.Component {
    constructor() {
        super();
        this.state = {title: "Languages and Technologies", skillText: "Technologies:", langText: "Languages:"}

    }
    render() {
        return (
            <Container maxWidth="sm">
                <Grid container direction="column" justify="flex-end">
                    <Grid item xs>
                    <h2>{this.state.langText}</h2>
                    </Grid>
                    <Grid item xs >
                        <h4>Strong Proficiency in:</h4> <p>Python, Java, SQL</p>
                        <h4>Proficient in:</h4> <p>Golang, Javascript(React, Node)</p> 
                    </Grid> 
                </Grid>
                <Grid container direction="column" justify="center">
                    <Grid item xs>
                    <h2>{this.state.skillText}</h2>
                    </Grid>
                    <Grid item xs>
                        <h4>Cloud:</h4> 
                        <p>AWS(S3, DynamoDB, Lambda, Redshift, Glue) <br/> GCP(Storage, Firebase)</p>
                        <h4>Infrastructure:</h4> <p>Jenkins, Kafka, Docker, Kubernetes</p>
                        <h4>Mobile:</h4> <p>Android Studio</p> 
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Skills;