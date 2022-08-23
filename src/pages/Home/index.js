import { ProductItem } from 'components';
export const Home = () => {
  return (
    <div>
      Welcome to our shop!
      <p>
        You are probably interested in <a href='/products/a'>A</a>.
        <ProductItem />
      </p>
      <p>
        Check out the newest product <a href='/products/b'>B</a>!
      </p>
    </div>
  );
};
