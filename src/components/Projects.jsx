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

const ProjectCard = ({
  href,
  title,
  status,
  description,
  technologies,
  index,
}) => {
  const getTechLogo = (tech) => {
    const logos = {
      'React': ReactLogo,
      'Typescript': TypescriptLogo,
      'Nextjs': NextjsLogo,
      'TailwindCSS': TailwindcssLogo,
      'Graphql': GraphqlLogo,
      'Nodejs': NodejsLogo,
      'MongoDB': MongoDBLogo,
      'Redux': ReduxLogo,
      'Socketio': SocketioLogo,
      'Bun': BunLogo,
      'ReactRouter': ReactRouterLogo
    }
    return logos[tech] || null
  }

  return (
    <motion.a
      href={href}
      target='_blank'
      rel='noreferrer'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: index * 0.5 }}
    >
      <div className='bg-primary rounded-xl duration-500 h-[300px] text-md flex flex-col overflow-hidden p-5 border border-transparent transition hover:border-gray-300 hover:scale-[1.02] cursor-pointer'>
        <div className='flex flex-col space-y-1.5'>
          <p className='text-white font-bold text-lg cursor-pointer'>{title}</p>
          <span className='text-gray-300 text-sm font-medium'>{status}</span>
        </div>

        <p className='font-sans text-white mt-3'>{description}</p>

        <div className='text-pretty text-sm mt-auto flex mb-2'>
          <div className='mt-2 flex flex-wrap gap-3 justify-center items-center'>
            {technologies.map((tech) => {
              const logoSrc = getTechLogo(tech)
              return logoSrc ? (
                <img
                  key={tech}
                  className='size-7'
                  src={logoSrc}
                  alt={tech}
                  title={tech}
                />
              ) : null
            })}
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export const Projects = () => {
  const projects = [
    {
      href: 'https://guessdex-production.up.railway.app',
      title: 'Guessdex',
      status: 'PUBLISHED | SIDE PROJECT',
      description:
        'Guessdex is a web game where players test their Pokémon knowledge by trying to identify Pokémon from their silhouettes. Players are presented with a darkened silhouette and must guess the correct Pokémon name.',
      technologies: [
        'React',
        'Typescript',
        'TailwindCSS',
        'ReactQuery',
        'Bun',
        'ReactRouter',
        'Socketio',
      ],
    },
    {
      href: 'https://www.capturatumundo.com',
      title: 'Captura tu mundo',
      status: 'PUBLISHED | WORK PROJECT',
      description:
        'Immerse yourself in a vibrant and interactive online hub crafted specifically for photography enthusiasts — a space where creativity thrives, inspiration is shared, and passionate photographers connect, learn, and grow together.',
      technologies: ['Typescript', 'Nextjs', 'TailwindCSS', 'Graphql'],
    },
    {
      href: 'https://stateofmac.vercel.app/',
      title: 'State of Mac',
      status: 'PUBLISHED | SIDE PROJECT',
      description:
        'Your go-to platform for effortlessly discovering whether your favorite games are compatible with Mac — offering real-world performance insights, community reviews, and up-to-date compatibility information, all in one place.',
      technologies: [
        'Typescript',
        'Nextjs',
        'TailwindCSS',
        'Redux',
        'Nodejs',
        'MongoDB',
      ],
    },
    // {
    //   href: 'https://waz.vercel.app/',
    //   title: 'WAZ',
    //   status: 'SIDE PROJECT',
    //   description:
    //     'With WAZ, you can easily find and watch your favorite anime shows and movies on your computer.',
    //   technologies: ['Typescript', 'Nextjs', 'TailwindCSS', 'Tauri', 'Zustand'],
    // },
    {
      href: 'https://asoprocegua.vercel.app',
      title: 'Asoprocegua',
      status: 'PUBLISHED | WORK PROJECT',
      description:
        '"Our mission is to amplify the voices of small and medium-sized producers in Guaviare. "',
      technologies: ['Typescript', 'Nextjs', 'TailwindCSS'],
    },
    {
      href: 'https://dcrew-main-front-v2.vercel.app/',
      title: 'Dcrew',
      status: 'PUBLISHED | WORK PROJECT',
      description:
        'Dcrew is a social network built for cinephiles — a passionate community where film lovers connect, share reviews, discuss their favorite scenes, and explore cinema from every genre and era.',
      technologies: ['Typescript', 'Nextjs'],
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
        Featured <span className='text-zinc-400'>Projects</span>
      </motion.h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {projects.map((project) => (
          <ProjectCard
            key={project.href}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}
