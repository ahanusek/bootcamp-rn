import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthNavigator } from '@/routes/Auth/AuthNavigator';
import { MainNavigator } from '@/routes/Main/MainNavigator';
import { palette } from '@/theme';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.white,
  },
};

const App = () => {
  const [auth, updateAuthState] = useState<{ userToken: string | null }>({
    userToken: null,
  });

  useEffect(() => {
    setTimeout(() => {
      updateAuthState({ userToken: '123423' });
    }, 2000);
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        {!auth.userToken ? <AuthNavigator /> : <MainNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
