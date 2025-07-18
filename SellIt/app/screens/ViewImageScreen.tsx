import React from 'react';
import { Image, StyleSheet, View, ViewProps } from 'react-native';

import colors from '../config/colors';
 
 function ViewImageScreen(props: ViewProps) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.delectIcon}></View>
            <Image 
                resizeMode='contain'
                style={styles.image} 
                source={require("../../assets/images/download.jpeg")}
            />
        </View>
    ); 
 }

 const styles = StyleSheet.create({
    closeIcon: {
        width: "50%",
        height: "50%",
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    delectIcon: {
        width: "50%",
        height: "50%",
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
    },
    image: {
        width: "100%",
        height: "100%",
    },
 });
 
 export default ViewImageScreen;