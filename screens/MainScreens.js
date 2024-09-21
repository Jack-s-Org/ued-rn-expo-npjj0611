import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import MeScreen from "./MeScreen";
import DiscoverScreen from "./DiscoverScreen";
import InternationalScreen from "./InternationalScreen";
import RegionalScreen from "./RegionalScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";
import StreamScreen from "./DiscoverScreen";
import UpcomingScreen from "./UpcomingScreen";
import LivestreamScreen from "./LivestreamScreen";
import FeatureIntroScreen from "./FeatureIntroScreen";
import SelectGamesScreen from "./SelectGamesScreen";
import HighlightSettingScreen from "./HighlightSettingScreen";
import MainLeague from "./MainLeague";

const MainStacks = createNativeStackNavigator();
const HomeStacks = createNativeStackNavigator();
const StreamStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const HomeScreens = () => {
  return (
    <HomeStacks.Navigator screenOptions={{ headerShown: false }}>
      <HomeStacks.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStacks.Screen
        name="Upcoming"
        component={UpcomingScreen}
        options={{ animation: "slide_from_bottom" }}
      />
      <HomeStacks.Screen
        name="Regional"
        component={RegionalScreen}
        options={{ animation: "slide_from_bottom" }}
      />
      <HomeStacks.Screen
        name="International"
        component={InternationalScreen}
        options={{ animation: "slide_from_bottom" }}
      />
      <HomeStacks.Screen
        name="Stream"
        component={StreamScreen}
        options={{ animation: "slide_from_bottom" }}
      />
      <HomeStacks.Screen
        name="Livestream"
        component={LivestreamScreen}
        options={{ animation: "slide_from_bottom" }}
      />
    </HomeStacks.Navigator>
  );
};

const StreamScreens = () => {
  return (
    <StreamStacks.Navigator screenOptions={{ headerShown: false }}>
      <StreamStacks.Screen
        name="Stream"
        component={StreamScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <StreamStacks.Screen
        name="Livestream"
        component={LivestreamScreen}
        options={{ animation: "slide_from_bottom" }}
      /> */}
    </StreamStacks.Navigator>
  );
};

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(3);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#05090C",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          position: "absolute",
          elevation: 0, // Remove shadow on Android
          borderTopWidth: 0, // Remove border
          height: 80, // Increase height to fit ellipses
          marginHorizontal: 0, // Remove horizontal margin
          paddingHorizontal: 0, // Remove horizontal padding
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreens}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={{
                  position: "absolute",
                  width: 108,
                  height: 108,
                  borderRadius: 200,
                  backgroundColor: "#D1D5D8", // Full white color
                  margin: 0, // Ensure no margin
                  padding: 0, // Ensure no padding
                }}
              />
              <View
                style={{
                  position: "absolute",
                  width: 72,
                  height: 72,
                  borderRadius: 100, // This makes it circular
                  backgroundColor: "white", // Different background color for contrast
                }}
              ></View>
              <Entypo name="home" size={28} color={color} />
            </View>
          ),
          tabBarLabel: "Home",
        }}
      />

      <Tab.Screen
        name="Streaming"
        component={StreamScreens}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={{
                  position: "absolute",
                  width: 108,
                  height: 108,
                  borderRadius: 200,
                  backgroundColor: "#D1D5D8", // Full white color
                  margin: 0, // Ensure no margin
                  padding: 0, // Ensure no padding
                }}
              />
              <View
                style={{
                  position: "absolute",
                  width: 72,
                  height: 72,
                  borderRadius: 100, // This makes it circular
                  backgroundColor: "white", // Different background color for contrast
                }}
              ></View>
              <MaterialIcons name="smart-display" size={28} color={color} />
            </View>
          ),
          tabBarLabel: "Discover",
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={{
                  position: "absolute",
                  width: 108,
                  height: 108,
                  borderRadius: 200,
                  backgroundColor: "#D1D5D8", // Full white color
                  margin: 0, // Ensure no margin
                  padding: 0, // Ensure no padding
                }}
              />
              <View
                style={{
                  position: "absolute",
                  width: 72,
                  height: 72,
                  borderRadius: 100, // This makes it circular
                  backgroundColor: "white", // Different background color for contrast
                }}
              ></View>
              <Ionicons name="medal" size={24} color={color} />
            </View>
          ),
          tabBarLabel: "Inbox",
          // tabBarBadge: unreadCount,
        }}
        // listeners={{
        //   tabPress: () => {
        //     setUnreadCount(null);
        //   },
        // }}
      />

      <Tab.Screen
        name="SettingsDrawer"
        component={MeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={{
                  position: "absolute",
                  width: 108,
                  height: 108,
                  borderRadius: 200,
                  backgroundColor: "#D1D5D8", // Full white color
                  margin: 0, // Ensure no margin
                  padding: 0, // Ensure no padding
                }}
              />
              <View
                style={{
                  position: "absolute",
                  width: 72,
                  height: 72,
                  borderRadius: 100, // This makes it circular
                  backgroundColor: "white", // Different background color for contrast
                }}
              ></View>
              <MaterialIcons name="person" size={28} color={color} />
            </View>
          ),
          tabBarLabel: "Me",
        }}
      />
    </Tab.Navigator>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="FeatureIntro" // Add FeatureIntroScreen in MainStacks
        component={FeatureIntroScreen}
        options={{
          animation: "slide_from_bottom", // Custom animation
          headerShown: false, // Hide header if needed
        }}
      />
      <MainStacks.Screen
        name="SelectGames" // Add FeatureIntroScreen in MainStacks
        component={SelectGamesScreen}
        options={{
          animation: "slide_from_right", // Custom animation
          headerShown: false, // Hide header if needed
        }}
      />
      <MainStacks.Screen
        name="HighlightSetting" // Add FeatureIntroScreen in MainStacks
        component={HighlightSettingScreen}
        options={{
          animation: "slide_from_right", // Custom animation
          headerShown: false, // Hide header if needed
        }}
      />
      <MainStacks.Screen
        name="MainLeague" // Add FeatureIntroScreen in MainStacks
        component={MainLeague}
        options={{
          animation: "slide_from_bottom", // Custom animation
          headerShown: false, // Hide header if needed
        }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;
