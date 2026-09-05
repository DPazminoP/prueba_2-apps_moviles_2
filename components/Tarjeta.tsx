import { Alert, Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { supabase } from '../services/supabase'


export default function Tarjeta(props:any) {

    let mascota = props.datos
    

    const [modalVisible, setModalVisible] = useState(false)
    const [nombre, setNombre] = useState(mascota.nombre)
    const [especie, setespecie] = useState(mascota.especie)
    const [raza, setraza] = useState(mascota.raza)
    const [genero, setgenero] = useState(mascota.genero)
    const [edad, setedad] = useState(mascota.edad)

    async function eliminar(id:number){
        const { error } = await supabase
            .from('mascotas')
            .delete()
            .eq('id', id)

        if(error){
            console.log(error)
        }
    }

    function mensaje(id:number){
        Alert.alert(
            "ADVERTENCIA",
            "Estas seguro que deseas eliminar dicho elemento",
            [
                {
                    text: "Aceptar",
                    onPress:()=>eliminar(id)
                },
                {
                    text: "Cancelar"
                }
            ]
        )
    }

    function editar(){
        setNombre(mascota.nombre)
        setespecie(mascota.especie)
        setraza(mascota.raza)
        setgenero(mascota.genero)
        setedad(mascota.edad)
        setModalVisible(true)
    }

    async function guardarCambios(){

        const { error } = await supabase
            .from('planeta')
            .update({
                nombre: nombre,
                especie: especie,
                raza: raza,
                genero: genero,
                edad: edad,
            })
            .eq('id', mascota.id)

        if(error){
            console.log(error)
        }else{
            Alert.alert("CORRECTO", "Informacion actualizada")
            setModalVisible(false)
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.txt}>
                Nombre: {mascota.nombre}
            </Text>

            <Text style={styles.txt}>
                Especie: {mascota.especie}
            </Text>

            <Text style={styles.txt}>
                Raza: {mascota.raza}
            </Text>

            <Text style={styles.txt}>
                Genero: {mascota.genero}
            </Text>

            <Text style={styles.txt}>
                Edad: {mascota.edad}
            </Text>

            <Button
                onPress={()=>mensaje(mascota.id)}
                title='ELIMINAR'
                color={'red'}
            />

            <View style={styles.separacion}/>

            <Button
                onPress={editar}
                title='EDITAR'
                color={'green'}
            />

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType='slide'
            >
                <View style={styles.modalFondo}>
                    <View style={styles.modal}>
                        <Text style={styles.titulo}>
                            EDITAR INFORMACION
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={nombre}
                            onChangeText={setNombre}
                            placeholder='Nombre'
                        />
                        <TextInput
                            style={styles.input}
                            value={especie}
                            onChangeText={setespecie}
                            placeholder='Especie'
                        />
                        <TextInput
                            style={styles.input}
                            value={raza}
                            onChangeText={setraza}
                            placeholder='Raza'
                        />
                        <TextInput
                            style={styles.input}
                            value={genero}
                            onChangeText={setgenero}
                            placeholder='Genero'
                        />
                        <TextInput
                            style={styles.input}
                            value={edad}
                            onChangeText={setedad}
                            placeholder='Edad'
                        />
                        <Button
                            title='GUARDAR'
                            onPress={guardarCambios}
                        />
                        <View style={styles.separacion}/>
                        <Button
                            title='CANCELAR'
                            color={'red'}
                            onPress={()=>setModalVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        justifyContent: "center",
        backgroundColor:'#b3aeae',
        width:270,
        margin:20,
        borderRadius:10,
        padding:10
    },

    txt:{
        fontSize:25,
        marginBottom:5
    },

    separacion:{
        height:10
    },

    modalFondo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.5)'
    },

    modal:{
        backgroundColor:'white',
        width:300,
        padding:20,
        borderRadius:10
    },

    titulo:{
        fontSize:22,
        textAlign:'center',
        marginBottom:15
    },

    input:{
        borderWidth:1,
        borderColor:'gray',
        borderRadius:5,
        padding:10,
        marginBottom:10
    }

})