import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';


class Home extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <View>
        <TouchableOpacity style = {styles.buttonStyle} onPress ={() => this.props.decreaseCounter()}>
          <View>
            <Text style = {styles.textStyle}>-</Text>
          </View>
        </TouchableOpacity>
    
        <Text>{this.props.counter}</Text>
    
        <TouchableOpacity style = {styles.buttonStyle} onPress = {() => this.props.increaseCounter()}>
          <View>
            <Text style = {styles.textStyle}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}


function mapStateToProps(state){
  return{
    counter: state.counter
  }
}

//Left side is what is being call in 'home.js, Right side is what being call in the 'reducer.js'
function mapDispatchToProps(dispatch){
  return{
    increaseCounter: () => dispatch({type: 'INCREMENT'}),
    decreaseCounter: () => dispatch ({type: 'DECREMENT'})
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonStyle: {
    marginHorizontal: 20,
    backgroundColor: 'indigo',
    padding: 20
  },
  textStyle: {
    color: 'white',
    fontSize: 20
  }
})