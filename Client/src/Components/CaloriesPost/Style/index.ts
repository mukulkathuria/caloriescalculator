import styled from 'styled-components';

export const RecentComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Comments = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    margin-right: 8px;
    font-weight: 600;
    &:hover {
      color: blue;
    }
  }
  img {
    width: 20px;
  }
  width: 30%;
`;
export const CommentFlex = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    font-size: 0.7em;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
