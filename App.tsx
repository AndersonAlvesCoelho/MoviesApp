import React from 'react';
import {StatusBar} from 'react-native';

import RouteNavigation from './src/route';

import {useThemeMode} from './src/context/ThemeContext';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ContainerSafeAreaView} from './src/assets/styles/global';

export default function App() {
  const {theme} = useThemeMode();

  return (
    <ContainerSafeAreaView>
      <StatusBar
        barStyle={theme !== 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme !== 'dark' ? Colors.lighter : Colors.darker}
      />
      <RouteNavigation />
    </ContainerSafeAreaView>
  );
}
