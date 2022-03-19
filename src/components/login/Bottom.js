import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native';
const Bottom = () => {
    return (
        <View style={styles.containerBottom}>
            <Pressable>
                <Text style={{fontSize:16,color:'#FFF'}}>Ainda não possui uma conta? <Text style={{fontWeight:'bold'}}>Cadastre-se</Text></Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    containerBottom: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position:'absolute',
        bottom:24,
        width:'100%'
    },
});

export default Bottom;
