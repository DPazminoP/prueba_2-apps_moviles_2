import { StyleSheet, Text, View, ImageBackground, FlatList, Image, TouchableOpacity, Modal, Button } from 'react-native';
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
  const [selectedFruta, setSelectedFruta] = useState<Fruta | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

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
        numColumns={3}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => {
              setSelectedFruta(item);
              setModalVisible(true);
            }}
          >
            <Image source={{ uri: item.imagen }} style={styles.poster} />
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.year}>Año: {item.anio}</Text>
            <Text style={styles.desc}>{item.descripcion}</Text>
            <Text style={styles.genre}>Categoría: {item.genero}</Text>
          </TouchableOpacity>
        )}
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedFruta && (
              <>
                <Image source={{ uri: selectedFruta.imagen }} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{selectedFruta.titulo}</Text>
                <Text style={styles.modalText}>Año: {selectedFruta.anio}</Text>
                <Text style={styles.modalText}>{selectedFruta.descripcion}</Text>
                <Text style={styles.modalText}>Categoría: {selectedFruta.genero}</Text>

                
                <View style={styles.modalButtons}>
                  <Button title="Agregar" color="orange" onPress={() => {}} />
                  <Button title="Ir a pagar" color="green" onPress={() => {}} />
                  <Button title="Cerrar" color="red" onPress={() => setModalVisible(false)} />
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
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
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
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
    resizeMode: "contain",
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
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#cf5d116d",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1E3A8A",
  },
  modalText: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: "center",
  },
  modalButtons: {
    marginTop: 15,
    width: "100%",
    gap: 10,
  },
});
