import './App.css';
import {Navbar, Header, About} from './components'
import ChefWord from './components/ChefWord/ChefWord';
import SpecialMenu from './components/SpecialMenu/SpecialMenu';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <SpecialMenu/>
      <ChefWord/>
    </>
  );
}

export default App;
