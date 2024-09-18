import React from "react";
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
// import { StyleSheet } from "react-native";
import { useSharedValue } from "react-native-reanimated";

export default function SwipeDetector({ children, onSwipe }) {
  const startTranslateY = useSharedValue(0);

  const fling = Gesture.Fling()
    .direction(Directions.UP | Directions.DOWN)
    .onBegin((event) => {
      startTranslateY.value = event.y;
    })
    .onStart((event) => {
      const directionY = event.y - startTranslateY.value < 0 ? "down" : "up";
      onSwipe(directionY);
    })

    .runOnJS(true);

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={fling}>{children}</GestureDetector>
    </GestureHandlerRootView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderRadius: 20,
//     backgroundColor: "#b58df1",
//     cursor: "grab",
//   },
// });
