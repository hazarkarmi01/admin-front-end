import React from 'react'
import ReactDOM from 'react-dom/client'
import { Notifications } from '@mantine/notifications';
import App from './App'
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS >
      <Notifications />
      <ModalsProvider>
        <App />
      </ModalsProvider>

    </MantineProvider>
  </React.StrictMode>,
)
