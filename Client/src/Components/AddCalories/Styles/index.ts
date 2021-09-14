import styled from 'styled-components';

export const Subbtn = styled.button`
  margin: 1rem 0;
  padding: 8px;
  background-color: blue;
  color: white;
  font-weight: 600;
  border: 0.2px solid #f1f1f1;
  border-radius: 5px;
  :disabled {
    background-color: lightblue;
  }
  &:hover {
    cursor: pointer;
  }
`;
