import React from "react";
import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from "react-native";
import { NativeRouter, Route, Link, BackButton } from 'react-router-native'
import School from "./screens/School";
import What from "./screens/what";
import Hobbies from "./screens/Hobbies";
import Classes from "./screens/Classes";
import Skills from "./screens/Skills";
import Home from "./screens/Home";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <BackButton />
          <Route exact path='/' component = {Home} />
          <Route  path='/School' component = {School} />
          <Route  path='/what' component = {What} />
          <Route  path='/Hobbies' component = {Hobbies} />
          <Route  path='/Skills' component = {Skills} />
          <Route  path='/Classes' component = {Classes} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    marginTop: 22,
  },

});
