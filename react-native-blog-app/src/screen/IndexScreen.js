import React, { useContext} from 'react'
import { Text, View, StyleSheet, FlatList, Button} from 'react-native'
import { Context } from '../context/BlogContext'

const IndexScreen = () => {
  
  const {state, addBlogPost} = useContext(Context)
  
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(key) => key.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

const sytles = StyleSheet.create({})

export default IndexScreen