import React from 'react';
import { shallow } from 'enzyme';
import Update from './Update';

describe('Update', () => {

	let component;
	beforeEach(() => {
		const match = {
			params: {
				id: '5e4d48a11368db000418c4d2'
			}

		}

		component = shallow(<Update match={match} />);
	});

	it('should initialize component with state.portfolio set to null', () => {
		expect(component.state('portfolio')).toBeNull();
	});
})
