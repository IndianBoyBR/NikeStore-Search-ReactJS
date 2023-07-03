import { media } from 'app/styles/media';
import styled from 'styled-components/macro';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.palette.secondary.s200};
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;

  ${media.medium`
    padding: 4rem 2.5rem;
  `}
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.2rem;
  color: ${props => props.theme.palette.primary.p700};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  text-align: center;
`;

export const Message = styled.span`
  font-style: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${props => props.theme.palette.primary.p700};
  margin-bottom: 1rem;
  text-align: center;
`;
