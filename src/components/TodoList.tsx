
import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import ITodo from '../models/todo.model';
import { Todo } from './Todo';
import { styles } from '../styles/componentStyles';

interface ITodoListProps {
  data: ITodo[],
  setData: Function,
  onEdit: Function,
}

const TodoList = (props: ITodoListProps) => {

  const removeTodo = (id: String) => {
    props.setData((prevTodos: ITodo[]) => {
          return prevTodos.filter((t) => t.id !== id);
      });
  };

  const remove = (id: string) => {
    removeTodo(id);
  };

  const showAlert = (data: any) => {
    Alert.alert(
        'Delete Task?',
        `Are you sure you want to delete the task "${data.item.text}"?`,
        [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () =>
                    remove(data.item.id),
            },
        ],
        { cancelable: false }
    );
  };

  const renderHiddenItem = (data: any) => (
    <View style={styles.deleteView}>
      <TouchableOpacity
        style={styles.editTouchable}
        onPress={() => {
          props.onEdit(data.item);
        }}
      >
        <Text style={styles.editText}>
          <FontAwesome6 name="pen-to-square" style={styles.deleteIcon} iconStyle="regular" size={30} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteTouchable}
        onPress={() => showAlert(data)}
      >
        <Text style={styles.deleteText}>
          <FontAwesome6 name="circle-xmark" style={styles.deleteIcon} iconStyle="regular" size={30} />
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = (data: any) => (
    <Todo data={data.item}/>
  );

  return(
        <SwipeListView
          data={props.data}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-108}
        />
  );
};

export { TodoList };
