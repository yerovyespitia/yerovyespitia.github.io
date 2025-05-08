import { motion } from 'framer-motion'

export const Experience = () => {
  return (
    <section className='flex flex-col gap-8'>
      <motion.h2
        className='text-4xl text-white text-center'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My <span className='text-zinc-400'>Experience</span>
      </motion.h2>

      <div className='flex flex-col gap-2 p-4 rounded-xl bg-primary duration-500 border border-transparent transition hover:border-gray-300 hover:scale-[1.02]'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='flex flex-col gap-2'
        >
          <h3 className='text-white text-2xl font-medium'>Web Developer</h3>
          <div className='flex flex-col'>
            <h4 className='text-zinc-200 font-medium'>Archanix Solutions</h4>
            <p className='text-zinc-400'>2023 - 2024</p>
          </div>
          <p className='text-zinc-300'>
            Built scalable and maintainable web applications using React,
            Next.js, and TypeScript, ensuring timely delivery and high code
            quality. Collaborated with backend developers for seamless API
            integration and implemented Zustand and Redux to improve state
            management and reduce bugs. Optimized performance, achieving
            significantly faster load times.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
