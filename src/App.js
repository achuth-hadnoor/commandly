import React from "react"; 
import Nav from './components/nav'
import Footer from './components/footer'
import Headers from './components/Headers'
import Features from './components/Features'
import Options from './components/Options'
import Tag from './components/Tag'
function App() {
  return (
    <> 
        <Nav />
        <main> 
          <Headers/>
          <Options/>
          <Features/>
          <Tag/>
        </main>
        <Footer/>
    </>
  );
}

export default App;
