import { useState } from 'react'
import Header from './component/Header'
import HeroSection from './component/HeroSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
    </>
  )
}

export default App
