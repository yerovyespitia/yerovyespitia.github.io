import { motion } from 'framer-motion'
import ReactLogo from '../../public/svgs/react.svg'
import TypescriptLogo from '../../public/svgs/typescript.svg'
import NextjsLogo from '../../public/svgs/nextjs.svg'
import TailwindcssLogo from '../../public/svgs/tailwindcss.svg'
import GraphqlLogo from '../../public/svgs/graphql.svg'
import NodejsLogo from '../../public/svgs/nodejs.svg'
import MongoDBLogo from '../../public/svgs/mongodb.svg'
import ReduxLogo from '../../public/svgs/redux.svg'
import SocketioLogo from '../../public/svgs/socketio.svg'
import BunLogo from '../../public/svgs/bun.svg'
import ReactRouterLogo from '../../public/svgs/reactrouter.svg'
import FigmaLogo from '../../public/svgs/figma.svg'
import PythonLogo from '../../public/svgs/python.svg'
import JavaLogo from '../../public/svgs/java.svg'
import GitLogo from '../../public/svgs/git.svg'
import PostgreSQLLogo from '../../public/svgs/postgresql.svg'
import HonoLogo from '../../public/svgs/hono.svg'
import ReactQueryLogo from '../../public/svgs/reactquery.svg'

export const Skills = () => {
  const icons = [
    {
      src: TypescriptLogo,
      alt: 'typescript',
      title: 'Typescript',
    },
    {
      src: ReactLogo,
      alt: 'react',
      title: 'React',
    },
    {
      src: NextjsLogo,
      alt: 'nextjs',
      title: 'Next.js',
    },
    {
      src: TailwindcssLogo,
      alt: 'tailwind',
      title: 'Tailwind',
    },
    {
      src: ReactQueryLogo,
      alt: 'reactquery',
      title: 'React Query',
    },
    {
      src: ReduxLogo,
      alt: 'redux',
      title: 'Redux',
    },
    {
      src: ReactRouterLogo,
      alt: 'reactrouter',
      title: 'React Router',
    },
    {
      src: GraphqlLogo,
      alt: 'graphql',
      title: 'GraphQL',
    },
    {
      src: NodejsLogo,
      alt: 'nodejs',
      title: 'Node.js',
    },
    {
      src: BunLogo,
      alt: 'bun',
      title: 'Bun',
    },
    {
      src: HonoLogo,
      alt: 'hono',
      title: 'Hono',
    },
    {
      src: SocketioLogo,
      alt: 'socketio',
      title: 'Socket.io',
    },
    {
      src: MongoDBLogo,
      alt: 'mongodb',
      title: 'Mongodb',
    },
    {
      src: PostgreSQLLogo,
      alt: 'postgresql',
      title: 'PostgreSQL',
    },
    {
      src: PythonLogo,
      alt: 'python',
      title: 'Python',
    },
    {
      src: JavaLogo,
      alt: 'java',
      title: 'Java',
    },
    {
      src: GitLogo,
      alt: 'git',
      title: 'Git',
    },
    {
      src: FigmaLogo,
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
