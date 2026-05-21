import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/layout/Navbar'
import StatusBar from './components/layout/StatusBar'
import Home from './pages/Home'

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <span className="font-mono text-xs text-muted">loading...</span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </Suspense>
      <StatusBar />
      <Analytics />
    </BrowserRouter>
  )
}
