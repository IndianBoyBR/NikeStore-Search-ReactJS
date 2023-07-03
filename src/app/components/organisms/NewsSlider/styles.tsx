import ArrowLeftIcon from 'app/components/atoms/svgs/icons/ArrowLeft';
import ArrowRightIcon from 'app/components/atoms/svgs/icons/ArrowRight';
import { media } from 'app/styles/media';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.palette.secondary.s200};
  padding: 0.5rem 1rem;

  ${media.medium`
    padding: 0.5rem 2.5rem;
  `}
`;

const CustomizeArrowIcons = (component: typeof ArrowLeftIcon) => styled(
  component,
)`
  width: 1rem;
  height: 1rem;
`;

export const ArrowLeftIconStyled = CustomizeArrowIcons(ArrowLeftIcon);

export const ArrowRightStyled = CustomizeArrowIcons(ArrowRightIcon);

export const FadeIn = keyframes`
  0%  { opacity: 0; }
  100% { opacity: 1;}
`;

export const Content = styled.div`
  flex-direction: column;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${props => props.theme.palette.primary.p700};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  max-width: 40rem;
  text-align: center;

  ${media.medium`
    flex-direction: row;
    gap: 1.5rem;
  `}

  animation: ${FadeIn} 0.6s ease-in-out;
`;

const customizeLink = (component: typeof NavLink) => styled(component)`
  text-decoration: underline;
  color: ${props => props.theme.palette.primary.p700};
  font-size: 0.875rem;
  line-height: 1.5rem;
  white-space: nowrap;
`;

export const Link = customizeLink(NavLink);

export const Image = styled.img`
  height: 2rem;
  width: 2rem;
`;

export const ArrowButtonWrapper = styled.button`
  background-color: ${props => props.theme.palette.secondary.default};
  padding: 0.5rem;
  border-radius: 50%;
  font-size: 0;
  cursor: pointer;
  outline: none;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const Message = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  column-gap: 0.5rem;
  flex-wrap: wrap;

  ${media.medium`
    gap: 1.5rem;
  `}
`;
