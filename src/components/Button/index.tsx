/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled from 'styled-components';

interface ButtonProps {
  outline?: boolean;
}

export default styled.button<ButtonProps>`
  background: ${(props) =>
    props.outline ? 'transparent' : props.theme.twitter};
  color: ${(props) =>
    props.outline ? props.theme.twitter : props.theme.white};
  border: ${(props) =>
    props.outline ? `1px solid ${props.theme.twitter}` : 'none'};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${(props) =>
      props.outline
        ? props.theme.twitterDarkHover
        : props.theme.twitterLightHover};
  }
`;
