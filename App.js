import React from 'react';
import {Provider} from 'react-redux';
import store from './Store/store';

import ToDo from './component/todo';

export default function App() {
  return (
    <Provider store = {store}>
      <ToDo />
    </Provider>
  );
}

//Remaining things to do:

//Linking
//mapStateToProps
function mapStateToProps(state){
  return{
    todos: state.todos
  }
}
//mapDispatchToProps
function mapDispatchToProps(dispatch){
  return{
    addItem: () => dispatch({type:'ADD_TODO'})
  }
}
//New Thing - passing data from component to reducer
