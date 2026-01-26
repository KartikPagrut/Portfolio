import React, { useRef } from 'react'
import {OrbitControls, useGLTF} from "@react-three/drei"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import drone from "../public/models/drone.glb"

const Target = (props) => {
    const targetref = useRef(null)

    const {scene} = useGLTF(drone)

       useGSAP(()=>{
        gsap.to(targetref.current.position,{
            y:targetref.current.position.y +0.5,
            duration:1.5,
            repeat:-1,
            yoyo:true
        })

       })


  return (
   <>
         <mesh
           {...props} ref={targetref} 
           rotation={[0,Math.PI/5,0]}
          scale={0.6}
          position={[-10,-5,0]}
            >
    
               
            <primitive object={scene}/>
        </mesh>

   </>
  )
}

export default Target
