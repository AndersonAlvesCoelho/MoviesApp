// IMPORTS
import {ReactNode, createContext, useContext, useState} from 'react';

import api from '../services/api';
import { useQuery } from '@tanstack/react-query';

interface MoviesProps {
  id: string;
  author: string;
  title: string;
  cover: string;
  categories: string;
}

interface MoviesContextProps {
}

const MoviesContext = createContext<MoviesContextProps>({});

interface Props {
  children: ReactNode;
}

function MoviesProvider({children}: Props) {
  const fetchMoviePopular = async () => {
    try {
      const {data} = await api.get('movie/popular');
      console.log('Dados da API:', data);
      return data.results;
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
      throw error;
    }
  }
  const userMovePopular = useQuery({
    queryKey: ['repoData'],
    queryFn: () => api.get('movie/popular').then(res => res.data.results),
  });



  return <MoviesContext.Provider value={{}}>{children}</MoviesContext.Provider>;
}

const useMoviesContext = () => useContext(MoviesContext);

export {MoviesProvider, useMoviesContext};
