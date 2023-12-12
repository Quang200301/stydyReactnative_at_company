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
      <Text style={styles.name}>{milktea.name}</Text>
      <Text style={styles.age}>{milktea.age}</Text>
      <TouchableOpacity onPress={() => updateData(milktea)}>
        <Text style={styles.showDetail}> Show Detail</Text>
      </TouchableOpacity>
      <Image source={{uri: milktea.avatar}} style={styles.avartars} />
    </View>
  );
};

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
});

export default ShowMilkTea;
