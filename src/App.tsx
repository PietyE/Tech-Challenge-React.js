import React from 'react';
import { Container } from '@mui/material';
import { Slider } from './components/Slider';
import './App.scss';

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
