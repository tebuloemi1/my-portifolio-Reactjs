import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import logo from './logo.svg';
import './App.css';
import Toggle from "./components/toggle/Toggle";
import { ThemeContext, ThemeProvider } from "./components/context";




const App = () => {
  const  theme= useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style = {{backgroungColor: darkMode ? "black": "white", color: darkMode && "white"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
