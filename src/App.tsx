import type { ReactNode } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'
import ScrollToHash from './components/ScrollToHash'

function HomePage() {
  const email = 'maison.clm.contact@gmail.com'
  const formUrl = 'https://forms.gle/FnAXqJFYDrvXt5H56'
  const templatesUrl = 'https://app.maisonclm.fr'
  const linkedinUrl = 'https://www.linkedin.com/in/cl%C3%A9ment-carr%C3%A9-a6971624a/'

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900">
      <Navbar templatesUrl={templatesUrl} />

      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact email={email} formUrl={formUrl} />
      </main>

      <Footer templatesUrl={templatesUrl} linkedinUrl={linkedinUrl} />
    </div>
  )
}

function LegalPageLayout({ children }: { children: ReactNode }) {
  const templatesUrl = 'https://ton-site-templates.com'
  const linkedinUrl = 'https://linkedin.com/in/tonprofil'

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900">
      <Navbar templatesUrl={templatesUrl} />
      <main>{children}</main>
      <Footer templatesUrl={templatesUrl} linkedinUrl={linkedinUrl} />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentions-legales" element={<LegalPageLayout><MentionsLegales /></LegalPageLayout>} />
        <Route path="/confidentialite" element={<LegalPageLayout><Confidentialite /></LegalPageLayout>} />
      </Routes>
    </>
  )
}