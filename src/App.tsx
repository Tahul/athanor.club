import { Dithering } from '@paper-design/shaders-react'
import { motion } from 'motion/react'
import './App.css'

const title = 'athanor'
const subtitle = "where we refine what's possible"

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
          shape="swirl"
          type="4x4"
          size={1.5}
          speed={0.15}
          scale={0.6}
          fit="cover"
        />
      </div>
      <div className="vignette" />
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
      <p className="subtitle">
        {subtitle.split(' ').map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 1,
              delay: 2.2 + i * 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </div>
  )
}

export default App
