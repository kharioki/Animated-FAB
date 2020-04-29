import React from 'react';
import {StyleSheet, View, StatusBar, Image} from 'react-native';

import FloatingButton from './components/FloatingButton';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Image
          source={require('./assets/gmap.png')}
          resizeMode="cover"
          style={{width: 500, height: 900, opacity: 0.5}}
        />

        <FloatingButton style={{bottom: 0}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
