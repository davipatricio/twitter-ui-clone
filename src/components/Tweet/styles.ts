import styled, { css } from 'styled-components';

import { Chat, Favorite, Repost } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid ${({ theme }) => theme.outline};

  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: ${({ theme }) => theme.gray};

  > svg {
    height: 16px;
    width: 16px;

    margin-left: 35px;
    margin-right: 9px;

    > path {
      fill: ${({ theme }) => theme.gray};
    }
  }
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

export const Avatar = styled.div`
  height: 49px;
  width: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ theme }) => theme.gray};

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  /* Profile name */
  > strong {
    margin-right: 5px;
  }

  /* Profile handle + create date */
  > span,
  time {
    color: ${({ theme }) => theme.gray};
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: ${({ theme }) => theme.gray};
  height: 2px;
  width: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: ${({ theme }) => theme.outline};
  border-radius: 14px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%; /** Mobile */

  @media (min-width: 330px) {
    width: 63%; /* Tablet */
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 14px;

  &:nth-child(1) {
    &,
    > svg path {
      color: ${({ theme }) => theme.gray};
    }
  }

  &:nth-child(2) {
    color: ${({ theme }) => theme.retweet};

    > svg path {
      fill: ${({ theme }) => theme.retweet};
    }
  }

  &:nth-child(3) {
    color: ${({ theme }) => theme.like};

    > svg path {
      fill: ${({ theme }) => theme.like};
    }
`;

const iconCSS = css`
  height: 19px;
  width: 19px;
`;

export const CommentIcon = styled(Chat)`
  ${iconCSS}
`;

export const RetweetIcon = styled(Repost)`
  ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;
