import styled, { keyframes } from 'styled-components/macro';

export const Container = styled.div`
  font-size: 0.875rem;
  display: contents;

  * {
    scrollbar-width: 0;
  }

  *::-webkit-scrollbar {
    background-color: ${props => props.theme.palette.secondary.default};
    width: 0.5rem;
    border-radius: 0.625rem;
  }

  *::-webkit-scrollbar-button {
    display: none;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.palette.primary.default};
    border-radius: 0.625rem;
  }

  *::-webkit-scrollbar-track {
    background-color: ${props => props.theme.palette.secondary.default};
    border-radius: 0.625rem;
  }

  *::-webkit-scrollbar-track:hover {
    background-color: ${props => props.theme.palette.secondary.default};
  }

  *::-webkit-scrollbar-thumb:hover {
    border: 0.5rem solid ${props => props.theme.palette.primary.default};
  }
`;

export const FieldSet = styled.fieldset`
  border: none;
  max-width: fit-content;
  max-height: fit-content;
`;

export const Legend = styled.legend`
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Summary = styled.summary`
  border: none;
  padding-left: 0.5rem;
  position: relative;
  border-radius: 0.25rem;
  cursor: pointer;
  list-style: none;
  padding-right: 2rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  color: ${props => props.theme.palette.primary.p700};
  background-color: transparent;

  ::after {
    content: '';
    border: solid ${props => props.theme.palette.primary.default};
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 0.25rem;
    transform: translateY(-50%) rotate(45deg);
    transition-property: transform;
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
    right: 0;
    top: 40%;
    position: absolute;
  }

  &::-webkit-details-marker {
    display: none;
  }
`;

export const Details = styled.details`
  position: relative;

  &[open] > summary {
    ::after {
      transform: rotate(225deg);
    }
  }
`;

export const Label = styled.label`
  position: relative;
  cursor: pointer;
  box-sizing: content-box;
`;

export const Input = styled.input`
  visibility: hidden;
  position: absolute;
  transition: all 0.2s ease 0s;
  background-color: ${props => props.theme.palette.secondary.s200};
  color: ${props => props.theme.palette.primary.default};

  :checked + span {
    background-color: ${props => props.theme.palette.primary.default};
    color: ${props => props.theme.palette.secondary.default};
  }
`;

export const Title = styled.span`
  display: block;
  padding: 1rem;
  border-radius: 0.25rem;
  margin: 0.5rem 0;
  transition: all 0.2s ease 0s;
  white-space: nowrap;

  background-color: ${props => props.theme.palette.secondary.s200};
  color: ${props => props.theme.palette.primary.p700};

  :hover {
    background-color: ${props => props.theme.palette.primary.default};
    color: ${props => props.theme.palette.secondary.default};
  }
`;

const FadeIn = keyframes`
  0%  { opacity: 0; }
  100% { opacity: 1; }
`;

export const Options = styled.div`
  position: absolute;
  background-color: ${props => props.theme.palette.secondary.s200};
  border: none;
  padding: 0.5rem;
  overflow-y: auto;
  max-height: 8rem;
  box-shadow: 0 0.2rem 0.5rem rgb(0 0 0 / 10%);
  border-radius: 0.25rem;
  animation: ${FadeIn} 0.4s ease-in-out;
`;
