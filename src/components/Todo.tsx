
import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import ITodo from '../models/todo.model';
import { styles } from '../styles/componentStyles';

interface ITodoProps {
  data: ITodo,
}
const Todo = (props: ITodoProps) => {
  return (
    <View style={styles.todoView}>
      <Card style={[ styles.todoContainer ]} >
        <Card.Content style={[ styles.todoContainer ]}>
          <Text>{props.data.text}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export { Todo };
