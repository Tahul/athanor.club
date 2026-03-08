import { Dithering } from '@paper-design/shaders-react'
import { motion } from 'motion/react'
import './App.css'

const title = 'athanor'

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
      <h1 className="title">
        {title.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 1.2,
              delay: 0.8 + i * 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ display: 'inline-block' }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
    </div>
  )
}

export default App
