import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 0;
  box-shadow: 0 0 5px 0px #e2e2e2;
  padding: 18px;
  box-sizing: border-box;
  width: 255px;
  border-radius: 24px;
  img {
    width: 100%;
    height: 220px;
    margin: auto;
    object-fit: cover;
    border-radius: 24px;
  }
`;

export const Title = styled.h2`
  font-size: 17px;
  margin: 10px 0;
`;

export const Description = styled.p`
  color: #8b8b8b;
  font-size: 13px;
`;

export const Price = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 2px 0 15px;
`;
