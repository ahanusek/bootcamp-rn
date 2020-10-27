import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthNavigator } from '@/routes/Auth/AuthNavigator';
import { ActivityIndicator, View } from 'react-native';
import { palette } from '@/theme';
import { MainNavigator } from '@/routes/Main/MainNavigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.white,
  },
};

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
      updateAuthState({ isLoading: false, userToken: '1244' });
    }, 3000);
  }, []);

  if (auth.isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color={palette.darkBlue} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        {!auth.userToken ? <AuthNavigator /> : <MainNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
