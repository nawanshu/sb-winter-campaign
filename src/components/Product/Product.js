import React from 'react';
import Button from '@material-ui/core/Button';

import classes from 'components/Product/Product.css';
import Aux from 'hoc/Auxiliary';

const renderProductImage = (imgSrc, imgSrc2x) => {
    return (
        <div className={classes.ImageContainer}>
            <picture>
                <source media="(min-width: 1024px)" srcSet={imgSrc}/>
                <source media="(min-width: 2408px)" srcSet={imgSrc2x}/>
                <img src={imgSrc} alt="productimageneed to be updated"/>
            </picture>
            {/* <img src={imgSrc} alt="productimageneed to be updated"/> */}
        </div>
    );
};

const renderProductInfo = (info) => {
    return (
        <div className={classes.InfoContainer}>
            <h1 
            style={{
                fontFamilly: info.titleFontFamily,
                lineHeight: info.titleLineHeight,
                fontSize: info.titleFontSize
            }}>{ info.title }</h1>
            <p
            style={{
                fontFamilly: info.descFontFamily,
                lineHeight: info.descLineHeight,
                fontSize: info.descFontSize
            }} dangerouslySetInnerHTML={{__html: info.description }}></p>
            {
                info.hasAction === 'Y' ? <Button variant="contained" color="primary" className={classes.button}>CLAIM DEAL</Button> : null
            }
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
            {renderProductInfo(props.productInfo)}
            {renderProductImage(props.productInfo.imageUrl)}
        </Aux>
    );
};

const product = (props) => (
    <div className={classes.Product}
        style={{
            backgroundColor: props.productInfo.backgroundColor,
            //flexDirection: props.productInfo.direction === 'LTR' ? 'row' : 'row-reverse'
        }}>
        {
            props.productInfo.direction === 'LTR' ? renderLeftToRight(props) : renderRightToLeft(props)
        }
    </div>
);

export default product;
