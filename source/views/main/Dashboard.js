import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { shadow } from '../../utils/Styles';
//--------Redux------------------
import { connect } from 'react-redux'
import ReducersProps from "../../data/local/reducers/ReducersProps"
import ReducersActions from '../../data/local/reducers/ReducersActions'
import Orders_Detail from '../flatlists/Orders_Detail';
import ToggleSwitch from 'toggle-switch-react-native'
DATA = [
  {
    id: "1",
    icon: "box-open",
    title1: "Order in queue",
    color: "orange",
    title2: "1176",
    navi: "Top_Nav"

  },
  {
    id: "2",
    title1: "Order Completed",
    icon: "check",
    color: "green",
    title2: "1000",
    navi: "Top_Nav"
  },
  {
    id: "3",
    title1: "Order Cancelled",
    icon: "box-open",
    color: "red",
    title2: "115",
    navi: "Top_Nav"
  },
  {
    id: "4",
    title1: "Total orders",
    icon: "clipboard-list",
    color: "green",
    title2: "2000",
    navi: "Top_Nav"
  }
]
class DashBoard extends Component {

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: "#fff"
      }}>
        <View style={{ bottom: "2%", marginTop: "20%", marginHorizontal: "5%", }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            numColumns={2}
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={(item, index) =>
              <TouchableOpacity activeOpacity={0.9}
                onPress={() => this.props.navigation.navigate(item.item.navi)}>
                <Orders_Detail icon={item.item.icon} color={item.item.color} title1={item.item.title1}
                  title2={item.item.title2} />
              </TouchableOpacity>}

          />
        </View>
        <View style={{
          ...shadow.whiteShadow, height: 170,
          width: "70%", backgroundColor: "#fff",
          alignSelf: "center", top: "5%"
        }}>
          <View style={{ marginTop: 20 }}>
            <ToggleSwitch
              isOn={false}
              onColor="green"
              offColor="grey"
              label="Emergency close"
              labelStyle={{ color: "black", fontWeight: "900", marginHorizontal: "10%" }}
              size="medium"
              onToggle={isOn => console.log("changed to : ", isOn)}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <ToggleSwitch
              isOn={false}
              onColor="green"
              offColor="grey"
              label="Bluetooth Printer"
              labelStyle={{ color: "black", fontWeight: "900", marginHorizontal: "10%" }}
              size="medium"
              onToggle={isOn => console.log("changed to : ", isOn)}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <ToggleSwitch
              isOn={false}
              onColor="green"
              offColor="grey"
              label="Android   Printer"
              labelStyle={{ color: "black", fontWeight: "900", marginHorizontal: "10%" }}
              size="medium"
              onToggle={isOn => console.log("changed to : ", isOn)}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default connect(ReducersProps, ReducersActions)(DashBoard)