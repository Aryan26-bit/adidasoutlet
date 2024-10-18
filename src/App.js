import React from "react";
import Navbar from "./components/NavbarComp/Navbar";
import "./App.css";
import Footer from "./components/NavbarComp/Footer/Footer";
import Signup from "./components/SignUp/Signup";
import SaleSection from "./components/SectionComp/SaleSection";
import ProductList from "./components/ProductComp/ProductList";
import Categories from "./components/CategoriesComp/Categories";
import FooterPart from "./components/FooterAboveComp/FooterPart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SaleSection />
      <ProductList />
      <Categories />
      <Signup />
      <FooterPart />
      <Footer />
    </div>
  );
}

export default App;
