import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
//------icon-------------
import { shadow } from '../../utils/Styles';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
//--------Redux------------------
import { connect } from 'react-redux'
import ReducersProps from "../../data/local/reducers/ReducersProps"
import ReducersActions from '../../data/local/reducers/ReducersActions'

const Order_Details = (props,theme) => {
  return (
    <View style={{ flex: 1,backgroundColor:"#fff"}}>
      <View style={{
        backgroundColor: "#fff",
        ...shadow.whiteShadow, height: 150,
        width:140, borderRadius: 5, marginTop: "5%",bottom:"2%",marginHorizontal:"4%"
      }}>
        <View style={{
          backgroundColor: "#DCDCDC", height: 60,
          width: 60, borderRadius: 60,
          alignSelf: "center", marginTop: 20
        }}>
          <FontAwesome5 name={props.icon} color={props.color} size={20}
          style={{alignSelf:"center",top:20}}/>
        </View>
        <Text style={{textAlign:"center",top:5,color:"#000"}}>{props.title1}</Text>
        <Text style={{textAlign:"center",top:5,color:"#000"}}>{props.title2}</Text>

      </View>
    </View>
  );
}

export default connect(ReducersProps, ReducersActions)(Order_Details)