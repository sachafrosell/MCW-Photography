import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Profile from './assets/photos/main.jpg'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const activism = importAll(require.context('./assets/photos/activism', false, /\.(png|jpe?g|svg)$/));
const tanzania = importAll(require.context('./assets/photos/tanzania', false, /\.(png|jpe?g|svg)$/));
const allPhotos = importAll(require.context('./assets/photos/allPhotos', false, /\.(png|jpe?g|svg)$/));

const initialState = {
  images: allPhotos,
  page: "allPhotos",
  zoom: "false",
  zoomId: "",
  zoomImg: ""
}

function reducer(state=initialState, action) {
  switch(action.type) {
    case "Activism":
      return {
        ...state,
        images: activism,
        page: "activism"
      }
    case "Tanzania":
      return {
        ...state,
        images: tanzania,
        page: "tanzania"
      }
    case "About":
      return {
        ...state,
        images: [Profile],
        page: "about"
      }
    case "ZOOM":
      return {
        ...state,
        zoom: "true",
      }
    case "CHANGE_IMG":
      return {
        ...state,
        zoomId: action.payload.zoomId
      }
    default:
      return {
        ...state,
        images: allPhotos,
        page: "allPhotos"
      }
  }
  return state;
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));


serviceWorker.unregister();

export default store;
