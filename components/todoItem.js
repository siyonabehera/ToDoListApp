import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ToDoItem({item, pressHandler}){
    
    return (
        <TouchableOpacity onPress= {() => pressHandler(item.key)}>
            <View style = {styles.item}></View>
            <MaterialIcons name = 'delete' />
            <Text>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        borderStyle: 'dotted',
        
        borderRadius: 1,

        borderWidth: 2,

        borderColor: '#D3D3D3',

        color: '#000000',

        backgroundColor : '#fff',

        padding : 5,
 
        fontSize: 20,
 
        textAlign: 'center',
 
        margin: 10
        
    }
})