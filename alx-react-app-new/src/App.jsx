// src/App.jsx (Modified)
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter'; // Import the new Counter component


function App() {
  const [count, setCount] = useState(0) // This count state is from the original App.jsx setup, not the new Counter component

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

      <hr />

      {/* Components for Task 0.2 (Header, MainContent, Footer) */}
      <Header />
      <MainContent />
      <Footer />

      <hr />

      {/* UserProfile Component for Task 0.3 */}
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />

      <hr />

      {/* New Counter Component for Task 1 */}
      <Counter /> {/* Include the Counter component here */}

      <hr />

      {/* Original App.jsx Counter (You can remove this if it's confusing,
          as we now have a dedicated Counter component) */}
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