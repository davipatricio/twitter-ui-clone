import styled, { css } from 'styled-components';
import {
  ArrowLeft,
  Email,
  Home,
  Notifications,
  Search,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid ${({ theme }) => theme.outline};
    border-right: 1px solid ${({ theme }) => theme.outline};
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.primary};

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid ${({ theme }) => theme.outline};

  /* Back button */
  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.twitterDarkHover};
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  height: 24px;
  width: 24px;

  fill: ${({ theme }) => theme.twitter};
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  /* Profile name */
  > strong {
    font-size: 19px;
  }

  /* Tweet amount */
  > span {
    font-size: 15px;
    color: ${({ theme }) => theme.gray};
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: ${({ theme }) => theme.primary};
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.outline};

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

const iconCSS = css`
  height: 31px;
  width: 31px;

  cursor: pointer;

  fill: ${({ theme }) => theme.gray};

  &:hover,
  &.active {
    fill: ${({ theme }) => theme.twitter};
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const SearchIcon = styled(Search)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
