import { Avatar, Container, FollowButton, Info } from './styles';

interface FollowSuggestionProps {
  name: string;
  handle: string;
}

export default function FollowSuggestion({
  name,
  handle,
}: FollowSuggestionProps) {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{handle}</span>
        </Info>
      </div>

      <FollowButton outline>Seguir</FollowButton>
    </Container>
  );
}
