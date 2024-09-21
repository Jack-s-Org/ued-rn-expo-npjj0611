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

const strafelolpurpleImage = require("@/assets/images/Strafelol-icon-purple.png");
const worldsLogo = require("@/assets/images/league logo/Worlds-logo.jpg");
const msiLogo = require("@/assets/images/league logo/MSI-logo.jpg");
const worldsIcon = require("@/assets/images/league logo/Worlds-icon.png");
const msiIcon = require("@/assets/images/league logo/MSI-icon.png");
const ewcIcon = require("@/assets/images/league logo/EWC-icon.png");
const rrIcon = require("@/assets/images/league logo/RR-icon.png");

const loadFonts = async () => {
  await Font.loadAsync({
    "PPTelegraf-Regular": require("@/assets/fonts/PPTelegraf-Regular.otf"),
    "PPTelegraf-UltraBold": require("@/assets/fonts/PPTelegraf-UltraBold.otf"),
    // Add more fonts here if needed
  });
};

const InternationalScreen = ({ navigation }) => {
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
            <Text style={[styles.textRegularHeader, { width: 248 }]}>
              INTERNATIONAL EVENTS
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Upcoming")}>
              <Feather name="chevron-down" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.strafelolContainer}>
            <Image
              source={strafelolpurpleImage}
              style={styles.strafelolImage}
            />
            <Image
              source={strafelolpurpleImage}
              style={styles.strafelolImage}
            />
            <Image
              source={strafelolpurpleImage}
              style={styles.strafelolImage}
            />
          </View>
          <View style={[styles.leaguefollowedContainer, { marginBottom: 24 }]}>
            <Text style={[styles.textRegularSmall, { marginBottom: 8 }]}>
              Leagues Followed
            </Text>
            <View style={styles.leaguefollowedminiContainer}>
              <Text
                style={[
                  styles.textRegularHeader,
                  { marginRight: 24, flexShrink: 1 },
                ]}
              >
                02/05
              </Text>
              <View style={styles.leagueLogoContainer}>
                <Image source={worldsLogo} style={styles.leagueLogo} />
              </View>
              <View style={styles.leagueLogoContainer}>
                <Image source={msiLogo} style={styles.leagueLogo} />
              </View>
            </View>
          </View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.leagueScrollContentContainer}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.leagueframeContainer}>
              <View style={styles.leagueIconContainer}>
                <Image source={worldsIcon} style={styles.leagueIcon}></Image>
              </View>
              <View style={styles.seasoninfoContainer}>
                <Text style={[styles.textBoldXSmallGrey]}>CURRENT</Text>
                <Text style={[styles.textRegularMediumDark]}>
                  PLAY-IN STAGE
                </Text>
              </View>
              <View style={styles.seasoninfoContainer}>
                <Text style={[styles.textBoldXSmallGrey]}>NEXT MATCH</Text>
                <Text style={[styles.textRegularHeaderDark]}>25 SEP</Text>
              </View>
            </View>

            <View style={styles.leagueframeContainer}>
              <View style={styles.leagueIconContainer}>
                <Image source={msiIcon} style={styles.leagueIcon}></Image>
              </View>
              <View style={styles.seasoninfoContainer}>
                <Text style={[styles.textBoldXSmallGrey]}>CURRENT</Text>
                <Text style={[styles.textRegularMediumDark]}>
                  EVENT CONCLUDED
                </Text>
              </View>
              <View style={styles.seasoninfoContainer}>
                <Text style={[styles.textBoldXSmallGrey]}>LAST MATCH</Text>
                <Text style={[styles.textRegularHeaderDark]}>19 MAY</Text>
              </View>
            </View>

            <View style={styles.leagueframeContainer}>
              <View style={styles.leagueIconContainer}>
                <Image source={ewcIcon} style={styles.leagueIcon}></Image>
              </View>
              <View style={styles.seasoninfoContainer}>
                <Text style={[styles.textBoldXSmallGrey]}>CURRENT</Text>
                <Text style={[styles.textRegularMediumDark]}>
                  EVENT CONCLUDED
                </Text>
              </View>
              <View style={styles.seasoninfoContainer}>
                <Text style={[styles.textBoldXSmallGrey]}>NEXT MATCH</Text>
                <Text style={[styles.textRegularHeaderDark]}>08 JUL</Text>
              </View>
            </View>

            <View style={styles.leagueframeContainer}>
              <View style={styles.leagueIconContainer}>
                <Image source={rrIcon} style={styles.leagueIcon}></Image>
              </View>
              <View style={styles.seasoninfoContainer}>
                <Text style={[styles.textBoldXSmallGrey]}>CURRENT</Text>
                <Text style={[styles.textRegularMediumDark]}>
                  EVENT CONCLUDED
                </Text>
              </View>
              <View style={styles.seasoninfoContainer}>
                <Text style={[styles.textBoldXSmallGrey]}>NEXT MATCH</Text>
                <Text style={[styles.textRegularHeaderDark]}>07 JUL</Text>
              </View>
            </View>

            <View style={styles.morebuttonContainer}>
              <FontAwesome6 name="arrow-right" size={28} color="black" />
              <TouchableOpacity onPress={() => alert("Coming Soon")}>
                <Text style={styles.morebuttonText}>MORE</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </SwipeDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    flexDirection: "row",
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

export default InternationalScreen;
