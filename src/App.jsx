import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <main>
      
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      
      
    </main>
  )
}

export default App