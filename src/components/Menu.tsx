
import React from 'react';
import { View } from 'react-native';
import { FAB } from 'react-native-paper';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { styles } from '../styles/componentStyles';

interface IMenu {
  onAddTodo: () => void
}

const  Menu = (props: IMenu) => {
  const image = FontAwesome6.getImageSourceSync('solid', 'plus', 30, '#000');
  return (
    <View style={styles.menuContainer}>
        <FAB
          icon={{ source: image!, direction: 'ltr' }}
          onPress={() => props.onAddTodo()}
          style={styles.fabStyle}
        />
    </View>
  );
};

export { Menu };
