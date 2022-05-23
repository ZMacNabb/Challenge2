import React from "react";
import {View,Text,ActivityIndicator,StyleSheet,Picker,Button,SafeAreaView
} from "react-native";
import { Link } from "react-router-native";


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.main}>
          {`List of my Hobbies are below: `}
        </Text>
        <Text style={styles.school1}>
          {`-Bouldering
-Dungeon and Dragons
-Hiking
-Playing Board Games
-Playing Video Games
-Modeling and 3D printing`}
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
