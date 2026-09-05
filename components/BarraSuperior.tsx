import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BarraSuperior() {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>SECTION LIST</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#aa1919',
        flex:1,
    }
})