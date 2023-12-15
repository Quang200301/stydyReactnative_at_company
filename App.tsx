// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// const App = () => {
//   const getTime = () => {
//     const timeNow = new Date();
//     const hours = String(timeNow.getHours());
//     const minutes = String(timeNow.getMinutes());
//     const seconds = String(timeNow.getSeconds()).padStart(2, '0');
//     return `${hours}:${minutes}:${seconds}`;
//   };

//   const [time, setTime] = useState(getTime());
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(getTime());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <View style={styles.container}>
//       <Text>Hello, world!</Text>
//       <Text style={styles.times}>{time}</Text>
//     </View>
//   );
// };
// export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   times:{
//     fontSize:40,
//   }
// });
// import {View, Text, SectionList} from 'react-native';
// import React from 'react';
// const students = [
//   {
//     id: 1,
//     name: 'Suu',
//     age: 26,
//   },
//   {
//     id: 2,
//     name: 'Tien',
//     age: 24,
//   },
//   {
//     id: 3,
//     name: 'Tu',
//     age: 19,
//   },
//   {
//     id: 4,
//     name: 'Huong',
//     age: 20,
//   },
//   {
//     id: 5,
//     name: 'Thien',
//     age: 22,
//   },
//   {
//     id: 6,
//     name: 'Sen',
//     age: 21,
//   },
//   {
//     id: 7,
//     name: 'Quang',
//     age: 24,
//   },
//   {
//     id: 8,
//     name: 'Luan',
//     age: 23,
//   },
// ];

// import React from 'react';
// import {SectionList, StyleSheet, Text, View} from 'react-native';

// type Students = {
//   id: number;
//   name: string;
//   age: number;
// };
// const students: Students[] = [
//   {
//     id: 1,
//     name: 'Suu',
//     age: 26,
//   },
//   {
//     id: 2,
//     name: 'Tien',
//     age: 23,
//   },
//   {
//     id: 3,
//     name: 'Tu',
//     age: 19,
//   },
//   {
//     id: 4,
//     name: 'Huong',
//     age: 20,
//   },
//   {
//     id: 5,
//     name: 'Thien',
//     age: 22,
//   },
//   {
//     id: 6,
//     name: 'Sen',
//     age: 21,
//   },
//   {
//     id: 7,
//     name: 'Quang',
//     age: 24,
//   },
//   {
//     id: 8,
//     name: 'Luan',
//     age: 23,
//   },
// ];

// export default function App() {
//   const findStudentByAge = (students: Students[], age: number) => {
//     const result = students.filter(students => students.age === age);
//     console.log('====>result', result);
//     return result;
//   };
//   const groupstudent: Students[] = findStudentByAge(students, 23);
//   const Section = [{title: '23', data: groupstudent}];
//   return (
//     <SectionList
//       style={styles.container}
//       sections={Section}
//       renderItem={({item}) => (
//         <View>
//           <Text style={styles.row}>{item.age}</Text>
//           <Text style={styles.row}>{item.name}</Text>
//         </View>
//       )}
//       renderSectionHeader={({section}) => (
//         <Text style={styles.header}>{section.title}</Text>
//       )}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     padding: 15,
//     marginBottom: 5,
//     backgroundColor: 'steelblue',
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 22,
//   },
//   row: {
//     fontSize: 20,
//   },
// });

import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  Modal,
  Alert,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';
import ShowMilkTea from './android/app/src/Compopnent/ShowMilkTea';
import AppLogic from './android/app/src/Compopnent/AppLogic';

export default function Main() {
  const {
    search,
    modalVisible,
    selectMilktea,
    filterResult,
    onPressMe,
    setSearch,
    setModalVisible,
  } = AppLogic();

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Search for names.."
        value={search}
        onChangeText={keyword => setSearch(keyword)}
      />
      <FlatList
        data={filterResult}
        renderItem={({item}) => (
          <ShowMilkTea milktea={item} updateData={onPressMe} />
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectMilktea ? (
              <View>
                <Text style={styles.modalText}>{selectMilktea.name}</Text>
                <Text style={styles.modalText}>{selectMilktea.age}</Text>
                <Image
                  source={{uri: selectMilktea.avatar}}
                  style={styles.avartars}
                />
              </View>
            ) : null}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avartars: {
    width: 300,
    height: 200,
  },
  age: {
    fontSize: 20,
  },
  name: {
    fontSize: 20,
  },
  showDetail: {
    fontSize: 20,
    color: 'red',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
  },
});
