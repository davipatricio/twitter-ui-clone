import { Pencil } from 'styled-icons/heroicons-solid';
import Button from '../Button';
import {
  Container,
  Topside,
  MenuButton,
  Logo,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BottomSide,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

export default function MenuBar() {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <Pencil />
          <span>Tweetar</span>
        </Button>
      </Topside>

      <BottomSide>
        <Avatar />

        <ProfileData>
          <strong>Davi Patricio</strong>
          <span>@davipatricio</span>
        </ProfileData>

        <ExitIcon />
      </BottomSide>
    </Container>
  );
}
