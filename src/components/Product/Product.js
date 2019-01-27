import React from 'react';
import Button from '@material-ui/core/Button';

import classes from 'components/Product/Product.css';
import Aux from 'hoc/Auxiliary';

const renderProductImage = (imgSrc, imgSrc2x) => {
    return (
        <div className={classes.ImageContainer}>
            <img src={require('../../assets/images/Desktop_Campaign_Image.jpg')} alt="productimageneed to be updated"/>
        </div>
    );
};

const renderProductInfo = (info) => {
    return (
        <div className={classes.InfoContainer}>
            <h1 
            style={{
                'font-familly': info.titleFontFamily,
                'line-height': info.titleLineHeight,
                'font-size': info.titleFontSize
            }}>{ info.title }</h1>
            <p
            style={{
                'font-familly': info.descFontFamily,
                'line-height': info.descLineHeight,
                'font-size': info.descFontSize
            }}>{ info.description }</p>
            <Button variant="contained" color="primary" className={classes.button}>CLAIM DEAL</Button>
        </div>
    );
};

const renderLeftToRight = (props) => {
    return (
        <Aux>
            {renderProductImage(props.productInfo.imageUrl, props.productInfo.imageUrl2x)}
            {renderProductInfo(props.productInfo)}
        </Aux>
    );
};

const renderRightToLeft = (props) => {
    return (
        <Aux>
            {renderProductInfo(props.productInfo.title, props.productInfo.description)}
            {renderProductImage(props.productInfo.imageUrl)}
        </Aux>
    );
};

const product = (props) => (
    <div className={classes.Product}
        style={{
            'background-color': props.productInfo.backgroundColor
        }}>
        {
            props.direction === 'LTE' ? renderLeftToRight(props) : renderLeftToRight(props)
        }
    </div>
);

export default product;
