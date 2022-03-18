import { NavigationActions } from 'react-navigation';

//This allows you to trigger navigation from any component in ypur app
let navigator;

export const setNavigator = nav => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
