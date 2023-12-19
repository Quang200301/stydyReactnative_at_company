import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {useStore} from '../asyncStorage/ExamLogin';
export default function Message() {
  const {token, setToken} = useStore(state => ({
    token: state.token,
    setToken: state.setToken,
  }));
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Message </Text>
      <Text style={styles.text}>{token} </Text>
      <Button title="Click here" onPress={() => setToken('Hello word')} />
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
