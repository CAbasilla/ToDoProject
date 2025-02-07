import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
    useNavigation,
  } from '@react-navigation/native';
import ITodo from '../models/todo.model';
import { styles } from '../styles/screenStyles';

interface IAddTodoProps {
  data?: ITodo
  route: any
}

const AddTodoScreen = ( props: IAddTodoProps ) => {
  const [text, setText] = useState(props.data?.text || '');
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const onSave = () => {
    if (text.trim().length === 0) {
      setError(true);
      return;
    }
    navigation.popTo('Home', { text: text });
  };

  return (
      <KeyboardAvoidingView style={styles.container} >
        <View style={styles.content}>
          <TextInput
            style={styles.textInput}
            label={'What To Do?'}
            value={props.data?.text}
            mode="outlined"
            activeOutlineColor="black"
            onChangeText={setText}
            multiline={true}
            numberOfLines={10}
            error={error}
          />
          {error ? <Text style={styles.errorText}>Invalid input, please try again!</Text> : ''}
        </View>

        <View style={styles.menu} >
          <TouchableOpacity
                  style={styles.button}
                  onPress={onSave}
                >
                  <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
  );
};

export { AddTodoScreen };
