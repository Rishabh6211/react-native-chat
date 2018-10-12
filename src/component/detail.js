'use strict';
import React, { Component, PropTypes } from 'react';
import {
    Platform,
	StyleSheet,
	TouchableOpacity,
	Image,
	ListView,
    View,
    ScrollView,
    AsyncStorage
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import {Actions} from "react-native-router-flux";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Dimensions from 'Dimensions';
import { RNCamera } from 'react-native-camera';
import Camera from 'react-native-camera';
import {  ListItem, Input,Avatar } from 'react-native-elements'
import {Get_data,user_data} from '../action/index';
import { GiftedChat } from 'react-native-gifted-chat'
import SocketIOClient from 'socket.io-client';


const MARGIN = 40;

var width = Dimensions.get('window').width; //full width
const DEVICE_HEIGHT = Dimensions.get('window').height;
 class DetailComponent extends Component {

    constructor(props) {
        super(props);
      
       this.camera = null; 
       this.state = {
        
          users: [],
          messages: [],
          senderId:''

            
        };
      
        this.socket = SocketIOClient('https://chat-app123-node.herokuapp.com/');
    }
   

    componentWillMount() {
      this.socket.on('success', (message)=>
      this.setState({message:message})
     
     
    );
      
        // this.setState({
        //   messages: [
        //     {
        //       _id: 1,
        //       text: 'Hello developer',
        //       createdAt: new Date(),
    
        //     },
        //   ],
        // });
        // this.socket.emit('chat-1', 'Hello world!');
        // this.socket.on('chat2', (message)=>console.log( 'Hello world!'));
      }
      
      componentDidMount (){
    
        AsyncStorage.getItem('userdata').then((value) =>{
          console.log("valueasdasdasd",JSON.parse(value))
          let value1 = JSON.parse(value)
          console.log("value1asdasd",value1._id)
          this.setState({senderId:value1._id})
          
            
        })
         
      
         
        }

      
      onSend(messages = []) {console.log("messages >>>> >>> >> >>>  ",messages)
        // this.setState(previousState => ({
        //   messages: GiftedChat.append(previousState.messages, messages),

        // }))

       

        this.socket.emit('add-message', {senderId:this.state.senderId , receiverId:this.props.userDetail._id, message:this.state.messages});

      }

      logout (){
        this.socket.emit('logout', {userId:this.state.senderId});
        AsyncStorage.clear()
        Actions.login()
      }
  render() {
   
    const userdetail = this.props.userDetail;
    return (
      
        <View style={{flex:1}}>
        <View style={{flex:0.1,flexDirection:"row"}}> 
            <View style={{flex:0.4}}/>
            <View style={{flex:0.3}}/>
            <TouchableOpacity style={{flex:0.3 , marginHorizontal:10,marginVertical:10,borderRadius:30,borderWidth:1,borderColor:"gray",backgroundColor:"gray"}} onPress={()=>this.logout()}>
              <Text style={{color:"ffffff", textAlign:"center"}}>Logout </Text>
            </TouchableOpacity>

        </View>
        <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
        
    </View>
      
      

    );
  }
}

const styles = StyleSheet.create({

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
        flex:.2,
        width: width,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center',
    },
    bigblue: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      Cameracontainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
      },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
      }
});
const mapStateToProps = (state) => {
  
    return { userDetail: state.users.userData ,
      activeuser:state.activeuser }

}
export default connect(mapStateToProps,{user_data})(DetailComponent)