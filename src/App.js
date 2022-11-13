import { Brand, Cta, Navbar } from "./components";
import "./App.css";
import {
  Blog,
  Fetures,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Header />
        <Navbar />
      </div>
      <Brand />
      <WhatGPT3 />
      <Fetures />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
