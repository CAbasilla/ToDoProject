import React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { MainNavigation } from './navigation/mainNavigation';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'aliceblue',
      secondary: '#663399',
    },
  };

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <MainNavigation />
    </PaperProvider>
  );
}
