import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '@/screens/Dashboard/Dashboard';

const App = () => {
  return (
    <NavigationContainer>
      <Dashboard />
    </NavigationContainer>
  );
};

export default App;
