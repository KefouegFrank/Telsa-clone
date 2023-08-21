import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Model S</Text>
        <Text style={styles.subtitle}>Packed</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#161918',
     
  },
  header: {
   marginTop: -20,
  },
  title: {
    fontSize: 23,
    color:'#eee', 
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: "grey",
    fontWeight: '500'
  },
});
