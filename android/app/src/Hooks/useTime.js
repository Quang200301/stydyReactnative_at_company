import {View, Text} from 'react-native';
import React from 'react';

export default function useTime() {
  const getTime = () => {
    const timeNow = new Date();
    const hours = String(timeNow.getHours());
    const minutes = String(timeNow.getMinutes());
    const seconds = String(timeNow.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };
  const [time, setTime] = useState(getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <View>
      <Text>useTime</Text>
    </View>
  );
}
