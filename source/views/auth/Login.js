import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
//--------Redux------------------
import { connect } from 'react-redux'
import ReducersProps from "../../data/local/reducers/ReducersProps"
import ReducersActions from '../../data/local/reducers/ReducersActions'
import Helper from '../../utils/Helper';
//---------Reuseable Components
import Primary_Button from "../reuseable/Primary_Button";
import Input from "../reuseable/Input";
//--------Icon-------------------
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
//-----styling----
import { textInput, headings } from "../../utils/Styles";


const helper = new Helper()
class Login extends Component {
  state = {
    email: "",
    Pass: ""
  }
  render() {
    let { theme, language } = this.props
    return (
      <View>
        {/* heading start */}
        <View style={{ marginTop: "10%" }}>
          <Text
            style={{
              ...headings.h1, color: theme.primaryText, textAlign: "center", fontWeight: "bold"
            }}
          >
            {language.Login}
          </Text>
          <Text style={{
            ...headings.h4,
            color: "black", textAlign: "center"
          }}>
            {language.Login_Session}
          </Text>
        </View>
        {/* heading end */}

        {/* Text Input  Start */}
        <View style={{ marginTop: "120%" }}>
          <Input
            title={language.Email}
            keyboardType='default'
            value={this.state.email}
            onChange={(txt) => this.setState({ email: txt })}
            // bgStyle={{ margin: "5%" }}
            icon={<AntDesign name="user" color="grey"
              size={20}
              style={{ ...textInput.icon }}
            />}
          />
          <Input
            title={language.Password}
            keyboardType='default'
            value={this.state.Pass}
            onChange={(txt) => this.setState({ Pass: txt })}
            // bgStyle={{ margin: "5%" }}
            icon={<Feather name="lock" color="grey"
              size={20}
              style={{ ...textInput.icon }}
            />}
          />
        </View>
        {/* Text Input  Start */}
        {/* Button */}
        <Primary_Button title={language.Login} bgStyle={{ marginHorizontal: "10%" }}
         onPress={() => this.props.navigation.navigate('DrawerNav')} />
        {/* footer */}
        <View style={{ justifyContent: "center", alignItems: "center", top: "3%" }}>
          <Text style={{ ...headings.h4 }}>{language.FPass}</Text>
          <TouchableOpacity activeOpacity={0.7}
           onPress={() => this.props.navigation.navigate('Reset_Password')} >
            <Text style={{ ...headings.h4, color: theme.primaryText }}>{language.RHere}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default connect(ReducersProps, ReducersActions)(Login)