/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { persistor, store } from './app/store/storeConfig';
// import 'react-native-gesture-handler';

const Main = () => {
    return (
      <Provider store={store}>
         <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
     </Provider>
    );
  };

AppRegistry.registerComponent(appName, () => Main);
