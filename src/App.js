//import logo from './logo.svg';

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import{ NavBar } from "./components/NavBar/NavBar";



function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer saludo="Hola Mundo"/>
      
    </>
  );
}

export default App;
