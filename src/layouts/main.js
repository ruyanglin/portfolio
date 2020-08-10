import React from 'react';
import Grid from '@material-ui/core/Grid';
import Bio from '../components/bio';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Skills from '../components/skills';

class Main extends React.Component {
    render() {
        return (
            <Grid container justify="center">
              <Grid item xs>
                <Skills></Skills>
              </Grid>
              <Grid item xs>
                <Bio></Bio>
              </Grid>
              <Grid item xs>
                <Experience></Experience>
              </Grid>
              <Grid item xs={12}>
                <Projects></Projects>
              </Grid>
          </Grid>
        )
    }
}

export default Main;