import { useEffect, useState } from 'react'
import './App.css'

function App() {
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
      type(setText_e, "\u00eb ", 0)
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
        <div>
          <div className="backgroundText">
            COMING SOON...
          </div>
          <h1>zo{text_e}v{text_dot}de{text_space}v{text_egte}</h1>
        </div>
      </section>
    </>
  )
}

export default App
