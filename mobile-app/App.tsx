import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Name="Next Level Gaming"
export default function App() {
  return (
    <View style={styles.container}>
      <text>{Name}</text>
      <view style={styles.card}>


      </view>
      <text>What we offer</text>
      <text>Our Services</text>
      <view style={styles.card}>
      
      </view>
      <view style={styles.card}>

      </view>
      <text>About Us</text>
      <view style={styles.card}>

      </view>
      <text>Our Packages</text>
      <text>Choose your Experience</text>
      <view style={styles.card}>

      </view>
      <text>Events & Tournaments</text>
      <view style={styles.card}>

      </view>
      <text>Gallery</text>
      <view style={styles.card}>

      </view>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  card:{
    backgroundColor:"#f5f4ef",
    padding:50,
  },
  Name:{
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
