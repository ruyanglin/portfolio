import React from 'react';
import TimeItem from './timeitem';
import Timeline from '@material-ui/lab/Timeline';


class Experience extends React.Component {
    constructor() {
        super();
        this.state = {title: "Experience"}
    }
    render() {
        return (
            
            <Timeline align="alternate" >
                <h2>{this.state.title}</h2>
                <TimeItem timePeriod="Dec 2019 - Present" role="Co-Director of Operations" company="Hack The 6ix" dot="primary"/>
                <TimeItem timePeriod="Sep 2015 - Apr 2020" role="Bachelor's of Computer Science" company="University of Waterloo" dot="grey"/>
                <TimeItem timePeriod="Sep 2019 - Dec 2019" role="Software Engineering Intern" company="Uber - Money" dot="grey"/>
                <TimeItem timePeriod="Jan 2019 - Apr 2019" role="Software Engineering Intern" company="NVIDIA - AIStore" dot="grey"/>
                <TimeItem timePeriod="Jan 2018 - Aug 2018" role="Software Engineering Intern" company="Citco - Data Services" dot="grey"/>
            </Timeline>
            
        )
    }
}

export default Experience;