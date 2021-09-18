import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <MainContent />
      </BrowserRouter>
    );
  }
}

export default App;
