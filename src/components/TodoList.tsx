
import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { Todo } from './Todo';
import { styles } from '../styles/componentStyles';
import { useDeleteTodoMutation } from '../services/todoServices';

interface ITodoListProps {
  onEdit: Function,
  refetch: Function,
  view: string,
  todos: []
}

const TodoList = (props: ITodoListProps) => {
  const  [ deleteTodo ]  = useDeleteTodoMutation();
  const onRemove = async (id: string) => {
    if (id) {
      try {
        const payload = await deleteTodo({ id: id }).unwrap();
        console.log('deleted', payload);
        props.refetch();
      } catch (err) {
        console.error('rejected', err);
      }
    }
  };
  const showAlert = (info: any) => {
    Alert.alert( // todo: change to modal
        'Delete Task?',
        `Are you sure you want to delete the task "${info.item.text}"?`,
        [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () =>
                  onRemove(info.item.id),
            },
        ],
        { cancelable: false }
    );
  };

  const renderHiddenItem = (info: any) => {
    return (
      <View style={styles.deleteView}>
        <TouchableOpacity
          style={styles.editTouchable}
          onPress={() => {
            props.onEdit(info.item);
          }}
        >
          <Text style={styles.actionText}>
            <FontAwesome6 name="pen-to-square" style={styles.deleteIcon} iconStyle="regular" size={30} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteTouchable}
          onPress={() => showAlert(info)}
        >
          <Text style={styles.actionText}>
            <FontAwesome6 name="circle-xmark" style={styles.deleteIcon} iconStyle="regular" size={30} />
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = (info: any) => {
    return <Todo data={info.item}/>;
  };

  return(
        <SwipeListView
          data={props.todos}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-108}
        />
  );
};

export { TodoList };
