import { StyleSheet, Text, View, Image } from "react-native";

import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

import car from "../assets/images/car.png";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>

        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>

      <Image source={car} style={styles.image} resizeMode="conatin" />

      <View style={styles.controls}>
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
      </View>

      <View style={styles.optionRaw}>
        <View style={styles.boxer}>
          <Text>
          <MaterialCommunityIcons name="car" size={26} color="gray" />
          </Text>
          <Text style={styles.texto}>Controls</Text>
        </View>

        <AntDesign name="right" size={30} color="grey" style={styles.box} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  header: {
    marginTop: -15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#eee",
    marginBottom: 5,
  },
  subtitle: {
    fontWeight: "500",
    color: "gray",
  },
  image: {
    width: "100%",
    height: 300,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  optionRaw:{
  },
  // boxer: {
  //   backgroundColor: "blue",
  //   flexDirection: "row",
  // },
  // texto: {
  //   marginLeft: 7,
  //   color: "#eee",
  //   fontSize: 15,
  //   paddingTop: 4,
  // },
  // box: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
});
