import { Float, useGLTF } from '@react-three/drei'
import logo from '../public/models/react.glb'

useGLTF.preload(logo)

const Reactlogo = (props) => {
  const { nodes, materials } = useGLTF(logo)

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <group
        {...props}
        position={[10, 3.5, 0]}   // ✅ Proper visible position
        scale={0.19}              // ✅ Single clean scale
        dispose={null}
      >
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          rotation={[0, 0, -Math.PI / 2]}
          castShadow
          receiveShadow
        />
      </group>
    </Float>
  )
}

export default Reactlogo
