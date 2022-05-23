import React from "react";
import {StyleSheet,Text,View,Image,Button,ActivityIndicator} from "react-native";
import School from "./School";
import What from "./what";
import Hobbies from "./Hobbies";
import Classes from "./Classes";
import Skills from "./Skills";
import { Link } from "react-router-native";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
  
        <Link to={`School`} style={styles.box2} underlayColor="greem">
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                alignItems: "center"

              }}
            >
              School
            </Text>
          </View>
        </Link>
        <Link to={`what`} style={styles.box1} underlayColor="green">
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                alignItems: "center"
              }}
            >
              Who I am?
            </Text>
          </View>
        </Link>
        <Link to={`Classes`} style={styles.box3} underlayColor="green">
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                alignItems: "center"
              }}
            >
              Classes
            </Text>
          </View>
        </Link>
        <Link to={`Hobbies`} style={styles.box4} underlayColor="green">
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                alignItems: "center"
              }}
            >
              Hobbies
            </Text>
          </View>
        </Link>
        <Link to={`Skills`} style={styles.box5} underlayColor="green">
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                alignItems: "center"
              }}
            >
              Programs
            </Text>
          </View>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  box1: {
    backgroundColor: "lightblue",
    padding: 20,
    position: 'absolute',
    top: 100,
    left: 90,
    width:200,
    height: 70,
    alignItems: "center",    
  },
   box2: {
    backgroundColor: "lightblue",
    padding: 20,
    position: 'absolute',
    top: 200,
    left: 90,
    width:200,
    height: 70,
    alignItems: "center",
  },
   box3: {
    backgroundColor: "lightblue",
    padding: 20,
    position: 'absolute',
    top: 300,
    left: 90,
    width:200,
    height: 70,
    alignItems: "center",
  },
   box4: {
    backgroundColor: "lightblue",
    padding: 20,
    position: 'absolute',
    top: 400,
    left: 90,
    width:200,
    height: 70,
    alignItems: "center",
  },
   box5: {
    backgroundColor: "lightblue",
    padding: 20,
    position: 'absolute',
    top: 500,
    left: 90,
    width:200,
    height: 70,
    alignItems: "center",
  },
});
