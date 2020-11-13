import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Host } from 'react-native-portalize';
import AuthNavigator from '@/routes/Auth/AuthNavigator';
import MainNavigator from '@/routes/Main/MainNavigator';
import { palette } from '@/theme';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.white,
  },
};

const App = () => {
  const [auth, updateAuthState] = useState<{ token: string | null }>({
    token: null,
  });

  useEffect(() => {
    setTimeout(() => {
      updateAuthState({ token: '123r3' });
    }, 2000);
  }, []);

  return (
    <Host>
      <NavigationContainer theme={MyTheme}>
        {auth.token ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </Host>
  );
};

export default App;
