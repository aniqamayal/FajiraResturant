import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Alert, imagePath } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, Pressable } from '@react-navigation/drawer'
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DBHandler from "../utils/DBHandler";

const DatabaseObject = new DBHandler()


export default class CustomDrawer extends Component {

  state = {
    imagePath: '',
    // name:'',
    image: '',
    // password:'',
    // email:''
  }
  componentDidMount() {

    DatabaseObject.getimage((image) => {
      if (this.state.image !== null) {
        //   var session={
        //  image:''
        //   }
        // DBObject.storeData(session)

        this.setState({ imagePath: image })
        console.log('done =======>', image);
      }
    })
  }



  getImagefromCamera = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({ imagePath: image.path })

      DatabaseObject.storeImage(image.path)

    });
  }
  getCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {


      this.setState({ imagePath: image.path })
      DatabaseObject.storeImage(image.path)

    });
  }


  createThreeButtonAlert = () =>
    Alert.alert(
      "Choose Your Image",
      "From Camera or Gallery",
      [
        {
          text: "Gallery",
          onPress: () => this.getImagefromCamera()
        },
        {
          text: "Camera",
          onPress: () => this.getCamera(),
          style: "cancel"
        },
        { text: "Done", onPress: () => console.log("OK Pressed") }
      ]
    );


  render() {
    return (
      <DrawerContentScrollView {...this.props}>
        <View style={{ backgroundColor: '#FDC204', padding: 10, height: "50%",flex:1 }}>
          <View style={{ alignSelf: "center", marginTop: "7%" }}>
            <Image
              style={{ height: 90, width: 90, borderRadius: 60 }}
              source={{ uri: this.state.imagePath }} />


            <Icon name='camera' size={15} color={"black"} style={{ marginLeft: 60, marginTop: -16, padding: 2 }} onPress={() => { this.createThreeButtonAlert() }}

            />
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: "7%",
          }}>
            <View style={{
              width: 60,
              height: 50,
              borderRadius: 25,
              alignSelf: "center"

            }} >


            </View>

            <View>
              <Text style={{ color: 'white', fontSize: 24 }}>Aniqa Mayal</Text>
              <Text style={{ color: '#264151' }}>aniqamayalll93@gmail.com</Text>
            </View>
          </View>

        </View>
        <DrawerItemList {...this.props} />
<View>
        <Text style={{left:20,fontWeight:"bold",fontSize:20,marginTop:"80%",color:"grey"}}>Sign Out</Text>
        </View>
      </DrawerContentScrollView>
    );
  };

}

