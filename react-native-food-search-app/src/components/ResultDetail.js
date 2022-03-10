import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.contianer}>
        <Image style={styles.image} source={{uri: result.image_url}}/>
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count} Review </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contianer: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
}) 

export default ResultDetail