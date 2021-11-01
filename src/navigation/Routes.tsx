import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Splash} from '../screens';
import {AppBottomTabScreens} from './AppBottomTab';

export const App = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const splashTimeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(splashTimeOut);
    };
  }, []);
  
  return (
    <NavigationContainer>
      {loading ? <Splash /> : <AppBottomTabScreens />}
    </NavigationContainer>
  );
};
