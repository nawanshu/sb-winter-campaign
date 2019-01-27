import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import classes from 'containers/HeroSection/HeroSection.css';
import Aux from 'hoc/Auxiliary'
import Modal from 'components/UI/Modal/Modal';

class HeroSection extends Component {

    state = {
        waching: false
    }

    watchHandler = () => {
        this.setState({
            watching: true
        })
    }

    watchCloseHandler = () => {
        this.setState({
            watching: false
        })
    }

    render () {
        return (
            <Aux>
                <Modal show={this.state.watching} modalClosed={this.watchCloseHandler}>
                    {/* <video controls poster="" id="vid">
                        <source src={heroVideo} type="video/mp4" />
                    </video> */}
                    <iframe ref={(frame) => { this.frameElement = frame }}
                        className={classes.Youtube} 
                        title='Soundbok2' 
                        src="https://www.youtube.com/embed/TshvK47m5gU?autoplay=1" 
                        frameBorder="0" 
                        allowFullScreen></iframe>
                </Modal>
                <div className={classes.HeroSection}>
                    <video autoPlay loop poster="" id="vid">
                        <source src='assets/images/Desktop_loop.mp4' type="video/mp4" />
                    </video>
                </div>
                <div className={classes.Content}>
                    <h1>SEIZE<br />THE SEASON</h1>
                    <Button size="large" onClick={this.watchHandler} variant="contained" color="primary" className={classes.button}>WATCH VIDEO</Button>
                </div>
            </Aux>
        );
    }
}

export default HeroSection;
