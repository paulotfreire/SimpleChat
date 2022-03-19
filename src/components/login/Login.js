import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Bottom from './Bottom';
import Form from './Form';
const Login = () => {
    return (
        <SafeAreaView style={styles.background}>
            <LinearGradient colors={['#6E18A3', '#DC48BB']} style={{ flex: 1 }} >
               <Form/>
               <Bottom/>
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
        height: '100%'
    }
});

export default Login;
