import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Account {
  username: string;
  password: string;
}
export default function Profile() {
  const [data, setData] = useState<Account | null>(null);
  const account = async () => {
    try {
      const value = await AsyncStorage.getItem('account');
      setData(value != null ? JSON.parse(value) : null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Button title="get Data" onPress={account} />
      <Text style={styles.text}>{data?.username}</Text>
      <Text style={styles.text}>{data?.password}</Text>
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
