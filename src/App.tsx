import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from '@/screens/SplashScreen/SplashScreen';
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
  const [auth, updateAuthState] = useState({
    isLoading: true,
    userToken: null,
  });
  useEffect(() => {
    setTimeout(() => {
      updateAuthState({ isLoading: false, userToken: null });
    }, 3000);
  }, []);

  if (auth.isLoading) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
