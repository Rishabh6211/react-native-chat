import React,{Component} from 'react';
import {View,Button,TextInput,StyleSheet,Image} from  'react-native';
import {Actions} from "react-native-router-flux";
export default class SignupComponent extends React.Component {
  
  render() {
    
    return (
      <View style={styles.container} > 
      
        <TextInput placeholder="Please Enter FirstName"
          style={styles.input}
        />
        <TextInput placeholder="Please Enter LastName"
          style={styles.input}
        />
        <TextInput placeholder="Please Enter Email"
         style={styles.input}
        />
        <TextInput placeholder="Please Enter Password"  secureTextEntry={true}
          style={styles.input}
        />
        <View style={styles.button}>
          <Button
              
              title="Signup" 
              color="#0f5994"
              onPress={() => Actions.pop()}
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
