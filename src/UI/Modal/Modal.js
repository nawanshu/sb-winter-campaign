import React from 'react';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import classes from 'UI/Modal/Modal.css';
import Backdrop from 'UI/Backdrop/Backdrop';
import Aux from 'hoc/Auxiliary';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
            <IconButton size="large" onClick={props.modalClosed} className={[classes.button, classes.CloseButton].join(' ')} aria-label="Close">
                    <Icon>cancel</Icon>
            </IconButton>
        </div>
        
    </Aux>
);

export default modal;