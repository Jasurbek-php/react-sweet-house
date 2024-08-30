import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import First from './router/First/First'
import Second from './router/Second/Second'
import Third from './router/Third/Third'
import Fourth from './router/Fourth/Fourth'
import Fifth from './router/Fifth/Fifth';
import Sixth from './router/sixth/Sixth';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Header/> */}
      <footer/>
      
      <Routes>
        <Route path="/" element={<Header/>}/> 
         {/* Default path */}
        <Route path="/First" element={<First/>}/>
        <Route path="/Second" element={<Second/>}/>
        <Route path="/Third" element={<Third/>}/>
        <Route path="/Fourth" element={<Fourth/>}/>
        <Route path="/Fifth" element={<Fifth/>}/>
        <Route path="/Sixth" element={<Sixth/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
