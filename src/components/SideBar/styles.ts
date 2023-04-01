import styled from 'styled-components';

import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);

  position: fixed;
  top: 0;
  z-index: 2;
  background: ${({ theme }) => theme.primary};

  max-height: 57px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background: ${({ theme }) => theme.search};
  outline: 0;

  &::placeholder {
    color: ${({ theme }) => theme.gray};
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;
    transition: 180ms ease-in-out;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.twitter};

    ~ svg {
      fill: ${({ theme }) => theme.twitter};
    }
  }
`;

export const SearchIcon = styled(Search)`
  height: 27px;
  width: 27px;

  fill: ${({ theme }) => theme.gray};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 57px 24px 200px;
  margin-top: 3px;

  > div + div {
    margin-top: 15px;
  }
`;
