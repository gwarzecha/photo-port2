import React from 'react';
// the render function renders the component, which is a simulated DOM to approximate the DOM
// the cleanup func is used to remove components from the DOM to prevent memory leaking
import { render, cleanup } from '@testing-library/react';
// jest-dom offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// ensures that after each test, there won't be leftover memory data that could give false results
afterEach(cleanup);
// declares the component to be tested
describe('About component', () => {
  // first test (verifies component is rendering)
  it('renders', () => {
    render(<About />);
  });

  // second test (a callback func that runs the test)
  it('matches snapshot DOM node structure', () => {
    // asFragment returns a snapshot of the About component
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  })
})