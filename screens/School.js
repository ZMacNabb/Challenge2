import React from "react";
import {View,Text,ActivityIndicator,StyleSheet,Picker,Button,SafeAreaView} from "react-native";
import { Link } from "react-router-native";


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.main}>
          {`This section shows my schooling!`}
        </Text>
        <Text style={styles.school1}>
          {`University: `}
        </Text>
        <Text style={styles.school11}>
          {`Lakehead University`}
        </Text>
        <Text style={styles.school2}>
          {`Major: `}
        </Text>
        <Text style={styles.school22}>
          {`Mechanical Engineering`}
        </Text>
        <Text style={styles.school3}>
          {`Minor: `}
        </Text>
        <Text style={styles.school33}>
          {`Computer Science`}
        </Text>
        <Text style={styles.school4}>
          {`Year: `}
        </Text>
        <Text style={styles.school44}>
          {`Fourth`}
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
    top: 150,
    left: 20,
    width:1000,
    height: 100,
  },
    school22: {
    margin: 24,
    fontSize: 14,
    position: 'absolute',
    top: 150,
    left: 120,
    width:1000,
    height: 100,
  },
    school3: {
    margin: 24,
    fontSize: 14,
    fontWeight: "bold",
    position: 'absolute',
    top: 200,
    left: 20,
    width:1000,
    height: 100,
  },
    school33: {
    margin: 24,
    fontSize: 14,
    position: 'absolute',
    top: 200,
    left: 120,
    width:1000,
    height: 100,
  },
    school4: {
    margin: 24,
    fontSize: 14,
    fontWeight: "bold",
    position: 'absolute',
    top: 250,
    left: 20,
    width:1000,
    height: 100,
  },
    school44: {
    margin: 24,
    fontSize: 14,
    position: 'absolute',
    top: 250,
    left: 120,
    width:1000,
    height: 100,
  },

});

export default App;
