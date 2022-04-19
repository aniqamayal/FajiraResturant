import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
//--------Redux------------------
import { connect } from 'react-redux'
import ReducersProps from "../../data/local/reducers/ReducersProps"
import ReducersActions from '../../data/local/reducers/ReducersActions'
import Orders_Detail from '../flatlists/Orders_Detail';
import Order_Queue from '../flatlists/Order_Queue';
DATA = [
  {
    id: "1",
    icon: "check",
    color: "green",
    title1: "Order id-5432",
    title2: "Accepted",
    title3: "Order total-$ 4999.00",
    title4: "21-03-2022 11:08",
    // navi: "Login"

  },
  {
    id: "2",
    icon: "check",
    color: "green",
    title1: "Order id-5432",
    title2: "Accepted",
    title3: "Order total-$ 4999.00",
    title4: "21-03-2022 11:08"
    //   navi: 'Delivery_Point_1'
  },
  {
    id: "3",
    icon: "box-open",
    color: "orange",
    title1: "Order id-5432",
    title2: "In Queue",
    title3: "Order total-$ 4999.00",
    title4: "21-03-2022 11:08"
    //   navi: 'Delivery_Point_1'
  },
  {
    id: "4",
    icon: "box-open",
    color: "orange",
    title1: "Order id-5432",
    title2: "In Queue",
    title3: "Order total-$ 4999.00",
    title4: "21-03-2022 11:08"
    //   navi: 'Delivery_Point_1'
  },
  {
    id: "5",
    icon: "check",
    color: "green",
    title1: "Order id-5432",
    title2: "Accepted",
    title3: "Order total-$ 4999.00",
    title4: "21-03-2022 11:08"
    //   navi: 'Delivery_Point_1'
  },
]
class Order_In_Queue extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: "#fff"
      }}>
        <View style={{ bottom: "2%", marginTop: "5%" }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={(item, index) =>
              <TouchableOpacity activeOpacity={0.9}
                onPress={() => this.props.navigation.navigate(item.item.navi)}>
                <Order_Queue icon={item.item.icon} color={item.item.color} title1={item.item.title1}
                  title2={item.item.title2} title3={item.item.title3} title4={item.item.title4} />
              </TouchableOpacity>}

          />
        </View>
      </View>
    );
  }
}

export default connect(ReducersProps, ReducersActions)(Order_In_Queue)