import HeroBanner from "./components/HeroBanner"
import BodyContent from "./components/BodyContent"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="app">
      <HeroBanner />
      <BodyContent />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
