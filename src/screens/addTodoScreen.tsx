import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
    useNavigation,
  } from '@react-navigation/native';
  import Toast from 'react-native-simple-toast';
import { styles } from '../styles/screenStyles';
import { Error } from '../components/Error';
import { useCreateTodoMutation } from '../services/todoServices';

interface IAddTodoProps {
  route: any
}

const AddTodoScreen = ( _props: IAddTodoProps ) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const  [ createTodo ]  = useCreateTodoMutation();

  const onSave = async() => {
    if (text.trim().length === 0) {
      setError(true);
      return;
    }

    try {
      const payload = await createTodo({ text: text }).unwrap();
      console.log('fulfilled', payload);
    } catch (err) {
      console.error('rejected', err);
    }
    navigation.goBack('Home');
    Toast.showWithGravity('Slide added To Do to select actions.', Toast.LONG, Toast.CENTER, {
      tapToDismissEnabled: true,
    });
  };

  return (
      <KeyboardAvoidingView style={styles.container} >
        <View style={styles.content}>
          <TextInput
            style={styles.textInput}
            label={'What To Do?'}
            value={text}
            mode="outlined"
            activeOutlineColor="black"
            onChangeText={setText}
            multiline={true}
            numberOfLines={10}
            error={error}
          />
          {error && <Error/>}
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
