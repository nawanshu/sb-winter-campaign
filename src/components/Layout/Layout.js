import React from 'react';

import Aux from 'hoc/Auxiliary';
import classes from 'components/Layout/Layout.css';
import Header from  'components/Header/Header';
import Footer from 'components/Footer/Footer';

const layout = (props) => (
    <Aux>
        <Header />
        <main className={classes.Content}>
            {props.children}
        </main>
        <Footer />
    </Aux>
);

export default layout;
