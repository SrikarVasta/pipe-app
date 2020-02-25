// import '@testing-library/jest-dom/extend-expect';
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen } from '@testing-library/react';
import CreatePerson from './CreatePerson';

/* Mocking an imported component so that a dummy component is loaded instead of the whole component and it's logic*/
//jest mock takes 2 params: 1s is the path that's mocked and 2nd the optional function that you want to mock it with(a component called mockComponent in this case)
jest.mock('./SelectOrg', () => {
  const mockComponent = () => <div />;
  return mockComponent;
});
test('Basic test case', () => {
  const mountedComponent = render(
    <CreatePerson shown={true} clear={() => {}} />
  );
  //console.log(x); //Logs a whole bunch of methods available for use
  console.log(mountedComponent.debug()); //logs the component in HTML-ish form.
  const setup = () => {
    const input = mountedComponent.getByLabelText('email');
    return {
      input,
      ...mountedComponent
    };
  };
  /**
   * below is the same as
   * const setUpOutput = setup();
   * let input = setUpOutput.input
   * We are destructuring setUpOutput in the line where setup() is being
   * called.
   */
  const { input } = setup();
  //finds the input based above code and executes change to change the value in it 
  //to be 23. The email field is now '23'
  fireEvent.change(input, { target: { value: '23' } });
  expect(input.value).toBe('23'); //should be a success if the value is 33
  /*expect is where we actaully assert the tests and confirm that the value that we've
  obtained by rendering react code through jest and react-testing-lirbary is '23'
  '23' here is our pre decided output and we can have as many test(".... test codeblocks as we want 
  to test any thing as per our requirements
  https://testing-library.com/docs/ has examples on how to simulate formSubmit aswell
  so if we simulate fireEvent.change on all the Input fields we should have the values in our component and we can then test onsubmit.
  */
});
