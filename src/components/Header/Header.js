import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import classes from 'components/Header/Header.css';

const header = () => (
    <header className={classes.Header}>
        <div className={classes.Logo}>
            <a href="/">
                <img src='assets/images/logo.svg' alt="SoundBoksLogo" />
            </a>
        </div>
        <nav className={classes.Navigation}>
            <ul>
                <li>
                    <IconButton aria-label="Cart">
                        <Badge badgeContent={0} color="secondary" showZero classes={{ badge: classes.badge }}>
                            <Icon>shopping_cart</Icon>
                        </Badge>
                    </IconButton>
                </li>
                <li>
                    <IconButton aria-label="Cart">
                        <Icon>dehaze</Icon>
                    </IconButton>
                </li>
                
                
            </ul>
        </nav>
    </header>
);

export default header;
