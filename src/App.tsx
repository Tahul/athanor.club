import { Dithering } from '@paper-design/shaders-react'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="background-image" />
      <div className="dithering-overlay">
        <Dithering
          width="100%"
          height="100%"
          colorBack="#00000000"
          colorFront="#000000"
          shape="simplex"
          type="4x4"
          size={2}
          speed={0.3}
          scale={0.6}
          fit="cover"
        />
      </div>
    </div>
  )
}

export default App
