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

const g2Logo = require("@/assets/images/teams logo/G2-Logo.jpg");
const t1Logo = require("@/assets/images/teams logo/T1-Logo.jpeg");
const drxLogo = require("@/assets/images/teams logo/DRX-Logo.jpg");
const mainMatchFrame = require("@/assets/images/image frames/MainMatchFrame.png");
const miniMatchFrame1 = require("@/assets/images/image frames/MiniMatchFrame1.png");
const miniMatchFrame2 = require("@/assets/images/image frames/MiniMatchFrame2.png");
const miniMatchFrame3 = require("@/assets/images/image frames/MiniMatchFrame3.png");
const regionalFrame = require("@/assets/images/image frames/RegionalFrame.png");
const internationalFrame = require("@/assets/images/image frames/InternationalFrame.png");
const mainNewsFrame1 = require("@/assets/images/image frames/MainNewsFrame1.png");
const mainNewsFrame2 = require("@/assets/images/image frames/MainNewsFrame2.png");
const miniNewsFrame1 = require("@/assets/images/image frames/MiniNewsFrame1.png");
const miniNewsFrame2 = require("@/assets/images/image frames/MiniNewsFrame2.png");
const highlightFrame1 = require("@/assets/images/image frames/HighlightFrame1.png");
const highlightFrame2 = require("@/assets/images/image frames/HighlightFrame2.png");
const highlightFrame3 = require("@/assets/images/image frames/HighlightFrame3.png");
const highlightFrame4 = require("@/assets/images/image frames/HighlightFrame4.png");
const gameNav = require("@/assets/images/image frames/GameNav.png");

const loadFonts = async () => {
  await Font.loadAsync({
    "PPTelegraf-Regular": require("@/assets/fonts/PPTelegraf-Regular.otf"),
    "PPTelegraf-UltraBold": require("@/assets/fonts/PPTelegraf-UltraBold.otf"),
  });
};

const HomeScreen = ({ navigation }) => {
  const handleSwipe = (directionY) => {
    if (directionY === "up" || directionY === "down") {
      navigation.navigate("Upcoming");
    }
  };

  return (
    <SwipeDetector onSwipe={handleSwipe}>
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={[styles.topNavContainer, { marginBottom: 40 }]}>
            <Image source={gameNav}></Image>
            <Ionicons name="notifications" size={36} color="white" />
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.textRegularHeader2XL}>League of Legends</Text>
            <View style={styles.headerarrowContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("Upcoming")}>
                <Text
                  style={[
                    styles.textRegularHeader2XL,
                    { marginRight: 12 },
                    { color: "#A3AAB1" },
                  ]}
                >
                  Feed
                </Text>
              </TouchableOpacity>
              <AntDesign name="caretdown" size={20} color="#A3AAB1" />
            </View>
          </View>
          <View
            style={[
              styles.teamsfollowedContainer,
              { marginBottom: 40 },
              { marginLeft: 20 },
            ]}
          >
            <Text style={[styles.textRegularHeaderM, { marginBottom: 12 }]}>
              Teams You Follow
            </Text>
            <View style={styles.teamsfollowedminiContainer}>
              <View style={[styles.teamsLogoContainer, { marginLeft: 4 }]}>
                <Image source={t1Logo} style={styles.teamLogo} />
              </View>
              <View style={styles.teamsLogoContainer}>
                <Image source={g2Logo} style={styles.teamLogo} />
              </View>
              <View style={styles.teamsLogoContainer}>
                <Image source={drxLogo} style={styles.teamLogo} />
              </View>
            </View>
          </View>

          <View style={styles.feedContainer}>
            <View
              style={[styles.miniFeedContainer, { backgroundColor: "#05090C" }]}
            >
              <Text
                style={[
                  styles.textRegularHeaderL,
                  { width: 192 },
                  { marginBottom: 12 },
                ]}
              >
                Upcoming Matches
              </Text>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.frameScrollContentContainer}
                showsHorizontalScrollIndicator={false}
              >
                <Image source={mainMatchFrame} style={[{ marginRight: 12 }]} />
                <Image source={miniMatchFrame1} style={[{ marginRight: 12 }]} />
                <Image source={miniMatchFrame2} style={[{ marginRight: 12 }]} />
                <Image source={miniMatchFrame3} style={[{ marginRight: 12 }]} />
                <View style={styles.morebuttonContainer}>
                  <FontAwesome6 name="arrow-right" size={28} color="black" />
                  <TouchableOpacity onPress={() => alert("Coming Soon")}>
                    <Text style={styles.morebuttonText}>MORE</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>

            <View
              style={[styles.miniFeedContainer, { backgroundColor: "#0F1A24" }]}
            >
              <Text
                style={[
                  styles.textRegularHeaderL,
                  { width: 244 },
                  { marginBottom: 12 },
                ]}
              >
                Events & Tournaments
              </Text>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.frameScrollContentContainer}
                showsHorizontalScrollIndicator={false}
              >
                <Image source={regionalFrame} style={[{ marginRight: 12 }]} />
                <Image
                  source={internationalFrame}
                  style={[{ marginRight: 12 }]}
                />
                <View style={styles.morebuttonContainer}>
                  <FontAwesome6 name="arrow-right" size={28} color="black" />
                  <TouchableOpacity onPress={() => alert("Coming Soon")}>
                    <Text style={styles.morebuttonText}>MORE</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>

            <View
              style={[styles.miniFeedContainer, { backgroundColor: "#0F1A24" }]}
            >
              <Text
                style={[
                  styles.textRegularHeaderL,
                  { width: 232 },
                  { marginBottom: 12 },
                ]}
              >
                Latest News & Articles
              </Text>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.frameScrollContentContainer}
                showsHorizontalScrollIndicator={false}
              >
                <Image source={mainNewsFrame1} style={[{ marginRight: 12 }]} />
                <Image source={mainNewsFrame2} style={[{ marginRight: 12 }]} />
                <Image source={miniNewsFrame1} style={[{ marginRight: 12 }]} />
                <Image source={miniNewsFrame2} style={[{ marginRight: 12 }]} />
                <View style={styles.morebuttonContainer}>
                  <FontAwesome6 name="arrow-right" size={28} color="black" />
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Regional")}
                  >
                    <Text style={styles.morebuttonText}>MORE</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>

            <View
              style={[styles.miniFeedContainer, { backgroundColor: "#0F1A24" }]}
            >
              <Text
                style={[
                  styles.textRegularHeaderL,
                  { width: 188 },
                  { marginBottom: 12 },
                ]}
              >
                Recent Highlights
              </Text>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.frameScrollContentContainer}
                showsHorizontalScrollIndicator={false}
              >
                <Image source={highlightFrame1} style={[{ marginRight: 12 }]} />
                <Image source={highlightFrame2} style={[{ marginRight: 12 }]} />
                <Image source={highlightFrame3} style={[{ marginRight: 12 }]} />
                <Image source={highlightFrame4} style={[{ marginRight: 12 }]} />
                <View style={styles.morebuttonContainer}>
                  <FontAwesome6 name="arrow-right" size={28} color="black" />
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Regional")}
                  >
                    <Text style={styles.morebuttonText}>MORE</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </SwipeDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#0F1A24",
  },
  textRegularHeader2XL: {
    fontFamily: "PPTelegraf-Regular",
    color: "white",
    fontSize: 60,
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
  textRegularSmall: {
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
  feedContainer: {
    width: 393,
    flexDirection: "column",
  },
  miniFeedContainer: {
    width: 393,
    height: 360,
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: 12,
    paddingTop: 72,
    paddingLeft: 20,
    marginBottom: -200,
  },
  teamsfollowedContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 60,
  },
  teamsfollowedminiContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  teamsLogoContainer: {
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
  teamLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  frameScrollContentContainer: {
    flexDirection: "row",
    alignItems: "center",
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

export default HomeScreen;
