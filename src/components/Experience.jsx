import { motion } from 'framer-motion'

export const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Netforemost',
      date: '2025 - Present',
      description:
        'Built and maintained web applications using React, Next.js, and GraphQL.',
    },
    {
      title: 'Software Developer',
      company: 'Weplash',
      date: '2025 - Present',
      description:
        'Developed and maintained web applications using React, Next.js, and TypeScript, ensuring high code quality and seamless user experiences. Collaborated with designers to implement responsive designs and optimized performance for fast load times.',
    },
    {
      title: 'Web Developer',
      company: 'Archanix Solutions',
      date: '2023 - 2024',
      description:
        'Built scalable and maintainable web applications using React, Next.js, and TypeScript.',
    },
  ]

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

      <div className='flex flex-col gap-4'>
        {experiences.map((experience) => (
          <div className='flex flex-col gap-2 bg-primary rounded-xl p-4 duration-500 border border-transparent transition hover:border-gray-300 hover:scale-[1.02]'>
            <h3 className='text-white text-2xl font-medium'>
              {experience.title}
            </h3>
            <div className='flex flex-col'>
              <h4 className='text-zinc-200 font-medium'>
                {experience.company}
              </h4>
              <p className='text-zinc-400'>{experience.date}</p>
            </div>
            <p className='text-zinc-300'>{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
