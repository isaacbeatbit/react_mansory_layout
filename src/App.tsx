import React from 'react'
import Main from './Main'
import './App.css'
import BigButton from './components/BigButton'

function App() {
  return (
    <div className="App">
      <Main />
      <footer>
        <BigButton />
        <ul>
          <li>
            <a>link 1</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default App
