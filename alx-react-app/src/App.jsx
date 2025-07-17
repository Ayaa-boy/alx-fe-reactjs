// src/App.jsx (Modified)
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage' // Keep this if you want the previous content
import Header from './components/Header';       // Import the new Header component
import MainContent from './components/MainContent'; // Import the new MainContent component
import Footer from './components/Footer';     // Import the new Footer component


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Existing Vite + React Logos and Counter */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {/* Your previous WelcomeMessage component */}
      <WelcomeMessage />

      <hr /> {/* Added a horizontal rule for visual separation */}

      {/* New Components for Task 2 */}
      <Header />
      <MainContent />
      <Footer />

      <hr /> {/* Another horizontal rule */}

      {/* Existing Counter and Read Docs Paragraph */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App