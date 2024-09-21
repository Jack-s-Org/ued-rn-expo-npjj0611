import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as Font from "expo-font";
import SwipeDetector from "@/components/SwipeDetector/SwipeDetectorUpDown";

const viewershipBar = require("@/assets/images/image frames/ViewershipBar.png");
const lckTwitch = require("@/assets/images/image frames/StreamFrame1.png");
const caedrelTwitch = require("@/assets/images/image frames/StreamFrame2.png");
const lckYoutube = require("@/assets/images/image frames/StreamFrame3.png");

const loadFonts = async () => {
  await Font.loadAsync({
    "PPTelegraf-Regular": require("@/assets/fonts/PPTelegraf-Regular.otf"),
    "PPTelegraf-UltraBold": require("@/assets/fonts/PPTelegraf-UltraBold.otf"),
    // Add more fonts here if needed
  });
};

const LivestreamScreen = ({ navigation }) => {
  const handleSwipe = (directionY) => {
    if (directionY === "up" || directionY === "down") {
      navigation.navigate("Stream");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text
            style={[
              styles.textRegularHeader,
              { color: "#0A1118" },
              { width: 212 },
            ]}
          >
            Live Viewership
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Stream")}>
            <Feather name="chevron-down" size={24} color="#0A1118" />
          </TouchableOpacity>
        </View>
        <Image source={viewershipBar}></Image>
        <View style={styles.viewerContainer}>
          <Text style={[styles.textRegular3XL, { color: "#0A1118" }]}>
            1,678,912
          </Text>
          <View style={styles.viewerInfoContainer}>
            <View style={styles.twitchIconContainer}>
              <FontAwesome6 name="twitch" size={16} color="black" />
              <Text>Twitch</Text>
            </View>
            <Text>Active Streams: 8</Text>
          </View>
        </View>
        <View style={styles.streamContainer}>
          <View style={styles.headerArrowContainer}>
            <Text
              style={[
                styles.textRegularL,
                { color: "#0A1118" },
                { width: 212 },
              ]}
            >
              Active Streams
            </Text>
            <AntDesign name="caretdown" size={24} color="#0A1118" />
          </View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.streamScrollContentContainer}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Stream")}
              style={{ marginRight: 12 }}
            >
              <Image
                source={lckTwitch}
                style={{ resizeMode: "contain" }} // Ensure the image maintains its aspect ratio without cropping
              />
            </TouchableOpacity>
            <Image source={caedrelTwitch} style={[{ marginRight: 12 }]}></Image>
            <Image source={lckYoutube} style={[{ marginRight: 12 }]}></Image>
            <View style={styles.morebuttonContainer}>
              <FontAwesome6 name="arrow-right" size={28} color="black" />
              <TouchableOpacity onPress={() => alert("Coming Soon")}>
                <Text style={styles.morebuttonText}>MORE</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={[{ backgroundColor: "#FCB7BF" }, { height: 100 }]}></View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#AAB9F7",
  },
  textRegularHeader: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 40,
  },
  textRegular3XL: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 64,
  },
  textRegularL: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 40,
  },
  textRegularM: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 24,
    width: "100%",
  },
  textRegularS: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 20,
    width: "100%",
  },
  textRegularXS: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 16,
  },
  textRegular2XS: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 12,
  },
  textBold3XS: {
    fontFamily: "PPTelegraf-UltraBold",
    color: "white",
    fontSize: 10,
    marginBottom: 4,
  },
  headerContainer: {
    width: 353,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 28,
    marginTop: 40,
  },
  viewerContainer: {
    width: "100%",
    height: 104,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 12,
    marginTop: 32,
    borderBottomWidth: 1, // Adds the bottom stroke
    borderBottomColor: "#000", // Set the color of the bottom border
  },
  viewerInfoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  twitchIconContainer: {
    width: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  streamContainer: {
    width: "100%",
    height: 485,
    backgroundColor: "#7F96F3",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 20,
    paddingBottom: 100,
    marginTop: 8,
  },
  headerArrowContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  streamScrollContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 20,
    paddingHorizontal: 20,
  },
  morebuttonContainer: {
    width: 120,
    height: 120,
    borderRadius: 200,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  morebuttonText: {
    fontFamily: "PPTelegraf-Regular",
    fontSize: 20,
    color: "#0A1118",
    marginTop: 8,
  },
});

export default LivestreamScreen;
