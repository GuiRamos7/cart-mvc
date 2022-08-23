import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Global } from './styles/global';

import { createServer, Model } from 'miragejs';
// Creating a fake API to get items
createServer({
  models: {
    models: Model,
  },

  seeds(server) {
    server.db.loadData({
      models: [
        {
          id: '1',
          image:
            'https://img1.cgtrader.com/items/1865888/b5df871ab7/spacesuit-nasa-aces-3d-model-max-obj-fbx-c4d-blend-abc.jpg',
          title: 'SPACESUIT NASA ACES 3D',
          price: 300,
          description:
            '3D Advanced crew escape suit astronaut modeled in high precision.',
        },
        {
          id: '2',
          image:
            'https://img-new.cgtrader.com/items/2260172/b78eac4f6d/alien-statue-fanart-3d-model-obj-fbx-stl.jpg',
          title: 'Alien Statue Fanart 3D print model',
          price: 20,
          description: 'This is fully detailed statue of an Alien creature.',
        },
        {
          id: '3',
          image:
            'https://img2.cgtrader.com/items/1844288/feefdbb88c/grizzly-bear-model-rig-anim-3d-model-animated-rigged-obj-fbx-ma-stl-ztl-spp.jpg',
          title: 'grizzly bear MODEL RIG ANIM 3D ',
          price: 500,
          description: '3D Bear for Visual Effects',
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/models', () => {
      return this.schema.all('models');
    });
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);

reportWebVitals();
