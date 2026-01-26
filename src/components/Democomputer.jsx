import React, { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useGLTF, useVideoTexture } from '@react-three/drei'
import computer from "../public/models/computer.glb"
import video1 from "../public/textures/project/project1.mp4"
import gsap from "gsap"
import { useEffect } from 'react'
import {useGSAP} from "@gsap/react"


const Democomputer = ({ texture, ...props }) => {
  const group = useRef()
  const { nodes, materials } = useGLTF(computer)

  var videoTexture = useVideoTexture(texture ?? video1, {
    loop: true,
    muted: true,
    autoplay: true,
    start: true,
    crossOrigin: "anonymous",
  })

   useMemo(() => {
    videoTexture.colorSpace = THREE.SRGBColorSpace
  }, [videoTexture])

  useEffect(() => {
    if(videoTexture){
      videoTexture.flipY=false
    }
  const video = videoTexture?.image
  if (!video) return

  video.muted = true
  video.playsInline = true
  video.loop = true

  const playPromise = video.play()
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay prevented (Safari/iOS), but muted video will retry
    })
  }
}, [videoTexture])


  // ✅ Animate once
  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    })
  }, [videoTexture])


  return (
    <group ref={group} {...props} dispose={null}>
      {/* MONITOR SCREEN */}
      <mesh
        geometry={nodes['monitor-screen'].geometry}
        position={[0.127, 1.831, 0.511]}
        rotation={[Math.PI / 2, -0.005, 0.031]}
        scale={[0.661, 0.608, 0.401]}
        castShadow={false}
        receiveShadow={false}
      >
        <meshBasicMaterial map={videoTexture} toneMapped={false} />
      </mesh>

      {/* COMPUTER BODY */}
      <group
        position={[0.266, 1.132, 0.051]}
        rotation={[0, -0.033, 0]}
        scale={[0.042, 0.045, 0.045]}
      >
        <mesh geometry={nodes['Monitor-B-_computer_0_1'].geometry} material={materials.computer} />
        <mesh geometry={nodes['Monitor-B-_computer_0_2'].geometry} material={materials.base__0} />
        <mesh geometry={nodes['Monitor-B-_computer_0_3'].geometry} material={materials.Material_36} />
        <mesh geometry={nodes['Monitor-B-_computer_0_4'].geometry} material={materials.Material_35} />
        <mesh geometry={nodes['Monitor-B-_computer_0_5'].geometry} material={materials.Material_34} />
        <mesh geometry={nodes['Monitor-B-_computer_0_6'].geometry} material={materials.keys} />
        <mesh geometry={nodes['Monitor-B-_computer_0_7'].geometry} material={materials.keys2} />
        <mesh geometry={nodes['Monitor-B-_computer_0_8'].geometry} material={materials.Material_37} />
      </group>
    </group>
  )
}

useGLTF.preload(computer)

export default Democomputer
