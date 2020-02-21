import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Create modal', () => {
	it('check the onChange callback', () => {
		const handleHide = jest.fn(() => {}),
			props = {
				handleHide
			},
			component = shallow(<Login {...props} />);
		component.find('.cancelBtn').simulate('click');
		expect(handleHide).toHaveBeenCalled();
	});
});
