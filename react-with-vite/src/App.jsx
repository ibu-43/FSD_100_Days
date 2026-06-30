import './App.css'
import Navbar from './navbar.jsx'
import Footer from './Footer.jsx'
import Detail from './Detail.jsx'
import g1 from './assets/graph1.png'
import g2 from './assets/Logistic_graph.png'
import g3 from './assets/Bar_graph.png'

function App() {
  return (
    <>
      <Navbar />
      <Detail images={g1} name="Graph 1" price="10"/>
      <Detail images={g2} name="Graph 2" price="20"/>
      <Detail images={g3} name="Graph 3" price="30"/>
      <Footer />
    </>
  );
}

export default App
