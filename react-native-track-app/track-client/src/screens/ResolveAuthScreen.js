import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  //Once the page load, call tryLocalSignin() once

  useEffect(() => {
    tryLocalSignin();
  }, []);

  // When this function is callled, nothing will display on the page initially
  return null;
};

export default ResolveAuthScreen;
