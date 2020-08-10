import React from 'react';
import TimeItem from './timeitem';
import Timeline from '@material-ui/lab/Timeline';
import hts from '../images/hts.png';
import uw from '../images/uw.png'
import uber from '../images/uber.jpg'
import nvidia from '../images/nvidia.jpeg'
import citco from '../images/citco.jpg'

class Experience extends React.Component {
    constructor() {
        super();
        this.state = {title: "Experience"}
    }
    render() {
        return (
            
            <Timeline align="alternate" >
                <h2>{this.state.title}</h2>
                <TimeItem timePeriod="Dec 2019 - Present" role="Co-Director of Operations" company="Hack The 6ix" dot="primary" img={hts} alt="hack the 6ix logo"/>
                <TimeItem timePeriod="Sep 2015 - Apr 2020" role="Bachelor of Computer Science, Honours, Co-op" company="University of Waterloo" dot="grey" img={uw} alt="uwaterloo logo"/>
                <TimeItem timePeriod="Sep 2019 - Dec 2019" role="Software Engineering Intern" company="Uber - Money" dot="grey" img={uber} alt="uber logo"/>
                <TimeItem timePeriod="Jan 2019 - Apr 2019" role="Software Engineering Intern" company="NVIDIA - AIStore" dot="grey" img={nvidia} alt="nvidia logo"/>
                <TimeItem timePeriod="Jan 2018 - Aug 2018" role="Software Engineering Intern" company="Citco - Data Services" dot="grey" img={citco} alt="citco logo"/>
            </Timeline>
            
        )
    }
}

export default Experience;