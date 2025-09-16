import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './app/store';
import { RootStackNavigator } from './app/navigation/RootStackNavigator';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
export default App;
