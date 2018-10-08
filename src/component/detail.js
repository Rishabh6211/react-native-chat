'use strict';
import React, { Component, PropTypes } from 'react';
import {
    Platform,
	StyleSheet,
	TouchableOpacity,
	Image,
	ListView,
    View,
    ScrollView
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

const MARGIN = 40;

var width = Dimensions.get('window').width; //full width
const DEVICE_HEIGHT = Dimensions.get('window').height;
 class DetailComponent extends Component {

    constructor(props) {
        super(props);
       // alert(JSON.stringify(props))
       // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.camera = null; 
       this.state = {
          //dataSource: ds.cloneWithRows(['row 1', 'row 2','row3']),
          users: [],
          messages: [],
            // path:this.props.path,
            // openCamera : false,
        };
        // this.takePicture = this.takePicture.bind(this)
        // this.props.user_data(props.data);
    }
    // async takePicture() {
    //     if (this.camera) {
    //       const options = { quality: 0.5, base64: true };
    //       const data = await this.camera.takePictureAsync(options)
    //       console.log('camera response',data.uri);
    //       this.setState({
    //         openCamera:false,
    //         path:data.uri
    //       });
    //     }
    //   }

    componentWillMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'Hello developer',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
          ],
        })
      }
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }
  render() {
    // alert(JSON.stringify(this.props))
    //alert(JSON.stringify(this.props.userDetail))
    const userdetail = this.props.userDetail;
    return (
      
        <View style={{flex:1}}>
        <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
        {/*
        this.state.openCamera?
        <View style={styles.Cameracontainer}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity
            onPress={this.takePicture}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
        </View>
      </View>
      :
       <ScrollView contentContainerStyle={styles.contentContainer}>
       <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
       <Card
       title='Registration'
       style={{justifyContent: 'center', alignItems: 'center'}}>

       <View
        style={{
          flexDirection: 'column',
          flex:1,
          justifyContent: 'center', alignItems: 'center'
        }}>

        <Avatar
       xlarge
       rounded
       avatarStyle={{justifyContent: 'center', alignItems: 'center'}}
       source={{uri: this.state.path}}
       onPress={()=>this.setState({ openCamera : true })}
       activeOpacity={0.7}
     />
        <Text>
            Name: {userdetail.first} {userdetail.last}
        </Text>
        <Text>
            age: {userdetail.age} 
        </Text>
        <Text>
            description: {userdetail.description} 
        </Text>
    </View>
    </Card>

    </ScrollView>
    */}
    </View>
      
      

    );
  }
}

const styles = StyleSheet.create({
	//container: {
		//flex: 1,
        //backgroundColor:"#d3d3d3",
        //alignItems: 'center',
        //marginTop:55,
		//justifyContent: 'center',
    //},
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
    return { userDetail: state.users.userData  }

}
export default connect(mapStateToProps,{user_data})(DetailComponent)