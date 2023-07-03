import { Input } from 'app/components';
import { media } from 'app/styles/media';
import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 2rem 1rem;
  background: ${props => props.theme.palette.secondary.default};
  display: flex;
  justify-content: center;

  ${media.medium`
    padding: 2.5rem;
  `}
`;

export const Title = styled.span`
  color: ${props => props.theme.palette.primary.p700};
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.2rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  width: 100%;
`;

const customizeInput = (component: typeof Input) => styled(component)`
  ${media.medium`
    width: 30rem;
  `}
`;

export const InputStyled = customizeInput(Input);

export const SearchWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  justify-content: center;

  ${media.medium`
    width:fit-content;
  `}
`;

export const ContentWrapperMediumScreen = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  width: 100%;
`;

export const ContentWrapperMobileScreen = styled.div`
  height: 100%;
  width: 100%;
`;
