// EXAMPLE 3 REFACTORING

// import React, {useReducer} from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch(action.type){
      case 'add_blogpost':
        return [...state, {title: `Blog Post#${state.length + 1}`}]
        default:
          return state
    }
}

// const addBlogPost = dispatch => {
//   return () => {
//     dispatch({type: 'add_blogpost'})
//   }
// } OR as follows

const addBlogPost = dispatch => () => dispatch({type: 'add_blogpost'})

export const { Context, Provider } = createDataContext(blogReducer, {addBlogPost}, []);

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


