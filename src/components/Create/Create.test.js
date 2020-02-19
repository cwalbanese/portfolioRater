import React from 'react';
import { shallow } from 'enzyme';
import Create from './Create';

describe('Create component', () => {
	it('should render as expected', () => {
		const component = shallow(<Create />)
		expect(component.contains(<h2>Post your portfolio.</h2>)).toBe(true)
	})
})