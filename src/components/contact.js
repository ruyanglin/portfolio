import React from 'react';
import { useSpring, animated } from 'react-spring';
import Grid from '@material-ui/core/Grid';
import file from '../images/file_icon.png';
import linkedin from '../images/linkedin2.png';
import github from '../images/github.png';
import instagram from '../images/insta.png';


class ImageTile extends React.Component {
  render() {
    return (
      <Grid item>
          <a href={this.props.href}>
            <img className='image-tile' 
              src={this.props.src} alt={this.props.alt} 
              style={this.props.style} onMouseMove={this.props.onMouseMove} onMouseLeave={this.props.onMouseLeave}/>
          </a>
      </Grid>
    )
  }
}

const AnimatedImageTile = animated(ImageTile);

const calc = (x, y) => [-(y - window.innerHeight / 2) / 200, (x - window.innerWidth / 2) / 200, 1.05]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Contact() {
    
  const [props1, set1] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 350, friction: 40 } }))
  const [props2, set2] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 350, friction: 40 } }))
  const [props3, set3] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 350, friction: 40 } }))
  const [props4, set4] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 350, friction: 40 } }))

  return (
    <Grid container spacing={2} justify="center" alignItems="center" className="App-contact">
      <AnimatedImageTile
        onMouseMove={({ clientX: x, clientY: y }) => set1({ xys: calc(x, y) })}
        onMouseLeave={() => set1({ xys: [0, 0, 1] })}
        style={{ transform: props1.xys.interpolate(trans) }}
        href="https://drive.google.com/file/d/1SGVATAfiGqU2U2RXWRr4-Q-FUJ6g_LoO/view?usp=sharing" src={file} alt="file icon"/>

      <AnimatedImageTile 
        onMouseMove={({ clientX: x, clientY: y }) => set2({ xys: calc(x, y) })}
        onMouseLeave={() => set2({ xys: [0, 0, 1] })}
        style={{ transform: props2.xys.interpolate(trans) }}
        href="https://www.linkedin.com/in/ruyanglin/" src={linkedin} alt="linkedin icon"/>
      <AnimatedImageTile 
        onMouseMove={({ clientX: x, clientY: y }) => set3({ xys: calc(x, y) })}
        onMouseLeave={() => set3({ xys: [0, 0, 1] })}
        style={{ transform: props3.xys.interpolate(trans) }}
        href="https://www.github.com/ruyanglin" src={github} alt="github icon"/>
      <AnimatedImageTile 
        onMouseMove={({ clientX: x, clientY: y }) => set4({ xys: calc(x, y) })}
        onMouseLeave={() => set4({ xys: [0, 0, 1] })}
        style={{ transform: props4.xys.interpolate(trans) }}
        href="https://www.instagram.com/timecrop/" src={instagram} alt="instagram icon"/>
    </Grid>
  )
}

export default Contact;