import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from '.';

describe('Test button component', () => {
  it('Should render text on button', () => {
    render(<Button>Click here</Button>);

    expect(screen.getByRole('button')).toHaveTextContent('Click here');
  });

  it('Should click button', () => {
    const mockCallBack = jest.fn();

    render(<Button onClick={mockCallBack}>Click here</Button>);

    fireEvent.click(screen.getByText('Click here'));

    expect(mockCallBack).toHaveBeenCalled();
  });

  it('Should be disabled', () => {
    render(<Button disabled>Click here</Button>);

    expect(screen.getByRole('button')).toBeDisabled();
  });
});
