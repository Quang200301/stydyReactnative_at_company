import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface Account {
  username: string;
  pass: string;
  email: string;
}
export default function LoginForm({navigation}: any) {
  const [username, setUserName] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const handleLogin = async () => {
    let account: Account = {
      username: username,
      pass: pass,
      email: email,
    };
    try {
      const json = JSON.stringify(account);
      await AsyncStorage.setItem('account', json);
      console.log('User registered successfully:', json);
      if (username !== '' && pass !== '' && email !== '') {
        navigation.navigate('SignIn');
      } else {
        Alert.alert('vui lòng nhập đủ thông tin');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Sign Up</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.save}>Sign up</Text>
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
