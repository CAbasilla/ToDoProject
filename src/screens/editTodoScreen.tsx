import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  useNavigation,
} from '@react-navigation/native';
import { styles } from '../styles/screenStyles';
import { Error } from '../components/Error';
import { useUpdateTodoMutation } from '../services/todoServices';
interface IEditTodoProps {
  route: any
}

const EditTodoScreen = (props: IEditTodoProps) => {
  const [text, setText] = useState(props.route.params.text);
  const [error, setError] = useState(false);
  const navigation = useNavigation();
  const  [ updateTodo ]  = useUpdateTodoMutation();

  const onSave = async() => {
    if (text.trim().length === 0) {
      setError(true);
      return;
    }
    if (props.route.params.id) {
      try {
        const payload = await updateTodo({ id: props.route.params.id, text: text }).unwrap();
        console.log('fulfilled', payload);
      } catch (err) {
        console.error('rejected', err);
      }
    }
    navigation.goBack('Home');
  };

  return (
      <KeyboardAvoidingView style={styles.container} >
        <View style={styles.content}>
          <TextInput
            style={styles.textInput}
            label={'To Do:'}
            value={text}
            defaultValue={text}
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

export { EditTodoScreen };
