import styled, { css } from 'styled-components/macro';
import { ConvertHexToRGBA } from 'utils/helpers';

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  left: 5%;
  top: 10%;
  width: 90%;
  height: 80%;
  overflow: auto;
  box-shadow: 0 0 4rem rgb(0 0 0 / 10%);
  border-radius: 0.625rem;
`;

export const CloseButton = styled.button`
  ${props => css`
    background-color: ${props.theme.palette.primary.default};
    background-color: ${props.theme.palette.secondary.default};
    box-shadow: 0 0.2rem 0.5rem
      ${ConvertHexToRGBA(props.theme.palette.primary.default, 0.2)};
  `}

  border-radius: 50%;
  cursor: pointer;
  outline: none;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1rem;
  z-index: 999;
  position: fixed;
  bottom: 0.4rem;
  right: 5%;
`;
