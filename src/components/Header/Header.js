import React from 'react';

import classes from 'components/Header/Header';
import soundboksLogo from 'assets/images/logo.svg';

const header = () => (
    <div className={classes.Header}>
        <img src={soundboksLogo} alt="SoundBoksLogo" />
    </div>
);

export default header;