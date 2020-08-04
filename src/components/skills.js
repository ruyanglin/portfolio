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
                <h2>{this.state.title}</h2>
                <Grid container direction="column" justify="flex-end">
                    <Grid item xs>
                    <h3>{this.state.langText}</h3>
                    </Grid>
                    <Grid item xs >
                        <h4>Strong Proficiency in:</h4> <p>Python, Java, SQL</p> 
                    </Grid>
                    <Grid item xs >
                        <h4>Proficient in:</h4> <p>Golang, Javascript(React, Node)</p> 
                    </Grid>
                </Grid>
                <Grid container direction="column" justify="center">
                    <Grid item xs>
                    <h3>{this.state.skillText}</h3>
                    </Grid>
                    <Grid item xs>
                        <h4>Cloud:</h4> <p>AWS(S3, DynamoDB, Redshift, Glue), GCP(Firebase)</p> 
                    </Grid>
                    <Grid item xs>
                        <h4>Infrastructure:</h4> <p>Jenkins, Kafka, Docker, Kubernetes</p> 
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Skills;