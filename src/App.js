import './App.css';

//local imports 
import {Navbar, Header, About, Laurel, ChefWord, SpecialMenu, Video, Gallery, Contact, NewsLetter, Footer} from './components'

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <SpecialMenu/>
      <ChefWord/>
      <Video/>
      <Laurel/>
      <Gallery/>
      <Contact/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default App;
