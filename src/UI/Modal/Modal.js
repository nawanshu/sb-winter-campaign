import React from 'react';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';

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
            <Fab onClick={props.modalClosed} color="secondary" aria-label="Close" className={[classes.fab, classes.CloseButton].join(' ')}>
                <Icon>cancel</Icon>
            </Fab>
        </div>
        
    </Aux>
);

export default modal;