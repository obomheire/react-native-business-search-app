import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;


// EXAMPLE 2

// import React, { useContext, useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
// import { Context } from '../context/BlogContext';

// const CreateScreen = ({ navigation }) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const { addBlogPost } = useContext(Context);

//   return (
//     <View>
//       <Text style={styles.label}>Enter Title:</Text>
//       <TextInput
//         style={styles.input}
//         value={title}
//         onChangeText={text => setTitle(text)}
//       />
//       <Text style={styles.label}>Enter Content:</Text>
//       <TextInput
//         style={styles.input}
//         value={content}
//         onChangeText={text => setContent(text)}
//       />
//       <Button
//         title="Add Blog Post"
//         onPress={() => {
//             addBlogPost(title, content, () => {
//                 navigation.navigate('Index')
//             })
//             // navigation.navigate('Index') This is one way to navigate to the home screen after a blog is added but not very effective
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: 'black',
//     marginBottom: 15,
//     padding: 5,
//     margin: 5
//   },
//   label: {
//     fontSize: 20,
//     marginBottom: 5,
//     marginLeft: 5
//   }
// });

// export default CreateScreen;

// EXAMPLE 1

// import React, { useContext, useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
// import { Context } from '../context/BlogContext';

// const CreateScreen = ({ navigation }) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   return (
//     <View>
//       <Text style={styles.label}>Enter Title:</Text>
//       <TextInput
//         style={styles.input}
//         value={title}
//         onChangeText={text => setTitle(text)}
//       />
//       <Text style={styles.label}>Enter Content:</Text>
//       <TextInput
//         style={styles.input}
//         value={content}
//         onChangeText={text => setContent(text)}
//       />
//       <Button title="Add Blog Post" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: 'black',
//     marginBottom: 15,
//     padding: 5,
//     margin: 5
//   },
//   label: {
//     fontSize: 20,
//     marginBottom: 5,
//     marginLeft: 5
//   }
// });

// export default CreateScreen;

