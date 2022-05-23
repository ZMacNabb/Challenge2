import React from "react";
import {View,Text,ActivityIndicator,StyleSheet,Picker,Button,SafeAreaView
} from "react-native";
import { Link } from "react-router-native";


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.main}>
          {`Important classses are listed below: `}
        </Text>
        <Text style={styles.school1}>
          {`-Mobile Computing Technology
-Computer Programming 2
-Mechanical Vibrations
-Profesional Practise and Law
-Mechanical Engineering Labatory
-Mechanical Engineering Design 2
-Fluid Dynamics
- Engineering Thermodynamics
-Enginering Economics and Project Design
Probability and Statistics
-Signal Processing of Mechanical Systems`}
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
    fontSize: 16,

    position: 'absolute',
    top: 100,

  },
});

export default App;
