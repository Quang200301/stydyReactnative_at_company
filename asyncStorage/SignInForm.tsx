import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SignInForm({navigation}: any) {
  const [username, setUserName] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const handleLogin = async () => {
    try {
      const storeAccount = await AsyncStorage.getItem('account');
      let storeaccount;
      if (storeAccount) {
        storeaccount = JSON.parse(storeAccount);
      }
      if (username === storeaccount.username && pass === storeaccount.pass) {
        navigation.navigate('Drawer');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="UserName"
        onChangeText={text => setUserName(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPass(text)}
        value={pass}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.save}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    color: 'black',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 12,
    marginVertical: 12,
    borderRadius: 12,
  },
  save: {
    fontSize: 20,
    color: '#F5F5F5',
    textAlign: 'center',
    backgroundColor: '#212121',
    width: 160,
    padding: 10,
    height: 50,
    marginLeft: 120,
    marginTop: 20,
    borderRadius: 12,
  },
  result: {
    color: 'black',
    fontSize: 24,
  },
  login: {
    color: 'black',
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
