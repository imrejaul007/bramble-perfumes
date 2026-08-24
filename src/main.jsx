import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

// Lazy load the heavy Story Portal — saves ~280KB on initial load
const StoryPortal = lazy(() => import('./StoryPortal.jsx'))

// Simple loading fallback shown while Story Portal chunks load
function PageLoader() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: '#FFFDF7', color: '#2A2018' }}
    >
      <div className="text-center space-y-3">
        <div
          className="w-8 h-8 rounded-full border-2 border-t-amber-700 mx-auto animate-spin"
          style={{ borderColor: 'rgba(154,114,53,0.3)', borderTopColor: '#9A7235' }}
        />
        <p className="text-xs tracking-widest uppercase" style={{ color: '#9A8A78' }}>
          Loading
        </p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/story" element={<StoryPortal />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
