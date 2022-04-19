import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
//--------Redux------------------
import { connect } from 'react-redux'
import ReducersProps from "../../data/local/reducers/ReducersProps"
import ReducersActions from '../../data/local/reducers/ReducersActions'
import Helper from '../../utils/Helper';

const helper = new Helper()
const Primary_Button = ({ title,onPress,bgStyle }) => {
    return (
        <TouchableOpacity   activeOpacity={0.9} onPress={() => onPress && onPress()}>
            <View  style={{...bgStyle }}>
                <Text style={styles.button}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor:"#FCCe03",
        height: 45,
        color: 'white',
        fontSize: 18,
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: "center",
        borderRadius: 20,
        fontFamily:"Poppins-Regular",
        fontWeight:"bold"
     },
})

export default connect(ReducersProps, ReducersActions)(Primary_Button)