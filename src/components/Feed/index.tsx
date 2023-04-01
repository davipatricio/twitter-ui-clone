import { Container, Tweets, Tweet, Tab } from './styles';

export default function Feed() {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
}
