import React, { useRef, useEffect, useMemo } from "react"
import { useGLTF, useFBX, useAnimations } from "@react-three/drei"
import { useGraph } from "@react-three/fiber"
import { SkeletonUtils } from "three-stdlib"

import developer from "../public/models/developer.glb"
import idle from "../public/models/animations/idle.fbx"
import salute from "../public/models/animations/salute.fbx"
import clapping from "../public/models/animations/clapping.fbx"
import victory from "../public/models/animations/victory.fbx"

const Developer = ({ animationName = "idle", ...props }) => {
  const group = useRef()

  // Load model
  const { scene } = useGLTF(developer)

  // Clone skeleton
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  // Load animations
  const idleFBX = useFBX(idle)
  const clapFBX = useFBX(clapping)
  const victoryFBX = useFBX(victory)
  const saluteFBX = useFBX(salute)

  // Prepare animations once
  const animations = useMemo(() => {
    const i = idleFBX.animations[0]
    const c = clapFBX.animations[0]
    const d = victoryFBX.animations[0]
    const s = saluteFBX.animations[0]

    if (!i || !c || !d || !s) return []

    i.name = "idle"
    c.name = "clapping"
    d.name = "victory"
    s.name = "salute"

    return [i, c, d, s]
  }, [idleFBX, clapFBX, victoryFBX, saluteFBX])

  const { actions } = useAnimations(animations, group)

  // Play animation safely
  useEffect(() => {
    if (!actions || !actions[animationName]) return

    Object.values(actions).forEach(a => a.stop())

    actions[animationName].reset().fadeIn(0.4).play()

    return () => actions[animationName]?.fadeOut(0.4)
  }, [animationName, actions])

 
  return (
    <group ref={group} {...props} dispose={null}>
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
export default Developer
