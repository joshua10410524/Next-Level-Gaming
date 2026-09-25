import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Name = "Next Level Gaming";
export default function App() {
  return (
    <View style={styles.container}>
      <view style={styles.card}></view>
      <Text>{Name}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    paddingTop: 90,
    paddingHorizontal: 20,
  },
  card:{
    backgroundColor:"#f5f4ef",
    padding:24,
  },
  name:{
    fontSize: 30,
    fontWeight: "bold",
    color: "#f5f4ef",
  },
});
