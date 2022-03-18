import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

// Show an icon at the top rigth the header such that when user click, it will navigate then to another page
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;

// import React, { useContext } from 'react'
// import { Text,View, StyleSheet } from 'react-native'
// import { Context } from '../context/BlogContext'

// const ShowScreen = ({ navigation }) => {

//   // console.log(navigation.getParam('id'))

//   const { state } = useContext(Context)

//   const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'))

//   return (
//     <View>
//       <Text>{blogPost.title}</Text>
//       <Text>{blogPost.content}</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})

// export default ShowScreen
