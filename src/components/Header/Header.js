import React from 'react';
import Icon from '@material-ui/core/Icon';

import classes from 'components/Header/Header.css';
import soundboksLogo from 'assets/images/logo.svg';

const header = () => (
    <header className={classes.Header}>
        <div className={classes.Logo}>
            <a href="/">
                <img src={soundboksLogo} alt="SoundBoksLogo" />
            </a>
        </div>
        <nav className={classes.Navigation}>
            <ul>
                <li><Icon>shopping_cart</Icon></li>
                <li><Icon>dehaze</Icon></li>
            </ul>
        </nav>
    </header>
);

export default header;
