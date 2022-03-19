import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Form from './Form';
const Login = () => {
    return (
        <SafeAreaView style={styles.background}>
            <LinearGradient colors={['#6E18A3', '#DC48BB']} style={{ flex: 1 }} >
               <Form/>
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    background: {
        height: '100%'
    }
});

export default Login;
