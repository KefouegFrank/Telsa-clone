import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const menuOption = ({ item }) => {
  return (
    <Link href={item.href} asChild>
      <Pressable style={styles.optionRaw}>
        {/* icon */}
        <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />

        {/* text */}
        <Text style={styles.optionText}>{item.name}</Text>

        {/* icon */}
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="gray"
          style={{ marginLeft: "auto", marginRight: 5 }}
        />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  optionRaw: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  optionText: {
    color: "#eee",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default menuOption;
