import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Steps from './components/Steps.jsx'
import Equipment from './components/Equipment.jsx'
import Pricing from './components/Pricing.jsx'
import Trust from './components/Trust.jsx'
import RequestForm from './components/RequestForm.jsx'
import Contacts from './components/Contacts.jsx'
import Footer from './components/Footer.jsx'
import { useScrollEffects } from './hooks/useScrollEffects.js'

export default function App() {
  const scrolled = useScrollEffects()
  const [selectedTask, setSelectedTask] = useState('')

  const selectTask = (task) => {
    setSelectedTask(task)
    window.requestAnimationFrame(() => {
      document.getElementById('form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <>
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Steps />
        <Equipment onSelect={selectTask} />
        <Pricing />
        <Trust />
        <RequestForm selectedTask={selectedTask} />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
