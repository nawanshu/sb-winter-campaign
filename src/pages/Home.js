import React from 'react';

import Layout from 'components/Layout/Layout';
import HeroSection from 'containers/HeroSection/HeroSection';
import Products from 'containers/Products/Products';

const home = () => (
    <Layout>
        <HeroSection />
        <Products />
    </Layout>
);

export default home;