import FollowSuggestion from '../FollowSuggestion';
import List from '../List';
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

      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="John Doe" handle="@johndoe" key="user1" />,
            <FollowSuggestion name="Jone Doe" handle="@jonedoe" key="user2" />,
            <FollowSuggestion name="Jene Doe" handle="@jenedoe" key="user3" />,
          ]}
        />
      </Body>
    </Container>
  );
}
