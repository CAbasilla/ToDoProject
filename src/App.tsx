import '../global.css';
import React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { verifyInstallation } from 'nativewind';
import { MainNavigation } from './navigation/mainNavigation';
import TodoContextProvider from './store/context/todoContext';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'aliceblue',
      secondary: '#663399',
    },
  };

export default function App() {
  verifyInstallation();
  return (
    <PaperProvider theme={theme}>
      <TodoContextProvider>
        <Provider store={store}>
          <MainNavigation />
        </Provider>
      </TodoContextProvider>
    </PaperProvider>
  );
}
