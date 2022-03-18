import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Pressable  } from 'react-native'
import ResultDetail from './ResultDetail'

//Get direct access to the navigation object
import { withNavigation } from 'react-navigation'

const ResultsList = ( { title, results, navigation }) => {

    if (!results.length) return null

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
        //pass in the results id to the components you are navigating to as you navigate
        <TouchableOpacity  onPress={() => navigation.navigate('ResultsShow', {id: item.id})}>
        <ResultDetail result={item}/>
        </TouchableOpacity >
        )
    }
         />
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})
export default withNavigation(ResultsList)