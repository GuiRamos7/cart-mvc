import { render, fireEvent, screen } from '@testing-library/react';
import { ProductItem } from '.';

describe('Test ProductItem component', () => {
  it('Should render texts', () => {
    render(
      <ProductItem
        title='Title'
        image='/'
        description='Description'
        onClick={() => {}}
        price={100}
      />
    );

    expect(screen.getByTestId('title')).toHaveTextContent('Title');
    expect(screen.getByTestId('description')).toHaveTextContent('Description');
    expect(screen.getByTestId('price')).toHaveTextContent('$100.00');
  });

  it('Should be click', () => {
    const mockCallBack = jest.fn();

    render(
      <ProductItem
        title='Title'
        image='/'
        description='Description'
        onClick={mockCallBack}
        price={100}
      />
    );
    fireEvent.click(screen.getByRole('button'));

    expect(mockCallBack).toHaveBeenCalled();
  });
});
