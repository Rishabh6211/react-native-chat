import React,{Component} from 'react';
import {View,Button,TextInput,StyleSheet,Image} from  'react-native';
import {Actions} from "react-native-router-flux";
import { connect } from 'react-redux';
import { signup } from '../action/index'
 class SignupComponent extends React.Component {
  state = {
    name: '',
    email: ''
  }
  handleUser = (text) => {
    this.setState({ name: text })
  }

  handleEmail = (text) => {
    this.setState({ email: text })
  }
  constructor(props) {
    super()
  }
  signup = (name, email) => {
    //alert('username: ' + username + ' password: ' + pass)
    this.props.signup(name, email)
  }
  render() {
    
    return (
      <View style={styles.container} > 
      
        <TextInput placeholder="Please Enter FirstName"
          style={styles.input} onChangeText={this.handleUser}
        />
       
        <TextInput placeholder="Please Enter Email"
          style={styles.input} onChangeText={this.handleEmail}
        />
        <View style={styles.button}>
          <Button
              
              title="Signup" 
              color="#0f5994"
            onPress={
              () => this.signup(this.state.name,this.state.email)
            }
          />
        </View>
      
      </View>
    
       

    );
  }
}

const styles = StyleSheet.create({

  
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#006994'
  },

  input: {
		// backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width:250,
    height: 40,
		marginHorizontal: 20,
		paddingLeft: 45,
    // borderRadius: 20,
    marginBottom :10,
    // color: '#ffffff',
  
    
	},
	inputWrapper: {
		flex: 1,
  },
  button: {
		width:100,
		backgroundColor: '#006994',
		height: 40,
		borderRadius: 20,
		zIndex: 100,
	},
});
mapStateToProps = state => {

  return {
   
  }
}

export default connect(mapStateToProps, { signup })(SignupComponent)