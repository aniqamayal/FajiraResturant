import React, { Component } from "react";
import { View, Text, TouchableOpacity ,ScrollView} from "react-native";
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
class New_Password extends Component {
    state = {
        NPass: "",
        ConfirmPass:"",
    }
    render() {
        let { theme, language } = this.props
        return (
            <View>
                <ScrollView>
                {/* heading start */}
                <View style={{ flexDirection: "row", marginLeft: "5%", marginTop: "5%" }}>

                    <TouchableOpacity activeOpacity={0.7} 
                    style={{ marginTop: 3 }}
                    onPress={() => this.props.navigation.goBack()}>
                        <AntDesign name="arrowleft" color="#000" size={25} />
                    </TouchableOpacity>
                    <Text style={{
                        ...headings.h2, color: theme.primaryText,
                        textAlign: "center", fontWeight: "bold", marginHorizontal: "10%"
                    }}>
                        New Password
                    </Text>
                </View>
                <View style={{ marginTop: "10%" }}>
                    <Text
                        style={{
                            ...headings.h4,
                            color: "black", textAlign: "center"
                        }}
                    >Please enter your new password.</Text>
                     {/* <Text
                        style={{
                            ...headings.h4,
                            color: "black", textAlign: "center"
                        }}
                    >We will send you a recovery code to reset your password.</Text> */}
                </View> 
                {/* heading end */}

                {/* Text Input  Start */}
                <View style={{ marginTop: "130%" }}>
                    <Input
                        title={"* New Password"}
                        keyboardType='default'
                        value={this.state.NPass}
                        onChange={(txt) => this.setState({ NPass: txt })}
                        // bgStyle={{ margin: "5%" }}
                        icon={<Feather name="lock" color="grey"
                            size={20}
                            style={{ ...textInput.icon }}
                        />}
                    />
                     <Input
                        title={"*Confirm Password"}
                        keyboardType='default'
                        value={this.state.ConfirmPass}
                        onChange={(txt) => this.setState({ ConfirmPass: txt })}
                        // bgStyle={{ margin: "5%" }}
                        icon={<Feather name="lock" color="grey"
                            size={20}
                            style={{ ...textInput.icon }}
                        />}
                    />
                </View>
                {/* Text Input  end */}
                {/* Button */}
                <Primary_Button title={"Submit"} bgStyle={{ marginHorizontal: "10%" ,bottom:5}} />
                </ScrollView>
            </View>
        )
    }
}

export default connect(ReducersProps, ReducersActions)(New_Password)