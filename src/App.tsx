import { Dithering } from '@paper-design/shaders-react'
import './App.css'

function App() {
  return (
    <div className="app">
      <img src="/sublimatio.png" alt="Sublimatio" className="background-image" />
      <div className="dithering-overlay">
        <Dithering
          width="100%"
          height="100%"
          colorBack="#0a0a0a"
          colorFront="#1a1a1a"
          shape="simplex"
          type="4x4"
          size={3}
          speed={0.2}
          scale={0.8}
          fit="cover"
        />
      </div>
    </div>
  )
}

export default App
