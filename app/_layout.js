import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const _layout = ({ children }) => {
 return(
    // <>
    // <Stack screenOptions={{headerShown: false}}></Stack>
    // <StatusBar style="dark"/>
    // </>



    <Stack screenOptions={{headerStyle: {backgroundColor: 'brown'}}}>
        <Stack.Screen name="index" options={{title: 'Home'}}/>
    </Stack>
 );
};

export default _layout;
