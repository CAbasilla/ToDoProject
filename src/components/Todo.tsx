
import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { ITodo } from '../models/todo.model';
import { styles } from '../styles/componentStyles';

interface ITodoProps {
  data: ITodo,
}

const Todo = (props: ITodoProps) => {
  return (<View style={styles.todoView}>
    <Card className="rounded-none" style={[ styles.todoContainer ]} >
      <Card.Content className="rounded-none" style={[ styles.todoContainer ]}>
        <BouncyCheckbox
          fillColor="#663399"
          isChecked={props.data.status}
          onPress={() => {
            console.log(props);
          }}
          text={props.data.text}
        />
      </Card.Content>
    </Card>
  </View>);
};

export { Todo };
