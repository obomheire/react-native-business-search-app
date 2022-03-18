import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(
    AuthContext
  );

// NavigationEvents allows you to create a similar effect as navigation.addListener in IndexScreen of blog-app
// It allows you to perform an action when a component is about to gain or loss focus
// in this example, we use it to clear the error message for SigninScreen to SignupScreen or vise versa since
// both components has the same dispached action (singin) in the reducer finction
 
return (
  <View style={styles.container}>
    <NavigationEvents onWillFocus={clearErrorMessage} />
    <AuthForm
      headerText="Sign Up for Tracker"
      errorMessage={state.errorMessage}
      submitButtonText="Sign Up"
      onSubmit={signup}
    />
    <NavLink
      routeName="Signin"
      text="Already have an account? Sign in instead!"
    />
  </View>
);
};

// Disable header e.i nothing display at the top
SignupScreen.navigationOptions = () => {
return {
  header: () => false,
};
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  marginBottom: 250,
},
});

export default SignupScreen;
