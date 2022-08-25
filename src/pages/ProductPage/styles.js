import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px 0 0;
  display: flex;
  width: 100%;
`;

export const LoadingContainer = styled.div`
  padding: 25px 0 0;
  display: grid;
  grid-template-columns: 65% 33%;
  gap: 2%;
  width: 100%;
  box-sizing: border-box;

  & > div {
    display: flex;
    flex-direction: column;
  }
  span:last-child {
    margin-top: auto;
  }
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
    width: 100%;
  }
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
