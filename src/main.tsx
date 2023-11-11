import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop.ts'
import { Lang } from './components/LangToggleContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Lang>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Lang>
  </React.StrictMode>
)
