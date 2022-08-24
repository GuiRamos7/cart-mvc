import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px 0 0;
  display: flex;
  width: 100%;
`;

export const Image = styled.img`
  width: 65vw;
  height: 50vh;
  object-fit: cover;
  border-radius: 15px;
  margin-right: 30px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: #8b8b8b;
  }
  h2 {
    margin-top: 15px;
  }

  button {
    margin-top: auto;
    height: 50px;
  }
`;
