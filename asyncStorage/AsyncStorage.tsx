// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function AsyncStorageExamp() {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   const saveData = async () => {
//     try {
//       await AsyncStorage.setItem('user', userName);
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//     console.log('user', userName);
//   };

//   const getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('user');
//       if (value !== null) {
//         setUserName(value);
//       }
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="UserName"
//         onChangeText={text => setUserName(text)}
//         value={userName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         onChangeText={text => setPassword(text)}
//         value={password}
//         secureTextEntry={true}
//       />
//       <TouchableOpacity onPress={saveData}>
//         <Text style={styles.save}>Save</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={getData}>
//         <Text style={styles.save}>Show</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   input: {
//     color: 'black',
//     borderWidth: 1,
//     padding: 10,
//     marginHorizontal: 12,
//     marginVertical: 12,
//     backgroundColor: 'lightblue',
//     borderRadius: 12,
//   },
//   save: {
//     fontSize: 30,
//     color: 'black',
//     textAlign: 'center',
//   },
// });
// // import React, {useState} from 'react';
// // import {StyleSheet, Text, View, Button} from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // export default function AsyncStorageExamp() {
// //   const [data, setData] = useState('');
// //   const [userName, setUserName] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleLogin = async() => {
// //     try {
// //       const saveUserName = await;
// //       AsyncStorage.getItem('user');
// //       const savePassWorWord = await;
// //       AsyncStorage.getItem('password');
// //       if (userName === saveUserName && password === saveUserName) {
// //         // Successful login
// //         setData('Login Successful');
// //       } else {
// //         // Incorrect credentials
// //         setData('Incorrect credentials');
// //       }
// //     } catch (error) {}
// //   };
// //   const add = async () => {
// //     try {
// //       await AsyncStorage.setItem('res', 'Hello word ');
// //     } catch (e) {
// //       console.error(e);
// //     }
// //   };

// //   const get = async () => {
// //     try {
// //       const value = await AsyncStorage.getItem('res');
// //       if (value !== null) {
// //         setData(value);
// //       }
// //     } catch (e) {
// //       console.error(e);
// //     }
// //   };
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.text}>{data}</Text>
// //       <View style={styles.button}>
// //         <Button title={'add'} onPress={add} />
// //       </View>
// //       <View style={styles.button}>
// //         <Button title={'get'} onPress={get} />
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   text: {
// //     fontSize: 40,
// //     marginBottom: 30,
// //     color: 'black',
// //   },
// //   button: {
// //     margin: 20,
// //     width: 250,
// //   },
// // });

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
interface Account {
  username: string;
  password: string;
}
export default function Store() {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [data, setData] = useState<Account | null>(null);
  const saveData = async () => {
    let account: Account = {
      username: userName,
      password: password,
    };
    try {
      const json = JSON.stringify(account);
      await AsyncStorage.setItem('account', json);
      console.log(json);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const showData = async () => {
    try {
      const value = await AsyncStorage.getItem('account');
      setData(value != null ? JSON.parse(value) : null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="UserName"
        onChangeText={text => setUserName(text)}
        value={userName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={saveData}>
        <Text style={styles.save}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={showData}>
        <Text style={styles.save}>Show Data</Text>
      </TouchableOpacity>
      <Text style={styles.result}>{data?.username}</Text>
      <Text style={styles.result}>{data?.password}</Text>
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
    backgroundColor: 'lightblue',
    borderRadius: 12,
  },
  save: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  result: {
    color: 'black',
    fontSize: 24,
  },
});
