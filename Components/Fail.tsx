import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

export default function Fail({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fail </Text>
      <Button
        title="go to setting"
        onPress={() => navigation.navigate('message')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
    paddingTop: 100,
  },
});
