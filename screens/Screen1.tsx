import { StyleSheet, Text, View, ImageBackground, TextInput, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'

export default function Screen1({navigation}:any) {
  const [id, setid] = useState(0)
  const [nombre, setnombre] = useState("")
  const [contrasenia, setcontrasenia] = useState("") 
  const [CI, setCI] = useState("")
  const [genero, setgenero] = useState("")
  const [edad, setedad] = useState("")

  async function guardarUsuario() {
    if (!id || !nombre || !contrasenia || !CI || !genero || !edad) {
    Alert.alert( "Debe llenar todos los campos para registrarse.");
    return;
  }
    const { error } = await supabase
    .from('usuarios')
    .insert({
      id: id,
      nombre: nombre,
      contrasenia: contrasenia,
      CI: CI,
      genero: genero,
      edad: edad,
    });

  if (error) {
    console.log(error);
    Alert.alert("Error en el registro", error.message);
  } else {
    Alert.alert("Registro exitoso", "Ahora puedes iniciar sesión", [
      {
        text: "OK",
        onPress: () => navigation.navigate("Login"), // ✅ envía a Login
      },
    ]);
  }
}


  


  return (
    <ImageBackground source={{uri: "https://i.postimg.cc/SQZPvFjn/fondo1.jpg"}} style={styles.container}>
      
      <Button 
        title="Volver al inicio" 
        onPress={() => navigation.navigate('Welcome')} 
      />
      <View>
      <Text>REGISTRAR MASCOTA</Text>

      <TextInput 
      placeholder='idUsuario'
      onChangeText={(text) => setid( +text)}
      style={styles.txtInput}
      />

      <TextInput 
      placeholder='nombre'
      onChangeText={(text) => setnombre(text)} 
      style={styles.txtInput}
      />
      <TextInput 
      placeholder='Contraseña'
      onChangeText={(text) => setcontrasenia(text)}
      style={styles.txtInput}
      />

      <TextInput 
      placeholder='CI'
      onChangeText={(text) => setCI(text)}
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
      onPress={guardarUsuario}
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