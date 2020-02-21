import React from 'react';
import { shallow } from 'enzyme';
import ConfirmDelete from './ConfirmDelete';

describe('Create modal', () => {
	it('check the onChange callback', () => {
		const handleHide = jest.fn(() => {}),
			props = {
				handleHide
			},
			component = shallow(<ConfirmDelete {...props} />);
		component.find('.cancelBtn').simulate('click');
		expect(handleHide).toHaveBeenCalled();
	});
});
