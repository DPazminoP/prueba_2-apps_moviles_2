import { StyleSheet, Text, View, ImageBackground, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import Tarjeta from '../components/Tarjeta'

export default function Screen2() {
  const [mascotas, setmascotas] = useState<any[]>([]);
  const [busquedaId, setBusquedaId] = useState("");

  async function buscarMascotaPorId() {
    if (!busquedaId) return;

    const { data, error } = await supabase
      .from("mascotas")
      .select()
      .eq("id", Number(busquedaId));  // filtra por id

    if (error) {
      console.log(error);
      return;
    }

    setmascotas(data ?? []);
  }



  /*useEffect(() => {
    leerMascotas()
  }, [])

  async function leerMascotas(){
    const { data, error } = await supabase
    .from('mascotas')
    .select()

    setmascotas(data as [])

    console.log(error)
  }*/


  return (
    <ImageBackground source={{uri: "https://i.postimg.cc/dtcCdCnX/mascotas.jpg"}} style={styles.container}>
      
      <View>
      <Text>Buscar Mascota por id:</Text>
      <TextInput
          placeholder="Ingrese id (ej: 1)"
          style={styles.input}
          value={busquedaId}
          onChangeText={setBusquedaId}
          keyboardType="numeric"
        />
      <FlatList
        data={mascotas}
        renderItem={({item})=> 
          item == undefined
          ?<Text></Text>
          :<Tarjeta datos={item}/>
        }/>

        <TouchableOpacity style={styles.button} onPress={buscarMascotaPorId}>
          <Text style={{color:"#fff"}}>Buscar</Text>
        </TouchableOpacity>

        <FlatList
          data={mascotas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Tarjeta datos={item} />}
        />
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

  input: {
    backgroundColor:"#fff",
    borderColor:"#1E3A8A",
    borderWidth:1,
    borderRadius:8,
    paddingHorizontal:10,
    marginVertical:10,
    width:200,
    height:40
  },
  button: {
    backgroundColor:"#1E3A8A",
    padding:10,
    borderRadius:8,
    alignItems:"center",
    marginBottom:15
  }
})