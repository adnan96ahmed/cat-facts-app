import React from 'react';
import Adaptor from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow } from 'enzyme';
import Catfacts from './Catfacts'

configure({ adapter: new Adaptor() });

describe('Catfacts', () => {
    beforeEach(() => {
        jest.spyOn(React, "useEffect").mockImplementationOnce(fn => fn());
    })

    const wrapper = shallow(<Catfacts />)

    it('should have single Catfacts page', async () => {
        expect(wrapper.find('.Catfacts')).toHaveLength(1);
    })

    it('should have a Header component with text `The Great Cat Fact App`', async () => {
        const header = wrapper.find('.Header');
        expect(header.text()).toEqual('The Great Cat Fact App');
    })

    it('should have a Button component with text `Get New Cat Fact`', async () => {
        const button = wrapper.find('.NewFactButton');
        expect(button.text()).toEqual('Get New Cat Fact');
    })

})