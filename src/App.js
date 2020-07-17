import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Ergebnis from './components/Ergebnis';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/ergebnis" component={Ergebnis} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
