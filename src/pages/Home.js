import React from 'react';

import Layout from 'components/Layout/Layout';
import HeroSection from 'containers/HeroSection/HeroSection';
import Products from 'containers/Products/Products';
import ImageGallery from 'components/ImageGallery/ImageGallery';

const home = () => (
    <Layout>
        <HeroSection />
        <Products />
        <ImageGallery />
    </Layout>
);

export default home;