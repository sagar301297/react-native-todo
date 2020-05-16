import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddTodo({submitHandler}) {
   const [text, setText] = useState('');

   const changeHandler = (val) => {
       setText(val);
   }
   
    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder='new todo..'
            onChangeText={(val) => changeHandler(val)}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginBottom: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    }
})
StyleSheet.