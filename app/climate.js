import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import climate from "../assets/images/climate.png";

import { Entypo } from "@expo/vector-icons";

const ClimateScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={climate} style={styles.climate} resizeMode="cover" />
      
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
  },
  climate: {
    width: "90%",
    height: "80%",
  },
});

export default ClimateScreen;
