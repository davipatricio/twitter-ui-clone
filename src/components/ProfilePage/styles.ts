import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/Icons';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background: ${({ theme }) => theme.twitter};

  position: relative;
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.gray};
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  /* Profile name */
  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  /* Profile handle */
  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: ${({ theme }) => theme.gray};
  }

  /* Profile description */
  > p {
    font-size: 15px;
    margin-top: 11px;

    /* Profile links */
    > a {
      text-decoration: none;
      color: ${({ theme }) => theme.twitter};
    }
  }

  /* Profile icons */
  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      font-size: 15px;
      color: ${({ theme }) => theme.gray};

      > svg {
        fill: ${({ theme }) => theme.gray};
        margin-right: 5px;
      }
    }
  }
`;

const iconCSS = css`
  height: 20px;
  width: 20px;

  color: ${({ theme }) => theme.gray};
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;
export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: ${({ theme }) => theme.gray};

    /* Add margin to all spans except the first one */
    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;
