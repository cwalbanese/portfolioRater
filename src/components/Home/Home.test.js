import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {

	let component;
	beforeEach(() => {
		
		component = shallow(<Home />);
	});

	it('should initialize component with state.ports set to null', () => {
		expect(component.state('ports')).toBeNull();
	});
})