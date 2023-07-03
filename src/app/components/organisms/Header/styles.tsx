import { Input } from 'app/components/atoms';
import BagIcon from 'app/components/atoms/svgs/icons/Bag';
import HamburguerMenuIcon from 'app/components/atoms/svgs/icons/HamburguerMenu';
import NikeIcon from 'app/components/atoms/svgs/logos/Nike';
import { media } from 'app/styles/media';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;

  ${media.medium`
    padding: 1rem 2.5rem;
  `}
`;

export const LeftSideWrapper = styled.div`
  width: 100%;
  margin-right: 1rem;
`;

export const CenterWrapper = styled.div`
  display: none;

  ${media.medium`
    display: flex;
    gap: 1.5rem;
  `}
`;

export const RightSideWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: end;
  width: 100%;
  margin-left: 1rem;
`;

const customizeNikeIcon = (component: typeof NikeIcon) => styled(component)`
  width: 2.5rem;
  height: 2rem;
  cursor: pointer;

  ${media.medium`
    width: 3.5rem;
  `}
`;

export const NikeIconStyled = customizeNikeIcon(NikeIcon);

const customizeBagIcon = (component: typeof BagIcon) => styled(component)`
  width: 1.7rem;
  height: 1.7rem;
  cursor: pointer;
`;

export const BagIconStyled = customizeBagIcon(BagIcon);

const customizeHamburguerMenu = (
  component: typeof HamburguerMenuIcon,
) => styled(component)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  ${media.medium`
    display:none;
  `}
`;

export const HamburguerMenuIconStyled =
  customizeHamburguerMenu(HamburguerMenuIcon);

const customizeInput = (component: typeof Input) => styled(component)`
  display: none;

  ${media.medium`
    display: block;
  `}
`;

export const InputStyled = customizeInput(Input);

const customizeHeaderLink = component => styled(component)`
  text-decoration: none;
  color: ${props => props.theme.palette.primary.default};
  font-size: 1rem;
  line-height: 1.5rem;
  white-space: nowrap;
  font-weight: bold;

  :visited {
    color: ${props => props.theme.palette.primary.p700};
  }
`;

export const HeaderLinkStyled = customizeHeaderLink(NavLink);
