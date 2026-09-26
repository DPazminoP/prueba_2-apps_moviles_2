import { StyleSheet, Text, View, ImageBackground, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

type Fruta = {
  id: number;
  titulo: string;
  genero: string;
  descripcion: string;
  anio: number;
  imagen: string;
};

export default function Screen4() {
  const API = "https://raw.githubusercontent.com/DPazminoP/peliculas-json/refs/heads/main/peliculas.json"; 
  const [frutas, setFrutas] = useState<Fruta[]>([]);

  async function leerDatos() {
    try {
      const resp = await fetch(API);
      const json = await resp.json();
      setFrutas(json.frutas);
    } catch (error) {
      console.log("Error cargando frutas:", error);
    }
  }

  useEffect(() => {
    leerDatos();
  }, []);

  return (
    <ImageBackground 
      source={{uri: "https://i.postimg.cc/SQZPvFjn/fondo1.jpg"}} 
      style={styles.container}
    >
      <FlatList
        data={frutas}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3} // ✅ ahora se muestran en 3 columnas
        columnWrapperStyle={styles.row} // ✅ estilo para cada fila
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.poster} />
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.year}>Año: {item.anio}</Text>
            <Text style={styles.desc}>{item.descripcion}</Text>
            <Text style={styles.genre}>Categoría: {item.genero}</Text>
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
  row: {
    justifyContent: "space-between", // ✅ distribuye las tarjetas en cada fila
  },
  card: {
    flex: 1, // ✅ cada tarjeta ocupa espacio proporcional
    backgroundColor: "#fa5d1539",
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  poster: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode:"contain",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "center",
  },
  year: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
  },
  desc: {
    fontSize: 12,
    color: "#000",
    marginTop: 5,
    textAlign: "center",
  },
  genre: {
    fontSize: 12,
    color: "#1E3A8A",
    marginTop: 5,
    fontStyle: "italic",
    textAlign: "center",
  },
});
