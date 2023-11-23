import {useThemeMode} from '../../context/ThemeContext';
import {
  Container,
  IconSlider,
  UserContainer,
  UserImage,
  UserName,
} from './styles';

export default function Header() {
  const {theme} = useThemeMode();

  return (
    <Container>
      <UserContainer>
        <UserImage source={require('../../assets/images/avatar.png')} />
        <UserName theme={theme}>Hi, Anderson</UserName>
      </UserContainer>

      <IconSlider source={require('../../assets/images/icons/slider.svg')} />
    </Container>
  );
}
