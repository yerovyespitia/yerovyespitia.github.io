import { useGLTF } from '@react-three/drei'
import Duck from '../assets/models/Duck.glb'

export function Model3D(props) {
  const { scene } = useGLTF(Duck)

  return (
    <primitive
      object={scene}
      {...props}
    />
  )
}
