import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/screenStyles';

const Error = () =>{
    return (<Text style={styles.errorText}>Invalid input, please try again!</Text>);
};

export { Error };
