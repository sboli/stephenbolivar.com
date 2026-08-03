import React from 'react';
import { createRoot } from 'react-dom/client';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initializeParticles = async engine => {
  await loadSlim(engine);
};

const root = createRoot(document.getElementById('root'));

root.render(
  <ParticlesProvider init={initializeParticles}>
    <App />
  </ParticlesProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (process.env.NODE_ENV === 'production') {
  //   serviceWorker.register();
  serviceWorker.unregister();
} else {
  serviceWorker.unregister();
}
