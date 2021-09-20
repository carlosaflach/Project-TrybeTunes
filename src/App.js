import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainContent from './components/MainContent';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    );
  }
}

export default App;
