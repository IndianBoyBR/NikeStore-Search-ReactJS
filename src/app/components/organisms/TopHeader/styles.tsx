import Jordan from 'app/components/atoms/svgs/logos/Jordan';
import SnkrsIcon from 'app/components/atoms/svgs/logos/Snkrs';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.palette.secondary.s200};
  padding: 1rem 2.5rem;
`;

export const LeftIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const RightIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const customizeJordanIcon = (component: typeof Jordan) => styled(
  component,
)`
  width: 1.8rem;
  height: 1.8rem;
`;

export const JordanIconStyled = customizeJordanIcon(Jordan);

export const customizeSnkrsIcon = (component: typeof SnkrsIcon) => styled(
  component,
)`
  width: 2.9rem;
  height: 2.9rem;
`;

export const SnkrsIconStyled = customizeSnkrsIcon(SnkrsIcon);

const customizeNavLink = (component: typeof NavLink) => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.secondary.s500};
  font-size: 0.75rem;
  line-height: 1.5rem;

  :visited {
    color: ${props => props.theme.palette.secondary.s500};
  }
`;

export const TopHeaderNavLink = customizeNavLink(NavLink);

export const VerticalLineSeparator = styled.span`
  height: 1.5rem;
  border-left: 1px solid ${props => props.theme.palette.secondary.s500};
`;
