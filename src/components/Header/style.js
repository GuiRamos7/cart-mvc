import styled from 'styled-components';

export const Header = styled.header`
  a {
    text-decoration: none;
  }
  nav {
    margin: 20px 0 0;
  }
  ul {
    display: flex;
    list-style-type: none;
  }
`;

export const Title = styled.h1`
  font-style: italic;
  color: #3574ff;
`;

export const Link = styled.h2`
  color: #131313;

  font-size: 15px;
  padding: 5px 25px;
  border-radius: 20px;
`;
