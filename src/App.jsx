import { Heading } from './components/Heading'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'

function App() {
  return (
    <main className='flex flex-col gap-16 py-16 max-w-4xl mx-auto px-4'>
      {/* <div className='h-screen flex items-center justify-center pb-16'>
        <Heading />
      </div> */}
      <div
        className='flex items-center justify-center py-16'
        id='skills'
      >
        <Skills />
      </div>
      <div
        className='flex items-center justify-center py-16'
        id='projects'
      >
        <Projects />
      </div>
      <div
        className='flex items-center justify-center py-16'
        id='experience'
      >
        <Experience />
      </div>
    </main>
  )
}

export default App
