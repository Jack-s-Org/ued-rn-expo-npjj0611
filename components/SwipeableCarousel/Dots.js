import React from "react";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Dots = ({ data, currentIndex }) => {
  return (
    // container to contain
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {data.map((_, index) => (
        // using Icons instead of dots
        // index === currentIndex ? <AntDesign name="closecircle" size={24} color="black" /> : <AntDesign name="checkcircle" size={24} color="black" />
        <View
          key={index}
          style={{
            height: 8,
            width: 8,
            marginRight: 8,
            backgroundColor: index === currentIndex ? "#000" : "#dadada",
          }}
        />
      ))}
    </View>
  );
};

export default Dots;
