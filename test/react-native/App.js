import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import favecon from 'favecon';

const url = 'https://npmjs.com';

favecon.getIcons(url).then(icons => {
  console.log('\n• Get Icons');
  console.log(icons);
});

favecon.getBestIcons(url).then(icons => {
  console.log('\n• Get Best Icons');
  console.log(icons);
});

favecon.getBestIcon(url).then(icon => {
  console.log('\n• Get Best Icon');
  console.log(icon);
});
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
