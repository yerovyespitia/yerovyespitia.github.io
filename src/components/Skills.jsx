import { motion } from 'framer-motion'

export const Skills = () => {
  const icons = [
    {
      src: '/svgs/typescript.svg',
      alt: 'typescript',
      title: 'Typescript',
    },
    {
      src: '/svgs/react.svg',
      alt: 'react',
      title: 'React',
    },
    {
      src: '/svgs/nextjs.svg',
      alt: 'nextjs',
      title: 'Next.js',
    },
    {
      src: '/svgs/tailwindcss.svg',
      alt: 'tailwind',
      title: 'Tailwind',
    },
    {
      src: '/svgs/reactquery.svg',
      alt: 'reactquery',
      title: 'React Query',
    },
    {
      src: '/svgs/redux.svg',
      alt: 'redux',
      title: 'Redux',
    },
    {
      src: '/svgs/reactrouter.svg',
      alt: 'reactrouter',
      title: 'React Router',
    },
    {
      src: '/svgs/graphql.svg',
      alt: 'graphql',
      title: 'GraphQL',
    },
    {
      src: '/svgs/nodejs.svg',
      alt: 'nodejs',
      title: 'Node.js',
    },
    {
      src: '/svgs/bun.svg',
      alt: 'bun',
      title: 'Bun',
    },
    {
      src: '/svgs/hono.svg',
      alt: 'hono',
      title: 'Hono',
    },
    {
      src: '/svgs/socketio.svg',
      alt: 'socketio',
      title: 'Socket.io',
    },
    {
      src: '/svgs/mongodb.svg',
      alt: 'mongodb',
      title: 'Mongodb',
    },
    {
      src: '/svgs/postgresql.svg',
      alt: 'postgresql',
      title: 'PostgreSQL',
    },
    {
      src: '/svgs/python.svg',
      alt: 'python',
      title: 'Python',
    },
    {
      src: '/svgs/java.svg',
      alt: 'java',
      title: 'Java',
    },
    {
      src: '/svgs/git.svg',
      alt: 'git',
      title: 'Git',
    },
    {
      src: '/svgs/figma.svg',
      alt: 'figma',
      title: 'Figma',
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
        My Tech <span className='text-zinc-400'>Skills</span>
      </motion.h2>
      <div className='flex items-center justify-center gap-8 flex-wrap'>
        {icons.map((skill, index) => (
          <motion.div
            key={index}
            className='bg-primary flex items-center p-4 md:p-6 rounded-lg'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <img
              src={skill.src}
              alt={skill.alt}
              className='size-12 duration-500 hover:scale-110 hover:rotate-12 transition-transform'
              title={skill.title}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
