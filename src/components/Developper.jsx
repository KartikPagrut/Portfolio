
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import developer from "../public/models/animations/Developper.glb"
import idle from "../public/models/animations/idle.fbx"
import salute from "../public/models/animations/salute.fbx"
import victory from "../public/models/animations/victory.fbx"
import clapping from "../public/models/animations/clapping.fbx"

const Developper = ({ animationName = "idle", ...props }) => {
  const group = useRef()
  const { nodes, materials } = useGLTF(developer)

  const { animations: idleAnim } = useFBX(idle)
  const { animations: saluteAnim } = useFBX(salute)
  const { animations: victoryAnim } = useFBX(victory)
  const { animations: clappingAnim } = useFBX(clapping)

  idleAnim[0].name = "idle"
  saluteAnim[0].name = "salute"
  victoryAnim[0].name = "victory"
  clappingAnim[0].name = "clapping"

  const { actions } = useAnimations(
    [
      idleAnim[0],
      saluteAnim[0],
      victoryAnim[0],
      clappingAnim[0],
    ],
    group
  )

  useEffect(() => {
    if (!actions || !actions[animationName]) return

    actions[animationName]
      .reset()
      .fadeIn(0.5)
      .play()

    return () => {
      actions[animationName]?.fadeOut(0.5)
    }
  }, [animationName, actions])








  return (
    <group {...props}  ref={group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  )
}

useGLTF.preload(developer)

export default Developper;
