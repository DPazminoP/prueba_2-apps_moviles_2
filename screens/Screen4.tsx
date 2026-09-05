import { StyleSheet, Text, View, ImageBackground, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

type Pelicula = {
  titulo: string;
  anio: number;
  descripcion: string;
  enlaces: {
    url: string;
    trailer: string;
    image: string;
  };
};

export default function Screen4() {
  const API = "https://jritsqmet.github.io/web-api/peliculas2.json";
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);

  async function leerDatos() {
    try {
      const resp = await fetch(API);
      const json = await resp.json();
      // La API devuelve { peliculas: [...] }
      setPeliculas(json.peliculas);
    } catch (error) {
      console.log("Error cargando películas:", error);
    }
  }

  useEffect(() => {
    leerDatos();
  }, []);

  return (
    <ImageBackground 
      source={{uri: "https://i.postimg.cc/dtcCdCnX/mascotas.jpg"}} 
      style={styles.container}
    >
      <FlatList
        data={peliculas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.enlaces.image }} style={styles.poster} />
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.year}>Año: {item.anio}</Text>
            <Text style={styles.desc}>{item.descripcion}</Text>
          </View>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: "rgb(4, 4, 4)",
    borderRadius: 10,
    padding: 8,
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
});
