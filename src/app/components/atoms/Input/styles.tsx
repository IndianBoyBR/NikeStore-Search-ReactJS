import MagnifierIcon from 'app/components/atoms/svgs/icons/Magnifier';
import styled, { css } from 'styled-components/macro';

export const Label = styled.label`
  width: 100%;
  position: relative;
`;

export const customizeMagnifierIcon = (
  component: typeof MagnifierIcon,
) => styled(component)`
  position: absolute;
  content: '';
  width: 1rem;
  height: 1rem;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const MagnifierIconStyled = customizeMagnifierIcon(MagnifierIcon);

export const SearchInputWrapper = styled.input<{
  showSearchIcon?: boolean;
  isRounded?: boolean;
  noBorders?: boolean;
  secondary?: boolean;
}>`
  font-size: 1rem;
  padding: 0.9rem 2.5rem 0.9rem 0.5rem;
  outline: none;
  width: 100%;

  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }

  background-color: ${props => props.theme.palette.secondary.default};
  border: 1px solid ${props => props.theme.palette.secondary.s300};
  color: ${props => props.theme.palette.secondary.s500};

  ${props =>
    props.secondary &&
    css`
      background-color: ${props => props.theme.palette.secondary.s200};
      border: none;
    `};

  ::placeholder {
    color: ${props => props.theme.palette.secondary.s500};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${props => props.theme.palette.secondary.s500};
  }

  ${props =>
    props.isRounded &&
    css`
      border-radius: 3.125rem;
    `};

  ${props =>
    props.showSearchIcon &&
    css`
      padding: 0.85rem 0.85rem 0.85rem 2.5rem;
    `};

  ${props =>
    props.noBorders &&
    css`
      border: none;
    `};
`;
