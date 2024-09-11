import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function VideoPlayer() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        // style={{ height: "100%" }}
        style={StyleSheet.absoluteFill}
        // source={{
        //   uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        // }}
        source={require("@/assets/videos/big_buck_bunny.mp4")}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        shouldPlay={true}
        // isLooping={false}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
      <Text style={{ color: "white" }}>Bello Daisy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
});
