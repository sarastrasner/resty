import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Results from './results';
import React from 'react';

xtest('count is only defined after an API call', () => {
  const wrapper = mount(Count, {
    propsData: {
      count: '12'
    }
  })
  render(<Results />);
  const count = screen.getByTestId('count');
  expect(count).toBe('12');
});

test("Makes an API call with a given URL", async () => {
    const URL = 'https://swapi.dev/api/people';
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(URL)
      })
  );
});


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders with or without a API data", () => {
  act(() => {
    render(<Results />, container);
  });
  expect(container.textContent).toBe('');
});