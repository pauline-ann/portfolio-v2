import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import Home from './components/Home/Home'
import Error404 from './components/Error404/Error404'

// CSS
import './App.css'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
