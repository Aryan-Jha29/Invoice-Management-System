import './App.css';
import React, { useState, useEffect } from "react";
import Table from './components/Table';
import Nav from './components/Nav';
import Head from './components/Head';
import Footer from './components/Footer';
import Functionalities from './components/Functionalities';
import { getData } from './services/data';

function App() {
  return (
    <>
      <Head />
      <Functionalities />
      <Footer />
    </>
  );
}

export default App;
