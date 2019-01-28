import React from 'react';

import ImagesList from 'data/imagesList.json';
import classes from 'components/ImageGallery/ImageGallery.css';
import Aux from  'hoc/Auxiliary';

const imageGallary = (props) => (
    <Aux>
        <h1 className={classes.ImageTitle}>#SEIZETHESEASON</h1>
        <div className={classes.ImageGallery}>
            {
                ImagesList.map((imgProps, index) => {
                    return (
                        <div className={classes.ImageContainer} key={index}>
                            <img src={imgProps.url} alt={imgProps.altText} />
                        </div>
                    );
                })
            }
        </div>
    </Aux>
);

export default imageGallary;
