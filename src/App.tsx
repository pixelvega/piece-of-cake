import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes/Routes'
import LayoutManager from 'components/layouts/LayoutManager'

function App() {
  return (
    <BrowserRouter>
      <LayoutManager>
        <Routes />
      </LayoutManager>
    </BrowserRouter>
  );
}

export default App;
