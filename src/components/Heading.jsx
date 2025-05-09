import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Model3D } from './Model3D'
import XLogo from '../../public/svgs/x.svg'
import GithubLogo from '../../public/svgs/github.svg'
import LinkedinLogo from '../../public/svgs/linkedin.svg'

const RotatingModel = () => {
  const modelRef = useRef()

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <Model3D
      ref={modelRef}
      scale={0.32}
      position={[0, -1.5, 0]}
    />
  )
}

export const Heading = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-8'>
      <p className='text-black bg-white/95 px-4 py-2 rounded-full border border-zinc-700 animate-fade-up'>
        Hey, I'm <span className='font-bold text-zinc-800'>Yerovy</span> 😁
      </p>
      <h1 className='text-5xl md:text-7xl text-white text-center animate-fade-up'>
        Frontend developer{' '}
        <span className='text-zinc-400'>
          building fast, elegant, and user-focused interfaces
        </span>
      </h1>
      <div className='w-[300px] lg:w-full h-[380px] animate-fade-up'>
        <Canvas>
          <PerspectiveCamera
            makeDefault
            position={[0, 0, 5]}
          />
          <ambientLight />
          <directionalLight position={[2, 2, 2]} />
          <RotatingModel />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div className='flex items-center gap-2'>
        <a
          href='https://twitter.com/yerovyespitia'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='p-4 rounded-full border group border-zinc-700 animate-fade cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>
            <img
              src={XLogo}
              alt={'X'}
              className='size-4 group-hover:invert'
            />
          </div>
        </a>
        <a
          href='https://github.com/yerovyespitia'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='p-4 rounded-full border group border-zinc-700 animate-fade cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>
            <img
              src={GithubLogo}
              alt={'Github'}
              className='size-4 scale-150 group-hover:invert'
            />
          </div>
        </a>
        <a
          href='https://www.linkedin.com/in/yerovyespitia/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='p-4 rounded-full border group border-zinc-700 animate-fade cursor-pointer hover:bg-white hover:text-black transition-all duration-300'>
            <img
              src={LinkedinLogo}
              alt={'Linkedin'}
              className='size-4 brightness-[100] scale-125 group-hover:invert'
            />
          </div>
        </a>
      </div>
      <a
        href='/documents/CV.pdf'
        download
      >
        <button className='bg-black/10 border border-zinc-700 px-6 py-3 text-white rounded-full text-md cursor-pointer hover:bg-white hover:text-black transition-all duration-300 animate-fade-2'>
          Curriculum
        </button>
      </a>
    </section>
  )
}
