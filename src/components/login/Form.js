import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Pressable,
} from 'react-native';
const Form = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Simple Chat</Text>
            <TextInput style={styles.input} placeholder="example123@gmail.com" placeholderTextColor={'#777'} />
            <TextInput style={styles.input} placeholder="*****" placeholderTextColor={'#777'} secureTextEntry={true} />
            <Pressable style={styles.btn}>
                <Text>Entrar</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    input: {
        height: 48,
        backgroundColor: '#DDD',
        width: '80%',
        color: '#555',
        borderRadius: 30,
        marginTop: 24,
        paddingLeft: 24
    },
    btn: {
        border: '2px solid red',   
        borderRadius:24,
        width:200,
        marginTop: 24,
        fontSize:18
    }
});

export default Form;
