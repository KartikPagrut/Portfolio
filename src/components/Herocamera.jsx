import React, { useRef } from 'react'
import {useFrame} from "@react-three/fiber"
import {easing} from "maath"
// import { smoothstep } from 'three/src/math/MathUtils.js';




const Herocamera = ({children,isMobile}) => {

    const groupref = useRef();

    useFrame((state,delta)=>{
         easing.damp3(state.camera.position,[0,0,20],
            0.25,delta)

         if(!isMobile){   
         easing.dampE(groupref.current.rotation,[-state.pointer.y/3,-state.pointer.x/5,0],
            0.25,delta
        )

         }   

    })




  return (
    <>

      <group ref={groupref}> {children} </group>
    
    </>
  )
}

export default Herocamera
