import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'edit_blogpost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};
const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: 'edit_blogpost',
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{title: 'TEST POST', content: 'TEST CONTENT', id: 1}]
);


// EXAMPLE 3 REFACTORING

// import createDataContext from "./createDataContext";

// const blogReducer = (state, action) => {
//     switch(action.type){
//       case 'add_blogpost':
//         return [...state, {id: Math.floor(Math.random() * 99999), title: `Blog Post#${state.length + 1}`}]
//       case 'delete_blogpost':
//         return state.filter(blogPost => blogPost.id != action.payload)
//         default:
//           return state
//     }
// }

// const addBlogPost = dispatch => () => dispatch({type: 'add_blogpost'})

// const deleteBlogPost = dispatch => (id) => dispatch({type: 'delete_blogpost', payload: id})

// export const { Context, Provider } = createDataContext(blogReducer, {addBlogPost, deleteBlogPost}, [])

// EXAMPLE 2USING USE REDUCER

// import React, {useReducer} from "react";

// const BlogContext = React.createContext();

// const blogReducer = (state, action) => {
//     switch(action.type){
//       case 'add_blogpost':
//         return [...state, {title: `Blog Post#${state.length + 1}`}]
//         default:
//           return state
//     }
// }

// export const BlogProvider = ({ children }) => {

//   const [blogPosts, dispatch] = useReducer(blogReducer, [])

//   const addBlogPost = () => {
//       dispatch({type: 'add_blogpost'})
//   }

//   return <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>{children}</BlogContext.Provider>;
// };

// export default BlogContext;

// EXAMPLE 1 USING STATE

// import React from "react";

// const BlogContext = React.createContext();

// export const BlogProvider = ({ children }) => {

//   const blogPosts = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }];

//   return <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>;
// };

// export default BlogContext;


