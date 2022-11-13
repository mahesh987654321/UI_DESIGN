import { Brand, Cta, Navbar } from "./components";
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
    <div>
      <div>
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
