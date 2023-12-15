import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const DrawerContent = ({navigation}: any) => {
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen('home')}>
        <Text style={styles.item}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('setting')}>
        <Text style={styles.item}>Setting</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DrawerContent;
