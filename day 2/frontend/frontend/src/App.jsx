import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from "axios"
import { use } from 'react'
import { useEffect } from 'react'

function App() {
  const [jokes, setjokes] = useState([])

  const getJokes = async () => {
    const res = await axios.get("/api/jokes")
    setjokes(res.data)
  }

  useEffect(() => {
    getJokes()
  }, [])



  return (
    <>

      <div>
        heloo

        {jokes.map((item, key) => (
          <div>

            <h1>
              joke of the day{item.joke1}
            </h1>


          </div>


        ))}



      </div>


    </>
  )
}

export default App
