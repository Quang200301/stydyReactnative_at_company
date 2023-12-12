import {useEffect, useState} from 'react';
import DataUser from './dataUser';
type Milktea = {
  id: number;
  name: string;
  age: number;
  avatar: string; // Change type based on your data
};

const AppLogic = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [selectMilktea, setSelectMilktea] = useState<Milktea | null>();
  const [filterResult, setfilterResult] = useState(DataUser);
  const [search, setSearch] = useState<string>('');

  const onPressMe = (item: Milktea) => {
    setModalVisible(true);
    setSelectMilktea(item);
  };

  useEffect(() => {
    const filtered = DataUser.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
    setfilterResult(filtered);
  }, [search]);
  return {
    search,
    modalVisible,
    selectMilktea,
    filterResult,
    onPressMe,
    setSearch,
    setModalVisible,
  };
};

export default AppLogic;
