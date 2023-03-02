import { useState } from "react";
import "./App.module.sass";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <main className="App">
      <Header />
      <Banner />
      <List />
      <Footer />
    </main>
  );
}

export default App;
