import styled from 'styled-components';

export const Container = styled.div`
  .products {
    margin: 35px auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    gap: 50px auto;

    @media (max-width: 500px) {
      justify-items: center;
      align-items: center;
    }
  }
`;
