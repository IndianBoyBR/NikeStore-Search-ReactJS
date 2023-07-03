import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 1rem;
  border-radius: 0.625rem;
  background-color: ${props => props.theme.palette.secondary.s200};
`;

export const Filters = styled.div`
  display: flex;
  justify-content: end;
`;

export const List = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
