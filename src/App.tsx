import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ActivityIndicator,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.lighter,
  },
});

const App = () => {
  return (
    <View style={[styles.container]}>
      <Text>Welcome to Test</Text>
      <Button title="test" onPress={() => {}} />
      <ActivityIndicator />
    </View>
  );
};

export default App;
