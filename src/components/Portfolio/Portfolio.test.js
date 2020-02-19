import React from 'react';
import { shallow } from 'enzyme';
import Portfolio from './Portfolio';

describe('Portfolio', () => {

	let component;
	beforeEach(() => {
		const match = {
			params: {
				id: '5e4d48a11368db000418c4d2'
			}

		}
		const tempPortfolio = {
			userId: 'John Smith',
			_id: '5e4d48a11368db000418c4d2',

		}
		component = shallow(<Portfolio match={match} />);
	});

	it('should initialize component with state.port set to null', () => {
		expect(component.state('port')).toBeNull();
	});
})
