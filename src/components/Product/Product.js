import React from 'react';
import Button from '@material-ui/core/Button';

import classes from 'components/Product/Product.css';
import Aux from 'hoc/Auxiliary';

const renderProductImage = (info) => {
    return (
        <div className={classes.ImageContainer}>
            <picture>
                <source media="(min-width: 1024px)" srcSet={info.imageUrl}/>
                <source media="(min-width: 2408px)" srcSet={info.imageUrl2x}/>
                <img src={info.imageUrl} alt="ProductImage"/>
            </picture>
        </div>
    );
};

const renderProductInfo = (info) => {
    return (
        <div className={classes.InfoContainer}  
        style={{
            paddingLeft: info.direction === 'LTR'? '50px' : '0px',
            paddingRight: info.direction === 'RTL' ? '50px' : '0px'
        }}>
            <h1 className={classes.CampaignHeader}
            style={{
                fontFamily: info.titleFontFamily,
                lineHeight: info.titleLineHeight,
                fontSize: info.titleFontSize
            }}>{ info.title }</h1>
            <p
            style={{
                fontFamily: info.descFontFamily,
                lineHeight: info.descLineHeight,
                fontSize: info.descFontSize
            }} dangerouslySetInnerHTML={{__html: info.description }}></p>
            {
                info.hasAction === 'Y' ? <Button variant="contained" color="primary" className={classes.button}>CLAIM DEAL</Button> : null
            }
        </div>
    );
};

const renderCampaignBlock = (info) => {
    return (
        <Aux>
            <div className={classes.CampaignBlock}>
                <div className={classes.CampaignProduct}>
                    {renderProductImage(info)}
                    {renderProductInfo(info)}
                </div>
            </div>
        </Aux>
    )
};

const renderUspBlock = (infoArr) => (
    <div className={classes.UspBlock}>
        {
            infoArr.map(deal => {
                return (
                    <div key={deal.id} className={classes.UspProduct}
                    style={{
                        flexDirection: deal.direction === 'LTR' ? 'row' : 'row-reverse'
                    }}>
                        {renderProductImage(deal)}
                        {renderProductInfo(deal)}
                    </div>
                )
            }) 
        }
            
    </div>
);

const renderDealBlock = (info) => {
    return (
        <Aux>
            <div className={classes.DealBlock}>
                <div className={classes.DealProduct}>
                    {renderProductImage(info)}
                    {renderProductInfo(info)}
                </div>
            </div>
        </Aux>
    )
};

const product = (props) => (
    <Aux>
        {
            props.productInfo.type === 'wintercampaign-block' && renderCampaignBlock(props.productInfo.data[0])
        }
        {
            props.productInfo.type === 'usp-block' && renderUspBlock(props.productInfo.data)
        }
        {
            props.productInfo.type === 'deal_block' && renderDealBlock(props.productInfo.data[0])
        }
    </Aux>
);

export default product;
