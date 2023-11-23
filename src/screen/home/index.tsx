import {useQuery} from '@tanstack/react-query';

// SERVICES
import {useThemeMode} from '../../context/ThemeContext';
import api from '../../services/api';

//  COMPONENTS
import Slider from '../../components/Slider';

// STYLES COMPONENTS
import {Container, Title} from './styles';

export default function Home() {
  const {theme} = useThemeMode();

  const {isLoading, error, data, status} = useQuery({
    queryKey: ['repoData'],
    queryFn: () => api.get('movie/popular').then(res => res.data.results),
  });

  return (
    <Container>
      <Title theme={theme}>Popular Movies</Title>

      <Slider isLoading={isLoading} error={error} data={data} status={status} />
    </Container>
  );
}
