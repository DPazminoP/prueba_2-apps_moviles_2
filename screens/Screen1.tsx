import { StyleSheet, Text, View, ImageBackground, TextInput, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

export default function Screen1() {
  const [id, setid] = useState(0)
  const [nombre, setnombre] = useState("")
  const [especie, setespecie] = useState("") 
  const [raza, setraza] = useState("")
  const [genero, setgenero] = useState("")
  const [edad, setedad] = useState("")

  async function guardarMascota(){
      const { error } = await supabase
        .from('mascotas')
        .insert(
          { 
            id: id, 
            nombre: nombre,
            especie: especie,
            raza: raza,
            genero: genero,
            edad: edad,

          })
        Alert.alert("Registro exitoso")

    //console.log(error); 
    }

  


  return (
    <ImageBackground source={{uri: "https://i.postimg.cc/dtcCdCnX/mascotas.jpg"}} style={styles.container}>
      <View>
      <Text>REGISTRAR MASCOTA</Text>

      <TextInput 
      placeholder='id-MASCOTA'
      onChangeText={(text) => setid( +text)}
      style={styles.txtInput}
      />

      <TextInput 
      placeholder='nombre'
      onChangeText={(text) => setnombre(text)} 
      style={styles.txtInput}
      />
      <TextInput 
      placeholder='especie'
      onChangeText={(text) => setespecie(text)}
      style={styles.txtInput}
      />

      <TextInput 
      placeholder='raza'
      onChangeText={(text) => setraza(text)}
      style={styles.txtInput}
      />

      <TextInput 
      placeholder='genero'
      onChangeText={(text) => setgenero(text)}
      style={styles.txtInput}
      />

      <TextInput 
      placeholder='edad'
      onChangeText={(text) => setedad(text)}
      style={styles.txtInput}
      />

      <Button title='Guardar' color={'green'}
      onPress={guardarMascota}
      ></Button>
    </View>


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

    txtInput: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        padding: 10
    }

})