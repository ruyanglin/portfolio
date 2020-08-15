import React from 'react';
import TimeItem from './timeitem';
import Timeline from '@material-ui/lab/Timeline';
import hts from '../images/hts.png';
import uw from '../images/uw.png'
import uber from '../images/uber.jpg'
import nvidia from '../images/nvidia.jpeg'
import citco from '../images/citco.jpg'

const htsText = [
    "Facilitated in organizing, planning and executing Toronto’s largest summer hackathon drawing over +1000 applicants across Canada",
    "Led bi-weekly meetings with the associates and other stakeholders to provide updates and action items to perform",
    "Adapted the traditional hackathon experience to cater to a digital hackathon due to the COVID-19 pandemic"
]
const bcsText = [
    "Major courses: Algorithms, Introduction to AI, Distributed Systems, Networking, UI/UX, Databases",
    "Minor courses: Applied Linear Models, Data Analysis, Mathematical Statistics",
    "Extracurriculars: Cooking Club Instructor, Intramural Basketball Captain"
]
const uberText = [
    "Devised and implemented a framework to simplify writing data to DynamoDB using user-generated schemas which reduced development time from a day to a couple of hours",
    "Created and validated various data schemas using JSR-303 and JSR-380 to support creation of new table indices using the framework",
    "Wrote ad hoc scripts connecting DynamoDB, S3, and in-house storage to backfill data and to re-index records"
]
const nvidiaText = [
    "Developed a CLI tool to provide users improved usability for developing, testing and communicating with the object store",
    "Orchestrated a multi-node Kubernetes cluster with Kubeadm to performance test the system in a more production-like fashion",
    "Improved statistic collection and APIs with a strong focus on readability, scalability and usability for end users and developers",
    "Benchmarked and stress-tested performance of the system under various loads and configurations to fine-tune optimal settings"
]
const citcoText = [
    "Developed and designed a scalable AWS Data Lake proof of concept which was eventually adopted into production",
    "Designed and implemented a fault-tolerant scheduling service with SQS and Step Functions for ETL jobs on AWS",
    "Operationalized and automated AWS Lambda deployment and testing with Jenkins, CodePipeline and SAM Cloudformation templates to improve SDLC by 30%"
]

class Experience extends React.Component {
    render() {
        return (
            
            <Timeline align="alternate" >
                <h2>Experience</h2>
                <TimeItem timePeriod="Dec 2019 - Present" role="Co-Director of Operations" company="Hack The 6ix" text={htsText} dot="primary" img={hts} alt="hack the 6ix logo"/>
                <TimeItem timePeriod="Sep 2015 - Apr 2020" role="Bachelor of Computer Science, Honours, Co-op" company="University of Waterloo" text={bcsText} dot="grey" img={uw} alt="uwaterloo logo"/>
                <TimeItem timePeriod="Sep 2019 - Dec 2019" role="Software Engineering Intern" company="Uber - Money" text={uberText} dot="grey" img={uber} alt="uber logo"/>
                <TimeItem timePeriod="Jan 2019 - Apr 2019" role="Software Engineering Intern" company="NVIDIA - AIStore" text={nvidiaText} dot="grey" img={nvidia} alt="nvidia logo"/>
                <TimeItem timePeriod="Jan 2018 - Aug 2018" role="Software Engineering Intern" company="Citco - Data Services" text={citcoText} dot="grey" img={citco} alt="citco logo"/>
            </Timeline>
            
        )
    }
}

export default Experience;