import styled, { css } from 'styled-components';

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  Repost,
  ExitToApp,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Repost)`
  height: 41px;
  width: 41px;

  > path {
    fill: ${({ theme }) => theme.twitter};
  }
`;

export const MenuButton = styled.button`
  cursor: pointer;
  border-radius: 25px;
  padding: 8.25px 0;
  outline: 0;

  &:hover {
    background: ${({ theme }) => theme.twitterDarkHover};
  }

  &:hover,
  &.active {
    span,
    svg {
      color: ${({ theme }) => theme.twitter};
      fill: ${({ theme }) => theme.twitter};
    }
  }

  > span {
    display: none;

    @media (min-width: 1280px) {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }
  }

  /* Add margin to all buttons except the first one */
  & + button {
    margin-top: 16.5px;
  }

  /* Tweet button */
  & + button:last-child {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;
    padding: 0;

    margin-top: 33px;

    height: 40px;
    width: 40px;

    > span {
      display: none;
    }

    > svg {
      color: ${({ theme }) => theme.white};
      height: 20px;
      width: 20px;
    }

    @media (min-width: 1280px) {
      padding: 8.25px 15px;
      width: 100%;
      height: unset;

      > span {
        display: inline;
        width: initial;
      }

      > svg {
        display: none;
        visibility: hidden;
      }
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.white};
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;

export const BottomSide = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  height: 39px;
  width: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background: ${({ theme }) => theme.gray};
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    /* User Handle */
    > span {
      color: ${({ theme }) => theme.gray};
    }
  }
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    height: 25px;
    width: 25px;
    color: ${({ theme }) => theme.white};
    margin-left: 30px;
    cursor: pointer;

    &:hover > path {
      color: ${({ theme }) => theme.like};
    }
  }
`;
