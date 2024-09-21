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
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Font from "expo-font";
import SwipeDetector from "@/components/SwipeDetector/SwipeDetectorUpDown";

const videoUI = require("@/assets/images/image frames/Feature-1.png");

const loadFonts = async () => {
  await Font.loadAsync({
    "PPTelegraf-Regular": require("@/assets/fonts/PPTelegraf-Regular.otf"),
    "PPTelegraf-UltraBold": require("@/assets/fonts/PPTelegraf-UltraBold.otf"),
  });
};

const VideoStream = ({ navigation }) => {
  const handleSwipe = (directionY) => {
    if (directionY === "up" || directionY === "down") {
      navigation.navigate("Upcoming");
    }
  };

  return (
    <SwipeDetector onSwipe={handleSwipe}>
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <Image source={videoUI}></Image>
        </SafeAreaView>
      </View>
    </SwipeDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1A24",
  },
  textRegularHeader2XL: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 60,
  },
  textRegularXL: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 48,
  },
  textRegularHeaderL: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 40,
  },
  textRegularHeaderML: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 28,
  },
  textRegularHeaderM: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 24,
  },
  textRegularHeaderDark: {
    fontFamily: "PPTelegraf-Regular",
    color: "#0A1118",
    fontSize: 40,
  },
  textRegularXS: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 16,
    width: "100%",
  },
  textRegular2XS: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 12,
    width: "100%",
  },
  textRegularMediumDark: {
    fontFamily: "PPTelegraf-Regular",
    color: "#0A1118",
    fontSize: 16,
    width: 84,
  },
  textBoldXSmallGrey: {
    fontFamily: "PPTelegraf-UltraBold",
    color: "#A3AAB1",
    fontSize: 10,
    marginBottom: 4,
  },
  topNavContainer: {
    width: 353,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
  },
  headerContainer: {
    width: 276,
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 20,
  },
  headerarrowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 4,
  },
  featureFrame: {
    width: 353,
    height: 400,
    flexDirection: "column",
    marginLeft: 20,
    marginTop: 12,
  },
  featureTopFrame: {
    width: "100%",
    height: 200,
    backgroundColor: "#2A50EB",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 16,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  featureBotFrame: {
    width: "100%",
    height: 468,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconContainer: {
    width: 92,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconFrameContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#9CE9D5",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  matchScrollContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  botNavContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 12,
  },
  nextbuttonContainer: {
    width: 48,
    height: 48,
    borderRadius: 200,
    backgroundColor: "#D1D5D8",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default VideoStream;
