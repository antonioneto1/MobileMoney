/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Main from './src/pages/Main';
import NewEntry from './src/pages/NewEntry';
import Report from './src/pages/Report';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Main);
AppRegistry.registerComponent(appName, () => NewEntry);
AppRegistry.registerComponent(appName, () => Report);
