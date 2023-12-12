import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import AppLogic from './AppLogic';

export default function Search() {
  const {search, setSearch} = AppLogic();

  return (
    <View>
      <TextInput
        style={styles.input}
        value={search}
        placeholder="Search for names.."
        onChangeText={keyword => setSearch(keyword)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
  },
});
