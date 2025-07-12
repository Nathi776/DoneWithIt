import { Background } from '@react-navigation/elements';
import React from 'react';
import { Image, ImageBackground, StyleSheet,Text,View,ViewProps } from 'react-native';

function WelcomeScreen(props: ViewProps) {
    return (
        <ImageBackground 
            source={require('../../assets/images/icon.png')}
            style={styles.Background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/images/react-logo.png')} />
                <Text>Sell what you don't need</Text>
            </View>

            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    Background : {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: '#fc5c65',
        justifyContent: "flex-end",
        //alignItems: 'center',
        //borderRadius: 10,
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: '#4ecdc4',
        justifyContent: "flex-end",
    },
    logo: {
        width: 100,
        height: 100,
        
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
})

export default WelcomeScreen;