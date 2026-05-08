import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [text_e, setText_e]  = useState("e")
  const [text_dot, setText_dot]  = useState(".")
  const [text_space, setText_space]  = useState("")
  const [text_egte, setText_egte]  = useState("")
  
  useEffect(() => {
    let timeout: number
  
    const type = (setText: (text: string) => void, word: string, index: number) => {
      if (index <= word.length) {
        setText(word.slice(0, index))
        timeout = window.setTimeout(() => type(setText, word, index + 1), 100)
      }
    }

    const backspace = (setText: (text: string) => void, currentText: string, num: number) => {
      if (num > 0 && currentText.length > 0) {
        const newText = currentText.slice(0, currentText.length - 1)
        setText(newText)
        timeout = window.setTimeout(() => backspace(setText, newText, num - 1), 100)
      }
    }
  
    const start = async () => {
      await new Promise(r => setTimeout(r, 1500))
      backspace(setText_e, text_e, 1)
      type(setText_e, "ë ", 0)
      backspace(setText_dot, text_dot, 1)
      type(setText_dot, "an ", 0)
      type(setText_space, " ", 0)
      type(setText_egte, "egte", 0)
    }
  
    start()
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>zo{text_e}v{text_dot}de{text_space}v{text_egte}</h1>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default App
