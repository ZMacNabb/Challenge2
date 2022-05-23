import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Picker,
  Button,
  SafeAreaView
} from "react-native";
import { Link } from "react-router-native";


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.main}>
          {`This section shows who I am`}
        </Text>
        <Text style={styles.school1}>
          {`First Name:`}
        </Text>
        <Text style={styles.school11}>
          {`Zachery `}
        </Text>
        <Text style={styles.school2}>
          {`Last Name: `}
        </Text>
        <Text style={styles.school22}>
          {`MacNabb`}
        </Text>
        <Text style={styles.school3}>
          {`Home Country: `}
        </Text>
        <Text style={styles.school33}>
          {`Canada`}
        </Text>
        <Text style={styles.school4}>
          {`Hometown: `}
        </Text>
        <Text style={styles.school44}>
          {`Edmonton`}
        </Text>
        <Text style={styles.school5}>
          {`Age: `}
        </Text>
        <Text style={styles.school55}>
          {`24`}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    padding: 8,
  },
  main: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    position: 'absolute',
    top: 10,
    left: 20,
    width:1000,
    height: 100,
  },
    school1: {
    margin: 24,
    fontSize: 14,
    fontWeight: "bold",
    position: 'absolute',
    top: 100,
    left: 20,
    width:1000,
    height: 100,
  },
    school11: {
    margin: 24,
    fontSize: 14,
    position: 'absolute',
    top: 100,
    left: 120,
    width:1000,
    height: 100,
  },
    school2: {
    margin: 24,
    fontSize: 14,
    fontWeight: "bold",
    position: 'absolute',
    top: 175,
    left: 20,
    width:1000,
    height: 100,
  },
    school22: {
    margin: 24,
    fontSize: 14,
    position: 'absolute',
    top: 175,
    left: 120,
    width:1000,
    height: 100,
  },
    school3: {
    margin: 24,
    fontSize: 14,
    fontWeight: "bold",
    position: 'absolute',
    top: 250,
    left: 20,
    width:100,
    height: 100,
  },
    school33: {
    margin: 24,
    fontSize: 14,
    position: 'absolute',
    top: 250,
    left: 120,
    width:1000,
    height: 100,
  },
    school4: {
    margin: 24,
    fontSize: 14,
    fontWeight: "bold",
    position: 'absolute',
    top: 325,
    left: 20,
    width:1000,
    height: 100,
  },
    school44: {
    margin: 24,
    fontSize: 14,
    position: 'absolute',
    top: 325,
    left: 120,
    width:1000,
    height: 100,
  },
    school5: {
    margin: 24,
    fontSize: 14,
    fontWeight: "bold",
    position: 'absolute',
    top: 400,
    left: 20,
    width:1000,
    height: 100,
  },
    school55: {
    margin: 24,
    fontSize: 14,
    position: 'absolute',
    top: 400,
    left: 120,
    width:1000,
    height: 100,
  },
});

export default App;
