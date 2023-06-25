import React from 'react';
import { fireEvent, render, screen} from '@testing-library/react';
import SearchBar from '../SeachBar';

describe('<SearchBar /> component', () => {
    test('should render correctly', () => {
        // The following basically renders our component
        render(<SearchBar />);
        // From the rendered component, find an element with the role of 'textbox;
        // This will find our input field
        const textfield = screen.getByRole('textbox');
        // Check that the input field is in the document
        expect(textfield).toBeInTheDocument();
    });
    test('textfield onChange should call handleQueryInput() and onSubmit search() function should be called', () => {
        // In the lines that follow, we are mocking functions that are
        // passed as props to our component
        const handleQueryInput = jest.fn();
        const search = jest.fn();
        render(
            <SearchBar
                // The following are props passed to our component
                handleQueryInput={ handleQueryInput }
                search={search}
                query=''
            />
        );
        // Find our input field element
        const textfield = screen.getByRole('textbox');
        // Simulate a user input event
        fireEvent.change(textfield, { target: { name: 'locationName', value: 'test' } });
        // Check that the expected function is called after a user types some text
        expect(handleQueryInput).toBeCalledTimes(1);
        // Simulate a form submit event
        fireEvent.submit(screen.getByTestId('form'));
        // Check that the expected fuction is called when a user submit the form
        expect(search).toBeCalledTimes(1);
    });
})