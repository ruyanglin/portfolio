import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const classes = makeStyles((theme) => createStyles({
  paper: {
    padding: '6px 16px',
  },
}));


class TimeItem extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <TimelineItem>
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
                    <Typography variant="body1" component="h2" >
                        <b>{this.props.role}</b>
                    </Typography>
                    <Typography variant="subtitle2">{this.props.company}</Typography>
                </Paper>
                </TimelineContent>
            </TimelineItem>
        )
    }
}

export default TimeItem;