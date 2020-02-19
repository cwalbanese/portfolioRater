import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('About component', () => {
	it('should render as expected', () => {
		const component = shallow(<About />)
		expect(component.contains(<p>
			This application was created as a collaborative project between software
			engineers: Chris Albanese, Skyler Bond, and Jarod McGill.
      </p>)).toBe(true)
	})
})