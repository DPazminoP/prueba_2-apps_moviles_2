import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation}:any) {
    return (
    
        <ImageBackground source={{uri: "https://i.postimg.cc/SQZPvFjn/fondo1.jpg"}} style={styles.container}>
            <View style={styles.row}>
                <Image
                    source={{ uri: 'https://i.postimg.cc/nVjH2khJ/logo1-(1).png' }}
                    style={styles.logo}
                />
            </View>

            
            <TouchableOpacity 
                style={styles.button}
                onPress={() => {navigation.navigate('Login');}}>
                <Image
                    source={{ uri: 'https://i.postimg.cc/ZK8wzG5H/botonpeque.png' }}
                    style={styles.imgbt}
                />
                <Text style={styles.butonTxt}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => {navigation.navigate('Registro');}}>
                <Image
                    source={{ uri: 'https://i.postimg.cc/ZK8wzG5H/botonpeque.png' }}
                    style={styles.imgbt}
                />
                <Text style={styles.butonTxt}>Registrarse</Text>
            </TouchableOpacity>
            
            

    </ImageBackground> 
    

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,                // ✅ cada tarjeta ocupa proporcionalmente su columna
        margin: 5,              // espacio entre tarjetas
        alignItems: 'center',   // centra contenido horizontalmente
        justifyContent: 'center',
        backgroundColor: "rgb(4, 4, 4)",
        borderRadius: 10,
        //borderWidth: 2,
        //borderColor: "#070705",
        padding: 8,
    },

    button: {
        backgroundColor: 'rgb(61, 54, 13)',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
    },

    imgbt: {
        width: 75,
        height: 75,
    },

    butonTxt:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',

    },

    logo: {
        width: 350,
        height: 175,
        paddingVertical: 20,
        marginHorizontal:20,
        marginVertical:100,
        },

    row: {
        flexDirection: 'row',     
        justifyContent: 'center', 
        width: '100%',
        paddingHorizontal: 20,
    },




})