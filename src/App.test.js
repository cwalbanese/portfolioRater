import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
	it('should render as expected', () => {
		const component = shallow(<App />)
		expect(component.contains(<h2>Portfolio Rater</h2>)).toBe(true)
	})
})