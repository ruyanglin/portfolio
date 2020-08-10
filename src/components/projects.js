import React from 'react';
import { useSpring, animated } from 'react-spring';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import spaceinvaders from '../images/spaceinvaders.png';
import paintlite from '../images/paintlite2.png';
import instalite from '../images/instalite.png';

class ProjectTile extends React.Component {
    render() {
        return (
            <Grid item >
                <Container  className='project-tile' >
                <a href={this.props.href} target="_blank">
                    <img className='thumbnail' src={this.props.src} alt={this.props.alt}/>
                    <h2> {this.props.title} </h2> 
                </a>
                </Container>
            </Grid>
        )
    }
}

function Projects() {
    return (
        <Grid item container spacing={4} justify="center" alignItems="stretch" style={{width:"100%", margin:"0px"}}>
            <Grid item xs={12}>
                <h2> Projects </h2>
            </Grid>
            <ProjectTile title="Space Invaders" href="https://github.com/ruyanglin/SpaceInvaders" src={spaceinvaders} alt="Space Invaders Thumbnail"/>
            <ProjectTile title="Paint Lite" href="https://github.com/ruyanglin/Paintlite" src={paintlite} alt="Paint Lite Thumbnail"/>
            <ProjectTile title="Mobile Photo Viewer" href="https://github.com/ruyanglin/Instalite" src={instalite} alt="Insta Lite Thumbnail"/>
        </Grid>
    )
}

export default Projects;