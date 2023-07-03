import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Details = styled.details`
  width: 100%;
  background: ${props => props.theme.palette.primary.default};
  overflow: hidden;
  position: relative;
  color: ${props => props.theme.palette.secondary.default};

  &[open] > summary {
    span:after {
      transform: rotate(90deg);
    }
  }
`;

export const Summary = styled.summary`
  display: block;
  background: ${props => props.theme.palette.primary.default};
  padding: 1rem 0;
  position: relative;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-transform: uppercase;

  ::-webkit-details-marker {
    display: none;
  }
`;

export const Icon = styled.span`
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: absolute;
    transition: 0.2s all ease-in-out;
  }

  &:before {
    top: calc(1px - -50%);
    left: calc(100% - 2rem);
    right: 0.7rem;
    height: 0.1rem;
    background: ${props => props.theme.palette.secondary.s300};
  }

  &:after {
    top: 1.2rem;
    right: 1.3rem;
    bottom: 1rem;
    width: 0.1rem;
    background: ${props => props.theme.palette.secondary.default};
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1.5rem 1rem;
`;

const customizeNavLink = component => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.s200};
  font-size: 0.75rem;
  line-height: 1.5rem;

  :visited {
    color: ${props => props.theme.palette.secondary.s300};
  }
`;

export const NavLinkStyled = customizeNavLink(NavLink);
