import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Milktea from './AppLogic';
type Milktea = {
  id: number;
  name: string;
  age: number;
  avatar: string;
};
interface ShowMilkTeaProps {
  milktea: Milktea;
  updateData: (item: Milktea) => void;
}
const ShowMilkTea: React.FC<ShowMilkTeaProps> = ({
  milktea,
  updateData,
}: ShowMilkTeaProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: milktea.avatar}} style={styles.avartars} />
      <View>
        <Text style={styles.name}>{milktea.name}</Text>
        <Text style={styles.age}>{milktea.age}</Text>
      </View>
      <TouchableOpacity onPress={() => updateData(milktea)}>
        <Text style={styles.showDetail}> Show Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    marginHorizontal: 12,
    marginVertical: 10,
    flexDirection: 'row',
    borderRadius: 12,
  },
  avartars: {
    width: 150,
    height: 150,
    borderRadius: 100,
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
});

export default ShowMilkTea;
