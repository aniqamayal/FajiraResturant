import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
//------icon-------------
import { shadow,headings } from '../../utils/Styles';
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
        ...shadow.whiteShadow, height: 120,
        width:"90%", borderRadius: 5, marginTop: "5%",bottom:"2%",marginHorizontal:"4%"
      }}>
        <View style={{flexDirection:"row",marginTop:20,marginHorizontal:"7%"}}>
    <View style={{
          backgroundColor: "#DCDCDC", height: 60,
          width: 60, borderRadius: 60,
        }}>
          <FontAwesome5 name={props.icon} color={props.color} size={20}
          style={{alignSelf:"center",top:20}}/>
        </View>
        <View style={{flexDirection:"column",top:10,marginHorizontal:"10%"}}>
          <Text style={{...headings.h6,color:"#FCCE03"}}>{props.title1}</Text>
          <Text style={{...headings.h6}}>{props.title2}</Text>
        </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:"3%",top:10}}>
        <Text style={{...headings.h6}}>{props.title3}</Text>
          <Text style={{...headings.h6}}>{props.title4}</Text>
          </View>
      </View>
    </View>
  );
}

export default connect(ReducersProps, ReducersActions)(Order_Details)