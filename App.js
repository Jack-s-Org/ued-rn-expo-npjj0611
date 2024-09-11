import React from "react";
import { View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Icon = createIconSetFromIcoMoon(
  require("./assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./assets/icomoon/icomoon.ttf"),
    "PPTelegraf-Regular": require("@/assets/fonts/PPTelegraf-Regular.otf"),
    "PPTelegraf-UltraBold": require("@/assets/fonts/PPTelegraf-UltraBold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <RootNavigator />
          {/* Other components can be added here */}
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

// export default function App() {
//   return <RootNavigator />;
// }
