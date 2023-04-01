import { Container, Item, Title } from './styles';

interface ListProps {
  title: string;
  elements: React.ReactNode[];
}

export default function List({ title, elements }: ListProps) {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
}
