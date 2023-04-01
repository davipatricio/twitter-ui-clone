import styled from 'styled-components';

export { default as Tweet } from '../Tweet';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: ${({ theme }) => theme.twitter};
  border-bottom: 2px solid ${({ theme }) => theme.twitter};

  &:hover {
    background: ${({ theme }) => theme.twitterDarkHover};
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
