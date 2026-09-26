import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { supabase } from '../services/supabase';

export default function PerfilScreen({ navigation }: any) {
    const [nombre, setNombre] = useState<string>("Usuario sin registrar");
    const [edad, setEdad] = useState<number | null>(null);
    const [genero, setGenero] = useState<string>("");

    useEffect(() => {
    async function fetchUsuario() {
    
        const { data, error } = await supabase
            .from('usuarios')
            .select('nombre, edad, genero')
            .limit(1)
            .single();

        if (error) {
            console.log(error);
            Alert.alert("Error", "No se pudo cargar el perfil");
        } else if (data) {
            setNombre(data.nombre);
            setEdad(Number(data.edad));
            setGenero(data.genero);
        }
        }

        fetchUsuario();
    }, []);

    return (
        <ImageBackground 
        source={{ uri: "https://i.postimg.cc/SQZPvFjn/fondo1.jpg" }} 
        style={styles.container}
        >
        {/* Foto de perfil */}
        <Image 
            source={{ uri: "https://i.postimg.cc/fRN1GkSp/perfilgenerico.jpg" }} 
            style={styles.avatar} 
        />

        {/* Información del usuario */}
        <View style={styles.infoBox}>
            <Text style={styles.name}>{nombre}</Text>
            <Text style={styles.email}>
            {edad !== null ? `${edad} años` : "Edad no disponible"}
            </Text>
            <Text style={styles.email}>
            {genero ? `Género: ${genero}` : "Género no disponible"}
            </Text>
        </View>

        {/* Botón para ver productos */}
        <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate("ListaProductos")}
        >
            <Text style={styles.buttonText}>Ver Productos</Text>
        </TouchableOpacity>

        {/* Botón para salir */}
        <TouchableOpacity 
            style={styles.button2} 
            onPress={() => navigation.navigate("Welcome")}
        >
            <Text style={styles.buttonText}>Salir</Text>
        </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start", // ✅ alinea a la izquierda pero con padding
        paddingLeft: 30,          // separación desde el borde izquierdo
        paddingTop: 50,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
        borderWidth: 3,
        borderColor: "#FACC15",
    },
    infoBox: {
        marginBottom: 30,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },
    email: {
        fontSize: 16,
        color: "#E5E7EB",
        marginBottom: 8,
    },
    button: {
        backgroundColor: "#FACC15",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
        alignSelf: "flex-start", // ✅ mantiene alineado con padding
    },
    button2: {
        backgroundColor: "#FACC15",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
        alignSelf: "flex-start",
    },
    buttonText: {
        color: "#1E3A8A",
        fontSize: 16,
        fontWeight: "bold",
    },
});
