import { Heading } from './components/Heading'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { motion } from 'framer-motion'

function App() {
  return (
    <main className='flex flex-col gap-16 py-8 sm:py-16 max-w-4xl mx-auto px-4'>
      <div className='sm:h-screen flex items-center justify-center pb-16'>
        <Heading />
      </div>
      <div
        className='flex items-center justify-center py-2 sm:py-16'
        id='skills'
      >
        <Skills />
      </div>
      <div
        className='flex items-center justify-center py-2 sm:py-16'
        id='projects'
      >
        <Projects />
      </div>
      <div
        className='flex items-center justify-center py-2 sm:py-16'
        id='experience'
      >
        <motion.p
          className='text-2xl sm:text-4xl text-white text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          I create products that are not only visually compelling but also drive
          results.{' '}
          <span className='text-zinc-400'>
            My goal is to design user experiences that align business goals with
            real user needs — no more one-sided solutions. With a strong eye for
            design and a focus on usability and impact,
          </span>{' '}
          I’m ready to help your team build products that truly perform
        </motion.p>
      </div>
      <div
        className='flex items-center justify-center py-2 sm:py-16'
        id='experience'
      >
        <Experience />
      </div>
    </main>
  )
}

export default App
