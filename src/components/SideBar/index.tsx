/* eslint-disable react/jsx-key */
import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
import News from '../News';
import StickyBox from 'react-sticky-box';

import {
  Body,
  Container,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from './styles';

export default function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="John Doe" handle="@johndoe" />,
              <FollowSuggestion name="Jone Doe" handle="@jonedoe" />,
              <FollowSuggestion name="Jene Doe" handle="@jenedoe" />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}
