import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import HomeCategory from "../components/HomeCategory";

class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ScrollView scrollEnabled>
          <HomeCategory
            imageUri={require("../../assets/corona1.png")}
            titleFirst="Medical"
            titleSecond="Medical"
            subTitle="Covid - 19"
            screenProps="Super"
            {...this.props}
          />
          <HomeCategory
            imageUri={require("../../assets/corona2.jpg")}
            titleFirst="Medical"
            titleSecond="Medical"
            subTitle="Medical"
            {...this.props}
          />
          <HomeCategory
            imageUri={require("../../assets/corona3.jpg")}
            titleFirst="Medical"
            titleSecond="Medical"
            subTitle="Medical"
            {...this.props}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Home;
