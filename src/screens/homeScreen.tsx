import React, { useCallback, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { Menu } from '../components/Menu';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../models/todo.model';
import { styles } from '../styles/screenStyles';
import { useGetAllTodosQuery, useGetTodosQuery } from '../services/todoServices';
interface IHomeScreenProps {
  route: any
}

const AllRoute = () => {
  const  { data: todoLists, refetch }  = useGetAllTodosQuery('');
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(()=>{
      refetch();
    }, [refetch])
  );
  const onAddTodo = () => {
    navigation.navigate('Add');
  };

  const onEditTodo = (data: ITodo) => {
    navigation.navigate('Edit', { id:  data.id, text: data.text });
  };

  return (
    <View style={styles.viewHome}>
      <Text style={styles.titleHome}>All To Do:</Text>
      <TodoList onEdit={onEditTodo} view="all" todos={todoLists?.todos} refetch={refetch}/>
      <Menu onAddTodo={onAddTodo}/>
    </View>
  );
};

const DoneRoute = () => {
  const  { data: todoLists, refetch }  = useGetTodosQuery({ status: 1 });
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(()=>{
      refetch();
    }, [refetch])
  );
  const onAddTodo = () => {
    navigation.navigate('Add');
  };

  const onEditTodo = (data: ITodo) => {
    navigation.navigate('Edit', { id:  data.id, text: data.text });
  };

  return (
    <View style={styles.viewHome}>
      <Text style={styles.titleHome}>Done To Do:</Text>
      <TodoList onEdit={onEditTodo} view="done" todos={todoLists?.todos} refetch={refetch}/>
      <Menu onAddTodo={onAddTodo}/>
    </View>
  );
};

const PendingRoute = () => {
  const  { data: todoLists, refetch }  = useGetTodosQuery({ status: 0 });
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(()=>{
      refetch();
    }, [refetch])
  );
  const onAddTodo = () => {
    navigation.navigate('Add');
  };

  const onEditTodo = (data: ITodo) => {
    navigation.navigate('Edit', { id:  data.id, text: data.text });
  };
  return (
    <View style={styles.viewHome}>
      <Text style={styles.titleHome}>Pending To Do:</Text>
      <TodoList onEdit={onEditTodo} view="pending" todos={todoLists?.todos} refetch={refetch}/>
      <Menu onAddTodo={onAddTodo}/>
    </View>
  );
};

const HomeScreen = (_props: IHomeScreenProps) => {
  const list = FontAwesome6.getImageSourceSync('solid', 'list', 30, '#000');
  const checked = FontAwesome6.getImageSourceSync('solid', 'square-check', 30, '#000');
  const unchecked = FontAwesome6.getImageSourceSync('regular', 'square-check', 30, '#000');
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'all', title: 'All', focusedIcon: list },
    { key: 'checked', title: 'Done', focusedIcon: checked },
    { key: 'unchecked', title: 'Pending', focusedIcon: unchecked },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    all: AllRoute,
    checked: DoneRoute,
    unchecked: PendingRoute,
  });

  return (
    <View style={styles.viewHome}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
};

export { HomeScreen };
