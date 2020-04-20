import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/Ionicons";
import ItemList from "../components/ItemList";

const CATEGORY = [
  "Dresses",
  "Shoes",
  "Shorts",
  "Skirts",
  "Dresses",
  "Shoes",
  "Shorts",
  "Skirts"
];

const DRESSES = [
  {
    id: 1,
    imageUri: require("../../assets/products/product_10.jpg"),
    name: "Glucometer",
    priceOne: 30,
    priceTwo: "$30"
  },
  {
    id: 2,
    imageUri: require("../../assets/products/product_9.jpg"),
    name: "Insulin",
    priceOne: 16,
    priceTwo: "16$"
  },
  {
    id: 3,
    imageUri: require("../../assets/products/product_11.jpg"),
    name: "Surgical Mask",
    priceOne: 1,
    priceTwo: "1$"
  },
  {
    id: 4,
    imageUri: require("../../assets/products/product_12.jpg"),
    name: "Blood Pressure Meter",
    priceOne: 50,
    priceTwo: "50"
  },
  {
    id: 5,
    imageUri: require("../../assets/products/product_13.jpg"),
    name: "Thermometer",
    priceOne: 10,
    priceTwo: "10$"
  },
  {
    id: 6,
    imageUri: require("../../assets/products/product_14.jpg"),
    name: "Protection Suit",
    priceOne: 60,
    priceTwo: "60$"
  },
  {
    id: 7,
    imageUri: require("../../assets/products/product_15.jpg"),
    name: "Blood PRG gel tube",
    priceOne: 0.5,
    priceTwo: "0.5$"
  },
  {
    id: 8,
    imageUri: require("../../assets/products/product_16.jpg"),
    name: "Weighing Machine",
    priceOne: 35,
    priceTwo: "35$"
  },
  {
    id: 9,
    imageUri: require("../../assets/products/product_17.jpg"),
    name: "Sethoscope",
    priceOne: 25,
    priceTwo: "25$"
  },
  {
    id: 10,
    imageUri: require("../../assets/products/product_18.jpg"),
    name: "WheelChair",
    priceOne: 100,
    priceTwo: "100$"
  },
  {
    id: 11,
    imageUri: require("../../assets/products/product_19.jpg"),
    name: "Ketone Meter",
    priceOne: 8,
    priceTwo: "8$"
  },
  {
    id: 12,
    imageUri: require("../../assets/products/product_20.jpg"),
    name: "Ketone Meter",
    priceOne: 8,
    priceTwo: "8$"
  },
  
];

/*const SHOES = [
  {
    id: 1,
    imageUri: require("../../assets/shoes/shoes_1.jpg"),
    name: "Helena",
    priceOne: 120,
    priceTwo: "$180"
  },
  {
    id: 2,
    imageUri: require("../../assets/shoes/shoes_2.jpg"),
    name: "Marie-Anne short",
    priceOne: 180,
    priceTwo: null
  },
  {
    id: 3,
    imageUri: require("../../assets/shoes/shoes_3.jpg"),
    name: "Betruschka",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 4,
    imageUri: require("../../assets/shoes/shoes_4.jpg"),
    name: "Betruschka",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 5,
    imageUri: require("../../assets/shoes/shoes_1.jpg"),
    name: "Betruschka",
    priceOne: 80,
    priceTwo: null
  },
  {
    id: 6,
    imageUri: require("../../assets/shoes/shoes_2.jpg"),
    name: "Betruschka",
    priceOne: 80,
    priceTwo: null
  }
];
*/
class Category extends Component {
  state = {
    currentIndex: 0
  };

  renderCategory = () => {
    return CATEGORY.map((item, i) => {
      return (
        <Text
          key={i}
          onPress={() => this.setState({ currentIndex: i })}
          style={{
            fontSize: 18,
            color: this.state.currentIndex === i ? "#F08C4F" : "white",
            paddingHorizontal: 10
          }}
        >
          {item}
        </Text>
      );
    });
  };

  renderItemList_Dress = () => {
    return DRESSES.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: item.imageUri,
              detailPriceOne: item.priceOne,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          priceOne={item.priceOne}
          priceTwo={item.priceTwo ? item.priceTwo : null}
        />
      );
    });
  };

  /*renderItemList_Shoes = () => {
    return SHOES.map((item, i) => {
      return (
        <ItemList
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              detailName: item.name,
              detailImageUri: item.imageUri,
              detailPriceOne: item.priceOne,
              detailPriceTwo: item.priceTwo ? item.priceTwo : null
            })
          }
          key={item.id}
          imageUri={item.imageUri}
          name={item.name}
          priceOne={item.priceOne}
          priceTwo={item.priceTwo ? item.priceTwo : null}
        />
      );
    });
  };
  */

  renderItemList = () => {
    if (this.state.currentIndex === 0) {
      return this.renderItemList_Dress();
    } else if (this.state.currentIndex === 1) {
      return this.renderItemList_Shoes();
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        {/* headerScrollHorizontal */}
        <View
          style={{
            height: hp("8%"),
            backgroundColor: "#63CBA7",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 4
            }}
          >
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "center"
              }}
              ref={node => (this.scroll = node)}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
               {/*this.renderCategory()*/}
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Icon
              onPress={() => {
                this.scroll.scrollTo({ x: wp("80%") });
              }}
              name="ios-arrow-forward"
              size={20}
              color="white"
            />
          </View>
        </View>
        {/* headerScrollHorizontal */}

        {/* itemLists ScrollVertical */}
        <View
          style={{
            flex: 1
          }}
        >
          <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            {/* ItemList */}
            {this.renderItemList()}
          </ScrollView>
        </View>
        {/* itemLists ScrollVertical */}
      </View>
    );
  }
}


export default Category;
