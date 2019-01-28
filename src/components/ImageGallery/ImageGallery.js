import React from 'react';

import ImagesList from 'data/imagesList.json';
import classes from 'components/ImageGallery/ImageGallery.css';
import Aux from  'hoc/Auxiliary';
import styled from 'styled-components';

const Title  = styled.h1`
    text-align: center;
    font-family: 'GT-America-Expanded-Black';
    font-size: 30px;
    margin-bottom: 10px;
`

const imageGallary = (props) => (
    <Aux>
        <Title>#SEIZETHESEASON</Title>
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
