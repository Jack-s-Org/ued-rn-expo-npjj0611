import { useState } from "react";
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
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(3);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#408086",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />

      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
          tabBarLabel: "Discover",
        }}
      />

      <Tab.Screen
        name="International"
        component={InternationalScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
          tabBarLabel: "International",
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox" size={size} color={color} />
          ),
          tabBarLabel: "Inbox",
          tabBarBadge: unreadCount,
        }}
        listeners={{
          tabPress: () => {
            setUnreadCount(null);
          },
        }}
      />

      <Tab.Screen
        name="SettingsDrawer"
        component={MeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
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
        name="International"
        component={InternationalScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;
