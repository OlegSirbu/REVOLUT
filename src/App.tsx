import React from 'react';
import Currency from './app/components/currency/Currency';
import Container from "react-bootstrap/Container";
import {AppProvider} from "./app/contexts/appContext";

const App:React.FC = () => (
  <div className="App">
    <header className="App-header">
      <Container>
        <AppProvider>
          <Currency />
        </AppProvider>
      </Container>
    </header>
  </div>
);

export default App;
