import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
export default function UseQuery() {
  const {data, isFetching} = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios
        .get('https://645e542e8d08100293fcd90e.mockapi.io/webxedap')
        .then(res => res.data),
  });
  console.log('data------------->', data);
  console.log('isFetching------------->', isFetching);
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Name:{item.name}</Text>
        <Text style={styles.text}>Price:{item.price}</Text>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  image: {
    width: 200,
    height: 200,
    objectFit: 'cover',
  },
  container: {
    flex: 1,
    // backgroundColor: 'lightblue',
    marginHorizontal: 12,
    marginVertical: 12,
  },
});
