import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation}:any) {
  return (
    
        <ImageBackground source={{uri: "https://i.postimg.cc/dtcCdCnX/mascotas.jpg"}} style={styles.container}>
            <View style={styles.row}>
                <Image
                    source={{ uri: 'https://i.postimg.cc/bJ2K7W7d/Sin-titulo.png' }}
                    style={styles.logo}
                />
            </View>

            
            <TouchableOpacity 
                style={styles.button}
                onPress={() => {navigation.navigate('Bottom');}}>
                <Image
                    source={{ uri: 'https://i.postimg.cc/wMQjD1TP/gato.png' }}
                    style={styles.imgbt}
                />
                <Text style={styles.butonTxt}> Comenzar</Text>
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
        width: 50,
        height: 50,
    },

    butonTxt:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',

    },

    logo: {
        width: 190,
        height: 80,
        },

    row: {
        flexDirection: 'row',     
        justifyContent: 'center', 
        width: '100%',
        paddingHorizontal: 20,
    },




})