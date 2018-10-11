import React, { Component, PropTypes } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import {StyleSheet,View,KeyboardAvoidingView,FlatList,TouchableHighlight} from 'react-native';
import {Actions} from "react-native-router-flux";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Dimensions from 'Dimensions';
import {Get_data} from '../action/index';

import FilterComponent from '../container/filter'
const MARGIN = 40;

var width = Dimensions.get('window').width; //full width
const DEVICE_HEIGHT = Dimensions.get('window').height;
class ListComponent extends Component {

    constructor(props) {
        super(props);
        // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          //dataSource: ds.cloneWithRows(['row 1', 'row 2','row3']),
          users: []
        };
        this.props.getData();
        // this.search = this.search.bind(this)
    }

    search(text){
      alert(text)
    }

  render() {
    console.log("this.propssadadad0", this.props.users)
    return (
      <Container>
      
      {/* <FilterComponent searchData={this.search}/> */}
        
        <Content>
        
          <List dataArray={this.props.users}
            renderRow={(item) =>
                <TouchableHighlight ><ListItem > 
                <Text onPress={() => Actions.detail(item.id)} key={item.id}>{item.user}</Text>
              </ListItem></TouchableHighlight>
            }>
          </List>
        </Content>
        
      </Container>
    );
  }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
        //backgroundColor:"#d3d3d3",
        //alignItems: 'center',
        //marginTop:55,
		//justifyContent: 'center',
    },
    view:{
        
    },
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F035E0',
		height: MARGIN,
		borderRadius: 20,
		zIndex: 100,
	},
	text: {
       // flex:.1,
        width: width,
        height:30,
		color: 'white',
        backgroundColor: '#217ADC',
        marginBottom:5,
         
    },
    
});

const mapStateToProps = (state) => {
  return {users: state.users.usersList ? state.users.usersList : null }

}
export default connect(mapStateToProps,{getData:Get_data})(ListComponent)
 