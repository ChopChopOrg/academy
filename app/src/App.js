import React from 'react';
import { Global, css } from '@emotion/core';
import { ToDo } from './components/ToDo';

function App() {
  return (
    <>
      <Global
        styles={css`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
          }
        `}
      />

      <ToDo />
    </>
  );
}

export default App;
