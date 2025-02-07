import React, { useState, useEffect }  from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import { Menu } from '../components/Menu';
import { TodoList } from '../components/TodoList';
import ITodo from '../models/todo.model';
import { styles } from '../styles/screenStyles';

const HomeScreen = ({ route }) => {
  const [postData, setPostData] = useState<ITodo[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    if(route.params?.text) {
      if (route.params?.id) {
        const copy = [...postData];
        let data = copy.find((item) => item.id === route.params?.id);
        if(data) {
          data = { ...data, text: route.params.text};
          const index = copy.findIndex((item) => item.id === route.params?.id);
          copy[index] = data;
        }
        setPostData(copy);
      } else {
        const newData = {
          id: `id-${Math.floor(Math.random() * 10000000)}`,
          text: route.params?.text,
        };

        setPostData((d) => [...d, newData]);
        Toast.showWithGravity('Slide added To Do to select actions.', Toast.LONG, Toast.CENTER, {
          tapToDismissEnabled: true,
        });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params?.id, route.params?.text]);

  const onAddTodo = () => {
    navigation.navigate('Add');
  };

  const onEditTodo = (data: ITodo) => {
    navigation.navigate('Edit', { data: data });
  };

  return (
    <View style={styles.viewHome}>
      <Text style={styles.titleHome}>To Do:</Text>
      <TodoList data={postData} setData={setPostData} onEdit={onEditTodo}/>
      <Menu onAddTodo={onAddTodo}/>
    </View>
  );
};

export { HomeScreen };
