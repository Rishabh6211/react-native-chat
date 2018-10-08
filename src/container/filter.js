import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from  'react-native'
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";
import { FormLabel, FormInput,FormValidationMessage } from 'react-native-elements'
import {Get_data} from '../action/index';
import ListComponent from '../component/listing'
const rowHeight = 40;
 class FilterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users: []
        };
        this.props.getData();
        
    }

    state = {
        search: ''
     }
    handleUser = (text) => {
        this.props.searchData(text)
    }   
  
     
     

  render() {
    var items = this.state.users
    return (
        <View >
        <FormInput 
        placeholder="Please Search here" 
        onChangeText={this.handleUser}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {users: state.users.usersList ? state.users.usersList : null }

}
export default connect(mapStateToProps,{getData:Get_data})(FilterComponent)