import React from 'react';
import { useSpring, animated } from 'react-spring';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';

import Backdrop from '@material-ui/core/Backdrop';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

const classes = makeStyles((theme) => createStyles({
  paper: {
    padding: '6px 16px',
  },
  modal: {
    display: 'flex',
    width: '40vmin',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0},
      to: { opacity: open ? 1 : 0 },
     
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });


class TimeItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseHoverEnter = this.handleMouseHoverEnter.bind(this);
        this.handleMouseHoverExit = this.handleMouseHoverExit.bind(this);
        this.state = {
            isHovering: false,
        };
        this.timer = null;
    }

    handleMouseHoverEnter() {
      this.timer = setTimeout(() => {
        this.setState({isHovering: true});
      }, 1000);
      
    }

    handleMouseHoverExit() {
      clearTimeout(this.timer);
      this.setState({isHovering: false});
    }
    
    render() {
        return (
            <TimelineItem >

                {/* Timeline item*/}
                <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    {this.props.timePeriod}
                </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot color={this.props.dot}/>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={{"text-align":"center", "cursor":"pointer"}} 
                  onMouseEnter={this.handleMouseHoverEnter}
                  onMouseLeave={this.handleMouseHoverExit}
                 >
                    <Paper elevation={3} className={classes.paper} >
                        <Grid container direction="row" justify="space-evenly" alignItems="center">
                            <Grid item>
                                <Typography variant="body1" component="h2" >
                                    <b>{this.props.role}</b>
                                </Typography>
                                <Typography variant="subtitle2">{this.props.company}</Typography>
                            </Grid>
                            <Grid item>
                                    <img className="tl-img" src={this.props.img} alt={this.props.alt}/>
                            </Grid>
                            
                        </Grid>

                        
                    </Paper>


                   {/* Modal */}
                   {this.state.isHovering && <Modal
                            className={classes.modal}
                            open={this.handleMouseHoverEnter}
                            onClose={this.handleMouseHoverExit}
                            closeAfterTransition >
                            
                            <Fade in={this.handleMouseHoverEnter} className="modal">
                                <h2 id="spring-modal-title">{this.props.role} @ {this.props.company}</h2>
                                <p id="spring-modal-description">What I did there...</p>
                            </Fade>
                            
                        </Modal>}
                </TimelineContent>

                
            </TimelineItem>
        )
    }
}

export default TimeItem;