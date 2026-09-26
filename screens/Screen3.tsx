import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import Tarjeta from '../components/Tarjeta'

export default function Screen3() {
  const [mascotas, setmascotas] = useState([])
  
    useEffect(() => {
      leerMascotas()
    }, [])
  
    async function leerMascotas(){
      const { data, error } = await supabase
      .from('mascotas')
      .select()
  
      setmascotas(data as [])
  
      console.log(error)
    }
  
  return (
    <ImageBackground source={{uri: "https://i.postimg.cc/SQZPvFjn/fondo1.jpg"}} style={styles.container}>
      <View>
        
            <Text>Ver y editar mascotas</Text>
            <FlatList
              data={mascotas}
              renderItem={({item})=> 
                item == undefined
                ?<Text></Text>
                :<Tarjeta datos={item}/>
              }/>
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
})