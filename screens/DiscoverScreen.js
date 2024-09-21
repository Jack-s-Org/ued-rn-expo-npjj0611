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
import * as Font from "expo-font";
import SwipeDetector from "@/components/SwipeDetector/SwipeDetectorUpDown";

const viewerBar = require("@/assets/images/image frames/ViewerInfoBar.png");
const matchTracker = require("@/assets/images/image frames/MatchTracker.png");
const fanVoteMin = require("@/assets/images/image frames/FanVoteMin.png");
const matchInfo = require("@/assets/images/image frames/MatchInfo.png");
const statsFrame = require("@/assets/images/image frames/StatisticsFrame.png");

const loadFonts = async () => {
  await Font.loadAsync({
    "PPTelegraf-Regular": require("@/assets/fonts/PPTelegraf-Regular.otf"),
    "PPTelegraf-UltraBold": require("@/assets/fonts/PPTelegraf-UltraBold.otf"),
    // Add more fonts here if needed
  });
};

const StreamScreen = ({ navigation }) => {
  const handleSwipe = (directionY) => {
    if (directionY === "up" || directionY === "down") {
      navigation.navigate("Regional");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={[styles.textRegularHeader, { width: 212 }]}>
            MATCH FEED
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Upcoming")}>
            <Feather name="chevron-down" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <Image source={matchInfo}></Image>

        <ScrollView
          horizontal={true}
          vertical={false}
          contentContainerStyle={styles.leagueScrollContentContainer}
          showsHorizontalScrollIndicator={false}
          style={[{ padding: 20 }]}
        >
          <View
            style={[styles.infoframeContainer, { backgroundColor: "#AAB9F7" }]}
          >
            <Text style={[styles.textRegularXS, { color: "#05090C" }]}>
              Live Viewership
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Livestream")}>
              <Image
                source={viewerBar}
                style={{ resizeMode: "contain" }} // Ensure the image maintains its aspect ratio without cropping
              />
            </TouchableOpacity>
            <View style={styles.infoContainer}>
              <Text style={[styles.textBold3XS, { color: "#11205E" }]}>
                TOTAL VIEWERSHIP
              </Text>
              <Text style={[styles.textRegularL, { color: "#05090C" }]}>
                2,305,108
              </Text>
            </View>
          </View>

          <View style={styles.miniFrameContainer}>
            <View style={[styles.infominiFrame, { marginBottom: 12 }]}>
              <Text style={[styles.textRegularXS, { color: "#0A1118" }]}>
                Active Streams
              </Text>
              <Text style={[styles.textRegularL, { color: "#0A1118" }]}>
                14
              </Text>
            </View>
            <View
              style={[styles.infominiFrame, { backgroundColor: "#FCB7BF" }]}
            >
              <Text style={[styles.textRegularXS, { color: "#0A1118" }]}>
                Fan Vote
              </Text>
              <Image source={fanVoteMin}></Image>
            </View>
          </View>

          <View
            style={[styles.infoframeContainer, { backgroundColor: "#FBE9B9" }]}
          >
            <Text style={[styles.textRegularXS, { color: "#05090C" }]}>
              Match Tracker
            </Text>
            <Image source={matchTracker} style={[{ marginLeft: 40 }]}></Image>
            <Text
              style={[
                styles.textRegularM,
                { marginLeft: 32, color: "#05090C" },
              ]}
            >
              T1{"\u00A0\u00A0\u00A0\u00A0\u00A0"}vs
              {"\u00A0\u00A0\u00A0\u00A0\u00A0"}HLE
            </Text>
          </View>

          <View style={styles.miniFrameContainer}>
            <Image source={statsFrame} style={[{ marginBottom: 12 }]}></Image>
            <View style={styles.morebuttonContainer}>
              <FontAwesome6 name="arrow-right" size={28} color="black" />
              <TouchableOpacity
                onPress={() => alert("Coming Soon")}
              ></TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0F1A24",
  },
  textRegularHeader: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 40,
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
  strafelolContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 32,
  },
  strafelolImage: {
    marginRight: 20,
  },
  leaguefollowedContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    marginTop: 44,
  },
  leaguefollowedminiContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  leagueLogoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20, // Half of the width/height to make it ellipse
    borderWidth: 2,
    borderColor: "white",
    overflow: "hidden", // Ensures the image is cropped to the container
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -8, // Adjusts overlap of logos
  },
  leagueLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  leagueScrollContentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoframeContainer: {
    width: 240,
    height: 240,
    borderRadius: 20,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 24,
    marginRight: 12,
  },
  miniFrameContainer: {
    flexDirection: "column",
  },
  infominiFrame: {
    width: 112,
    height: 114,
    borderRadius: 20,
    backgroundColor: "white",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginRight: 12,
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 36,
  },
  morebuttonContainer: {
    width: 132,
    height: 52,
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

export default StreamScreen;
