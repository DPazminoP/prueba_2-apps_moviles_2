import { StyleSheet, Text, View, ImageBackground, SectionList, Image, FlatList } from 'react-native'

import React, { useEffect, useState } from 'react'
import BarraSuperior from '../components/BarraSuperior';
import { Peliculas } from '../types/Peliculas';

export default function Screen4() {
    let API="https://jritsqmet.github.io/web-api/peliculas2.json"
    
      const [peliculas, setpeliculas] = useState<Peliculas[]>([]);
      
      async function leerDatos(){
          const resp=await fetch(API);
          const json=await resp.json();
          setpeliculas(json);
      }

      useEffect(() => {
        leerDatos()
        console.log(peliculas)
      }, []) 
  
  return (
    <ImageBackground source={{uri: "https://i.postimg.cc/dtcCdCnX/mascotas.jpg"}} style={styles.container}>
      <View style={styles.container1}>
            <View style={styles.barra}>
                <BarraSuperior></BarraSuperior>
            </View>
            
            <Text>Lista de Peliculas</Text>
            <FlatList
        data={peliculas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.elnaces.imager }} style={styles.poster} />
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.year}>Año: {item.anio}</Text>
            <Text style={styles.desc}>{item.descripcion}</Text>
          </View>
        )}
      />

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
    container1:{
        flex:9,

    },

    card: {
    backgroundColor: "#FACC15",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  poster: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E3A8A",
  },
  year: {
    fontSize: 14,
    color: "#333",
  },
  desc: {
    fontSize: 14,
    color: "#000",
    marginTop: 5,
  },


})