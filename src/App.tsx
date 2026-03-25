import type { ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'
import ScrollToHash from './components/ScrollToHash'

const shared = {
  email: 'maison.clm.contact@gmail.com',
  formUrl: 'https://forms.gle/FnAXqJFYDrvXt5H56',
  templatesUrl: 'https://app.maisonclm.fr',
  linkedinUrl: 'https://www.linkedin.com/in/cl%C3%A9ment-carr%C3%A9-a6971624a/',
}

function HomePage() {
  return (
    <div className="site-shell">
      <Navbar templatesUrl={shared.templatesUrl} />

      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <Contact email={shared.email} formUrl={shared.formUrl} />
      </main>

      <Footer templatesUrl={shared.templatesUrl} linkedinUrl={shared.linkedinUrl} />
    </div>
  )
}

function LegalPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <Navbar templatesUrl={shared.templatesUrl} />
      <main>{children}</main>
      <Footer templatesUrl={shared.templatesUrl} linkedinUrl={shared.linkedinUrl} />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/mentions-legales"
          element={(
            <LegalPageLayout>
              <MentionsLegales />
            </LegalPageLayout>
          )}
        />
        <Route
          path="/confidentialite"
          element={(
            <LegalPageLayout>
              <Confidentialite />
            </LegalPageLayout>
          )}
        />
      </Routes>
    </>
  )
}
