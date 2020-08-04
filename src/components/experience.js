import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const classes = makeStyles((theme) => createStyles({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  center: {
      textAlign: 'center'
  }
}));


class Experience extends React.Component {
    constructor() {
        super();
        this.state = {title: "Experience"}
    }
    render() {
        return (
            
            <Timeline align="alternate" >
                <h2>{this.state.title}</h2>
                <TimelineItem>
                    <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        Dec 2019 - Present
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary"/>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{"text-align":"center"}}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="body1" component="h2" >
                            <b>Co-Director of Operations</b>
                        </Typography>
                        <Typography variant="subtitle2">Hack The 6ix</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        Sept 2015 - Apr 2020
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent >
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="body1" component="h2" >
                            <b>Bachelor's of Computer Science</b>
                        </Typography>
                        <Typography variant="subtitle2">University of Waterloo</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        Sept 2019 - Dec 2019
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{"text-align":"center"}}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="body1" component="h2">
                            <b>Software Engineering Intern</b>
                        </Typography>
                        <Typography variant="subtitle2" >Uber - Money</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            Jan 2019 - Apr 2019
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent >
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="body1" component="h2">
                            <b>Software Engineering Intern</b>
                        </Typography>
                        <Typography variant="subtitle2" >NVIDIA - AIStore</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            Jan 2018 - Aug 2018
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot/>
                    </TimelineSeparator>
                    <TimelineContent style={{"text-align":"center"}}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="body1" component="h2">
                            <b>Software Engineering Intern</b>
                        </Typography>
                        <Typography variant="subtitle2">Citco - Data Services</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>
                </Timeline>
            
        )
    }
}

export default Experience;