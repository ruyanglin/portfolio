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
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
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
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    handleOpen() {
        this.setState(this.toggleHoverState);
    };
    
    handleClose() {
        this.setState(this.toggleHoverState);
    };
    

    render() {
        return (
            <TimelineItem 
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}>

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
                <TimelineContent style={{"text-align":"center"}}>
                    <Paper elevation={3} className={classes.paper}>
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
                </TimelineContent>

                {/* Modal */}
                {this.state.isHovering && <Modal
                    aria-labelledby="spring-modal-title"
                    aria-describedby="spring-modal-description"
                    className={classes.modal}
                    open={this.handleMouseHover}
                    onClose={this.handleMouseHover}
                    closeAfterTransition
                >
                    
                     <div style={{background:"white"}}>
                        <h2 id="spring-modal-title">Spring modal</h2>
                        <p id="spring-modal-description">react-spring animates me.</p>
                    </div>
                    
                </Modal>}
            </TimelineItem>
        )
    }
}

export default TimeItem;