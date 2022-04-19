import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Primary_Button from '../reuseable/Primary_Button';

class Profile_Setting extends Component {
  state = {
    userName: "",
    Fname: "",
    Lname: "",
    PNo: "",
    Gender: "",
    country: "",
    Province: "",
    city: "",
    address: "",
    email: "",
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <TextInput
          label="User Name"
          mode="outlined"
          style={{ marginHorizontal: "6%", top: 20 }}
          outlineColor="grey"
          activeOutlineColor="#FCCE03"
          value={this.state.userName}
          onChange={(txt) => this.setState({ userName: txt })}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "6%", top: 10 }}>
          <TextInput
            label="First Name"
            mode="outlined"
            style={{ top: 20, width: "45%" }}
            outlineColor="grey"
            activeOutlineColor="#FCCE03"
            value={this.state.Fname}
            onChange={(txt) => this.setState({ Fname: txt })}
          />
          <TextInput
            label="Last Name"
            mode="outlined"
            style={{ top: 20, width: "45%" }}
            outlineColor="grey"
            activeOutlineColor="#FCCE03"
            value={this.state.Lname}
            onChange={(txt) => this.setState({ Lname: txt })}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            label="Email"
            mode="outlined"
            style={{ marginHorizontal: "6%", marginTop: 20 }}
            outlineColor="grey"
            activeOutlineColor="#FCCE03"
            value={this.state.email}
            onChange={(txt) => this.setState({ email: txt })}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            label="Phone Number"
            mode="outlined"
            style={{ marginHorizontal: "6%" }}
            outlineColor="grey"
            activeOutlineColor="#FCCE03"
            value={this.state.PNo}
            onChange={(txt) => this.setState({ PNo: txt })}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            label="Gender"
            mode="outlined"
            style={{ marginHorizontal: "6%" }}
            outlineColor="grey"
            activeOutlineColor="#FCCE03"
            value={this.state.Gender}
            onChange={(txt) => this.setState({ Gender: txt })}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: "6%", top: 10 }}>
          <TextInput
            label="Country"
            mode="outlined"
            style={{  width: "45%" }}
            outlineColor="grey"
            activeOutlineColor="#FCCE03"
            value={this.state.country}
            onChange={(txt) => this.setState({ country: txt })}
          />
          <TextInput
            label="Province"
            mode="outlined"
            style={{ width: "45%" }}
            outlineColor="grey"
            activeOutlineColor="#FCCE03"
            value={this.state.Province}
            onChange={(txt) => this.setState({ Province: txt })}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            label="City"
            mode="outlined"
            style={{ marginHorizontal: "6%" }}
            outlineColor="grey"
            activeOutlineColor="#FCCE03"
            value={this.state.city}
            onChange={(txt) => this.setState({ city: txt })}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            label="Address"
            mode="outlined"
            style={{ marginHorizontal: "6%" }}
            outlineColor="grey"
            activeOutlineColor="#FCCE03"
            value={this.state.address}
            onChange={(txt) => this.setState({ address: txt })}
          />
        </View>
        <Primary_Button title={"Save Changes"} bgStyle={{marginTop:"10%",marginHorizontal:"6%"}} />
      </View>
    );
  }
}

export default Profile_Setting;