import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout, Home, Company, Experience, CriticalThinking, OnThisSubject } from '../index'

export function AppRouter() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/critical-thinking" element={<CriticalThinking />} />
          <Route path="/on-this-subject" element={<OnThisSubject />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
