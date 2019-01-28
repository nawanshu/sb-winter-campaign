import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';

import Header from 'components/Header/Header';

configure({adapter:  new Adapter()});

describe('<Header />', () => {
    it('should render two <IconButton /> elements', () => {
        //const wrapper = shallow(<Header />);
        //Write your test case here
    });
});