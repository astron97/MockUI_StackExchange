import * as React from 'react';
import {Text, View} from 'react-native';

const Splash = () => {
  return (
    <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
      <Text style={[{color: 'red', fontSize: 30}]}>Adcuratio</Text>
    </View>
  );
};

export {Splash};
