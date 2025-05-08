import { useGLTF } from '@react-three/drei'

export function Model3D(props) {
  const { scene } = useGLTF('/models/Duck.glb')

  return (
    <primitive
      object={scene}
      {...props}
    />
  )
}
