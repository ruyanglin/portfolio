[1mdiff --git a/src/components/experience.js b/src/components/experience.js[m
[1mindex b4e668d..2c6722d 100644[m
[1m--- a/src/components/experience.js[m
[1m+++ b/src/components/experience.js[m
[36m@@ -1,27 +1,6 @@[m
 import React from 'react';[m
[31m-import { makeStyles, createStyles } from '@material-ui/core/styles';[m
[32m+[m[32mimport TimeItem from './timeitem';[m
 import Timeline from '@material-ui/lab/Timeline';[m
[31m-import TimelineItem from '@material-ui/lab/TimelineItem';[m
[31m-import TimelineSeparator from '@material-ui/lab/TimelineSeparator';[m
[31m-import TimelineConnector from '@material-ui/lab/TimelineConnector';[m
[31m-import TimelineContent from '@material-ui/lab/TimelineContent';[m
[31m-import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';[m
[31m-import TimelineDot from '@material-ui/lab/TimelineDot';[m
[31m-import RepeatIcon from '@material-ui/icons/Repeat';[m
[31m-import Paper from '@material-ui/core/Paper';[m
[31m-import Typography from '@material-ui/core/Typography';[m
[31m-[m
[31m-const classes = makeStyles((theme) => createStyles({[m
[31m-  paper: {[m
[31m-    padding: '6px 16px',[m
[31m-  },[m
[31m-  secondaryTail: {[m
[31m-    backgroundColor: theme.palette.secondary.main,[m
[31m-  },[m
[31m-  center: {[m
[31m-      textAlign: 'center'[m
[31m-  }[m
[31m-}));[m
 [m
 [m
 class Experience extends React.Component {[m
[36m@@ -34,101 +13,12 @@[m [mclass Experience extends React.Component {[m
             [m
             <Timeline align="alternate" >[m
                 <h2>{this.state.title}</h2>[m
[31m-                <TimelineItem>[m
[31m-                    <TimelineOppositeContent>[m
[31m-                    <Typography variant="body2" color="textSecondary">[m
[31m-                        Dec 2019 - Present[m
[31m-                    </Typography>[m
[31m-                    </TimelineOppositeContent>[m
[31m-                    <TimelineSeparator>[m
[31m-                    <TimelineDot color="primary"/>[m
[31m-                    <TimelineConnector />[m
[31m-                    </TimelineSeparator>[m
[31m-                    <TimelineContent style={{"text-align":"center"}}>[m
[31m-                    <Paper elevation={3} className={classes.paper}>[m
[31m-                        <Typography variant="body1" component="h2" >[m
[31m-                            <b>Co-Director of Operations</b>[m
[31m-                        </Typography>[m
[31m-                        <Typography variant="subtitle2">Hack The 6ix</Typography>[m
[31m-                    </Paper>[m
[31m-                    </TimelineContent>[m
[31m-                </TimelineItem>[m
[31m-                <TimelineItem>[m
[31m-                    <TimelineOppositeContent>[m
[31m-                    <Typography variant="body2" color="textSecondary">[m
[31m-                        Sept 2015 - Apr 2020[m
[31m-                    </Typography>[m
[31m-                    </TimelineOppositeContent>[m
[31m-                    <TimelineSeparator>[m
[31m-                    <TimelineDot/>[m
[31m-                    <TimelineConnector />[m
[31m-                    </TimelineSeparator>[m
[31m-                    <TimelineContent >[m
[31m-                    <Paper elevation={3} className={classes.paper}>[m
[31m-                        <Typography variant="body1" component="h2" >[m
[31m-                            <b>Bachelor's of Computer Science</b>[m
[31m-                        </Typography>[m
[31m-                        <Typography variant="subtitle2">University of Waterloo</Typography>[m
[31m-                    </Paper>[m
[31m-                    </TimelineContent>[m
[31m-                </TimelineItem>[m
[31m-                <TimelineItem>[m
[31m-                    <TimelineOppositeContent>[m
[31m-                    <Typography variant="body2" color="textSecondary">[m
[31m-                        Sept 2019 - Dec 2019[m
[31m-                    </Typography>[m
[31m-                    </TimelineOppositeContent>[m
[31m-                    <TimelineSeparator>[m
[31m-                    <TimelineDot/>[m
[31m-                    <TimelineConnector />[m
[31m-                    </TimelineSeparator>[m
[31m-                    <TimelineContent style={{"text-align":"center"}}>[m
[31m-                    <Paper elevation={3} className={classes.paper}>[m
[31m-                        <Typography variant="body1" component="h2">[m
[31m-                            <b>Software Engineering Intern</b>[m
[31m-                        </Typography>[m
[31m-                        <Typography variant="subtitle2" >Uber - Money</Typography>[m
[31m-                    </Paper>[m
[31m-                    </TimelineContent>[m
[31m-                </TimelineItem>[m
[31m-                <TimelineItem>[m
[31m-                    <TimelineOppositeContent>[m
[31m-                        <Typography variant="body2" color="textSecondary">[m
[31m-                            Jan 2019 - Apr 2019[m
[31m-                        </Typography>[m
[31m-                    </TimelineOppositeContent>[m
[31m-                    <TimelineSeparator>[m
[31m-                    <TimelineDot/>[m
[31m-                    <TimelineConnector className={classes.secondaryTail} />[m
[31m-                    </TimelineSeparator>[m
[31m-                    <TimelineContent >[m
[31m-                    <Paper elevation={3} className={classes.paper}>[m
[31m-                        <Typography variant="body1" component="h2">[m
[31m-                            <b>Software Engineering Intern</b>[m
[31m-                        </Typography>[m
[31m-                        <Typography variant="subtitle2" >NVIDIA - AIStore</Typography>[m
[31m-                    </Paper>[m
[31m-                    </TimelineContent>[m
[31m-                </TimelineItem>[m
[31m-                <TimelineItem>[m
[31m-                    <TimelineOppositeContent>[m
[31m-                        <Typography variant="body2" color="textSecondary">[m
[31m-                            Jan 2018 - Aug 2018[m
[31m-                        </Typography>[m
[31m-                    </TimelineOppositeContent>[m
[31m-                    <TimelineSeparator>[m
[31m-                    <TimelineDot/>[m
[31m-                    </TimelineSeparator>[m
[31m-                    <TimelineContent style={{"text-align":"center"}}>[m
[31m-                    <Paper elevation={3} className={classes.paper}>[m
[31m-                        <Typography variant="body1" component="h2">[m
[31m-                            <b>Software Engineering Intern</b>[m
[31m-                        </Typography>[m
[31m-                        <Typography variant="subtitle2">Citco - Data Services</Typography>[m
[31m-                    </Paper>[m
[31m-                    </TimelineContent>[m
[31m-                </TimelineItem>[m
[31m-                </Timeline>[m
[32m+[m[32m                <TimeItem timePeriod="Dec 2019 - Present" role="Co-Director of Operations" company="Hack The 6ix" dot="primary"/>[m
[32m+[m[32m                <TimeItem timePeriod="Sep 2015 - Apr 2020" role="Bachelor's of Computer Science" company="University of Waterloo" dot="grey"/>[m
[32m+[m[32m                <TimeItem timePeriod="Sep 2019 - Dec 2019" role="Software Engineering Intern" company="Uber - Money" dot="grey"/>[m
[32m+[m[32m                <TimeItem timePeriod="Jan 2019 - Apr 2019" role="Software Engineering Intern" company="NVIDIA - AIStore" dot="grey"/>[m
[32m+[m[32m                <TimeItem timePeriod="Jan 2018 - Aug 2018" role="Software Engineering Intern" company="Citco - Data Services" dot="grey"/>[m
[32m+[m[32m            </Timeline>[m
             [m
         )[m
     }[m
[1mdiff --git a/src/components/skills.js b/src/components/skills.js[m
[1mindex 21154af..1429fbd 100644[m
[1m--- a/src/components/skills.js[m
[1m+++ b/src/components/skills.js[m
[36m@@ -29,7 +29,7 @@[m [mclass Skills extends React.Component {[m
                     <h3>{this.state.skillText}</h3>[m
                     </Grid>[m
                     <Grid item xs>[m
[31m-                        <h4>Cloud:</h4> <p>AWS(S3, DynamoDB, Redshift, Glue), GCP(Firebase)</p> [m
[32m+[m[32m                        <h4>Cloud:</h4> <p>AWS(S3, DynamoDB, Lambda, Redshift, Glue), GCP(Storage, Firebase)</p>[m[41m [m
                     </Grid>[m
                     <Grid item xs>[m
                         <h4>Infrastructure:</h4> <p>Jenkins, Kafka, Docker, Kubernetes</p> [m
