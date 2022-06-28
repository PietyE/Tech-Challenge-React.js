import React from 'react';
import { Container } from '@mui/material';
import './App.scss';
import { Slider } from './components/Slider';

const App = () => (
  <div className="wrapper">
    <main className="main">
      <Container maxWidth="xl" sx={{ pt: 40 }}>
        <Slider />
      </Container>
    </main>
  </div>
);

export default App;
