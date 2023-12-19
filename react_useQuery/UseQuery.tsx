/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
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
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <Text style={styles.text}>Name:{item.name}</Text>
        <Text style={styles.text}>Price:{item.price}</Text>
      </View>
    );
  };
  const ListHeader = () => {
    return (
      <View style={styles.listheader}>
        <Text style={styles.header}>This is Header </Text>
      </View>
    );
  };
  const ListFooter = () => {
    return (
      <View style={styles.listheader}>
        <Text style={styles.header}>This is Footer </Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  image: {
    width: 130,
    height: 130,
    objectFit: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    marginHorizontal: 12,
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  listheader: {
    backgroundColor: 'lightblue',
    height: 200,
    marginHorizontal: 12,
    marginVertical: 12,
  },
  header: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
  },
});
