import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import classes from 'containers/HeroSection/HeroSection.css';
import heroVideo from 'assets/images/Desktop_loop.mp4';
import Aux from 'hoc/Auxiliary'

class HeroSection extends Component {

    render () {
        return (
            <Aux>
                <div className={classes.HeroSection}>
                    <video poster="" id="vid">
                        <source src={heroVideo} type="video/mp4" />
                    </video>
                </div>
                <div className={classes.Content}>
                    <h1>SEIZE<br />THE SEASON</h1>
                    <Button variant="contained" color="primary" className={classes.button}>WATCH VIDEO</Button>
                </div>
            </Aux>
        );
    }
}

export default HeroSection;
