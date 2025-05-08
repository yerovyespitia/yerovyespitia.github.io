import { motion } from 'framer-motion'

export const Navbar = () => {
  return (
    <motion.nav
      className='h-16 p-4'
    >
      <ul className='flex items-center justify-end gap-4 md:gap-12 text-zinc-300 font-light'>
        <li className='cursor-pointer'>Skills</li>
        <li className='cursor-pointer'>Projects</li>
        <li className='cursor-pointer'>Experience</li>
      </ul>
    </motion.nav>
  )
}
