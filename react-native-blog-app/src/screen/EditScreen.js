import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {

  const id = navigation.getParam("id")

  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;

// EXAMPLE 1

// import React, { useState, useContext } from 'react';
// import { View, Text, StyleSheet, TextInput } from 'react-native';
// import { Context } from '../context/BlogContext';

// const EditScreen = ({ navigation }) => {
//   const { state } = useContext(Context);

//   const blogPost = state.find(
//     blogPost => blogPost.id === navigation.getParam('id')
//   );

//   const [title, setTitle] = useState(blogPost.title);
//   const [content, setContent] = useState(blogPost.content);

//   return (
//     <View>
//       <Text>Edit Title:</Text>
//       <TextInput value={title} onChangeText={newTitle => setTitle(newTitle)} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default EditScreen;
