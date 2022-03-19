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
            <Text style={styles.sectionTitle}>SimpleChat</Text>
            <TextInput style={styles.input} placeholder="example123@gmail.com" placeholderTextColor={'#777'} />
            <TextInput style={styles.input} placeholder="*****" placeholderTextColor={'#777'} secureTextEntry={true} />
            <Pressable style={styles.btn}>
                <Text style={styles.btnText}>Sing in</Text>
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
        fontWeight: '400',
        fontFamily:'Roboto',
        color:'#FFF'
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
        borderRadius:24,
        borderWidth: 1,
        borderColor: '#FFF',
        width:160,
        marginTop: 24,
        height:48
    },
    btnText:{
        textAlign:'center',
        fontSize:18,
        lineHeight:48,
        fontWeight:'bold',
        textAlignVertical:'top',
        color:'#FFF'
    }
});

export default Form;
