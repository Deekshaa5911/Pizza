


import Menu from "./Components/Menu";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Pizza from "./Components/Pizza";
import  Addorder from "./Components/Add-order";
import Updateorder from "./Components/Update-order";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import {Routes , Route } from 'react-router-dom';





function App(){
  return (
    <>
    <Menu/>




    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/pizza " element={<Pizza />}/>
      <Route path="/Addorder" element={<Addorder/>}/>
      <Route path="/Footer" element={<Footer/>}/>
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/Update-order/:id" element={<Updateorder/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>

    </Routes>


   
   
    <Footer/>
    </>
  )
}


export default App;
