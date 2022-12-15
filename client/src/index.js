import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import './fonts/m5x7.ttf'
import 'semantic-ui-css/semantic.min.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
