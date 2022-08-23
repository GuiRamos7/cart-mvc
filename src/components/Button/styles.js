import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  background: #3574ff;
  border: none;
  width: 100%;
  padding: 4px;
  font-weight: 600;
  color: #fff;
  border-radius: 8px;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;
