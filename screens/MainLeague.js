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

const lckCard = require("@/assets/images/league card images/LCK-Card.png");
const lplCard = require("@/assets/images/league card images/LPL-Card.png");
const lcsCard = require("@/assets/images/league card images/LCS-Card.png");
const lecCard = require("@/assets/images/league card images/LEC-Card.png");
const pcsCard = require("@/assets/images/league card images/PCS-Card.png");
const vcsCard = require("@/assets/images/league card images/VCS-Card.png");
const llaCard = require("@/assets/images/league card images/LLA-Card.png");
const cblolCard = require("@/assets/images/league card images/CBLOL-Card.png");

const loadFonts = async () => {
  await Font.loadAsync({
    "PPTelegraf-Regular": require("@/assets/fonts/PPTelegraf-Regular.otf"),
    "PPTelegraf-UltraBold": require("@/assets/fonts/PPTelegraf-UltraBold.otf"),
    // Add more fonts here if needed
  });
};

const MainLeague = ({ navigation }) => {
  const handleSwipe = (directionY) => {
    if (directionY === "up" || directionY === "down") {
      navigation.navigate("Regional");
    }
  };

  return (
    <SwipeDetector onSwipe={handleSwipe}>
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={[styles.textRegularHeader, { width: 212 }]}>
              MAIN LEAGUES
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Regional")}>
              <Feather name="chevron-down" size={32} color="white" />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal={false}
            vertical={true}
            contentContainerStyle={styles.leagueScrollContentContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <Image source={lckCard} style={[{ marginBottom: -40 }]}></Image>
            <Image source={lplCard} style={[{ marginBottom: -40 }]}></Image>
            <Image source={lcsCard} style={[{ marginBottom: -40 }]}></Image>
            <Image source={lecCard} style={[{ marginBottom: -40 }]}></Image>
            <Image source={pcsCard} style={[{ marginBottom: -40 }]}></Image>
            <Image source={vcsCard} style={[{ marginBottom: -40 }]}></Image>
            <Image source={llaCard} style={[{ marginBottom: -40 }]}></Image>
            <Image source={cblolCard} style={[{ marginBottom: -40 }]}></Image>
          </ScrollView>
        </SafeAreaView>
      </View>
    </SwipeDetector>
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
    width: 100,
  },
  textBoldXSmallGrey: {
    fontFamily: "PPTelegraf-UltraBold",
    color: "#A3AAB1",
    fontSize: 10,
    marginBottom: 4,
  },
  headerContainer: {
    width: 353,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 40,
    marginTop: 24,
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
  leagueIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    resizeMode: "contain",
  },
  leagueIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#A3AAB1",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  leagueScrollContentContainer: {
    width: 372,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  leagueframeContainer: {
    width: 172,
    height: 240,
    borderRadius: 20,
    backgroundColor: "white",
    flexDirection: "column",
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 24,
    marginRight: 12,
  },
  seasoninfoContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 36,
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

export default MainLeague;
