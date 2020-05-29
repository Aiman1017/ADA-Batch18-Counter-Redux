import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class ToDo extends React.Component {
  constructor(){
    super();
    this.setState = {
      todos: [
        {
        id: 1,
        item: 'Study Redux'
      },
      {
        id: 2,
        item: 'Study React'
      }
    ],

    input: ''

    }
  }

  handleTextChange = (text) => {
    this.setState({
        input: text
    })
  }

  handleAddPress = () => {
    const newItem = { 
      id: this.state.todos.length + 1,
      name: this.state.input
    };

    const newArray = [...this.state.todos, newItem];
    this.setState({
      todos: newArray,
      input: ''
    })
  }

    render() {
      return (
          <View style={styles.container}>
              <View>
                  <TextInput placeholder="Add item name" onChangeText={(text) => 
                      this.handleTextChange(text)} />

                  <Button title="Add" onPress={() => this.handleAddPress()}></Button>
              </View>
              <FlatList
                  data = {this.state.todos}
                  renderItem = {({ item }) =>
                      <View style = {styles.toDoItem}>
                          <Text>{item.name}</Text>
                      </View>
                  }
                  keyExtractor = {item => item.id}
              />
          </View>
      )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 40
  },
  toDoItem: {
    backgroundColor: 'green',
    padding: 10
  }
});