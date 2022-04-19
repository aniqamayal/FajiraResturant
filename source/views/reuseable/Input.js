import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
//--------Redux------------------
import { connect } from 'react-redux'
import ReducersProps from "../../data/local/reducers/ReducersProps"
import ReducersActions from '../../data/local/reducers/ReducersActions'
import Helper from '../../utils/Helper';

const helper = new Helper()
const Input = ({ bgStyle, onChange, icon, title, label, secureTextEntery }) => {

    const [value, setValue] = useState("")
    return (
        <View
            style={{ marginHorizontal: "5%" }}
        >

            <View style={{ ...styles.container, marginHorizontal: "8%", ...bgStyle }} >
                {label}
                <TextInput

                    style={{
                        padding: 10,
                        //  fontFamily: "Poppins-Regular" 
                    }}
                    value={value}
                    secureTextEntry={secureTextEntery}
                    placeholder={title}
                    onChangeText={(txt) => handleonTextChange(txt)}
                />


                {/* </View> */}
            </View>
            <View>
                {icon}
            </View>

        </View>
    )

    function handleonTextChange(txt) {
        setValue(txt)
        onChange && onChange(txt)
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#DCDCDC",
        height: 40,
        borderRadius: 20,
        // flexDirection:"row",
        // justifyContent:"space-around"

    },

})
export default connect(ReducersProps, ReducersActions)(Input)