import React, { useEffect, useState } from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from '@/routes/Main/MainNavigator';
import { Host } from 'react-native-portalize';
import { palette } from '@/theme';
import AuthNavigator from '@/routes/Auth/AuthNavigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.white,
  },
};

enableScreens();

const App = () => {
  const [auth, updateAuthState] = useState<{
    isLoading: boolean;
    userToken: string | null;
  }>({
    isLoading: true,
    userToken: null,
  });
  useEffect(() => {
    setTimeout(() => {
      updateAuthState({ isLoading: false, userToken: '124' });
    }, 3000);
  }, []);

  return (
    <SafeAreaProvider>
      <Host>
        <NavigationContainer theme={MyTheme}>
          {auth.userToken ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </Host>
    </SafeAreaProvider>
  );
};

export default App;
