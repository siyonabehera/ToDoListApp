import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoItem';
import AddToDo from './components/addToDo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy coffee', key: '1'},
    { text: 'Create an app', key: '2'},
    {text: 'Play on the switch', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text: text, key:Math.random().toString()},
          ...prevTodos
        ];
      
      });
    } else{
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ]);

    }

   
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
     Keyboard.dismiss();
       console.timeLog('dismissed keyboard');
       }}>
        <View style={styles.container}>
         <Header/>
         <View style={styles.content}>
         <AddToDo submitHandler={submitHandler}/>
           <View style = {styles.list}> 
            <FlatList 
             data={todos}
             renderItem={({ item }) => (
             <ToDoItem item={item} pressHandler={pressHandler}/>
            )}
             />
           </View>
            </View>
             </View>
       </TouchableWithoutFeedback>
   
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 40,
  }, 
  list: {
    marginTop: 20,
  }
});
