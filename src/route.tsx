import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// SERVICES
import {ThemeModeProvider} from './context/ThemeContext';
import {MoviesProvider} from './context/MoviesContext';

// COMPONENTS
import Header from './components/Header';
import Home from './screen/home';

const queryClient = new QueryClient();

export default function RouteNavigation() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeModeProvider>
        <MoviesProvider>
          <Header />
          <Home />
        </MoviesProvider>
      </ThemeModeProvider>
    </QueryClientProvider>
  );
}
