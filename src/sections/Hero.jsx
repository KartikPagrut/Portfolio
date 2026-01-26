import React from 'react'
import Hackerroom from '../components/Hackerroom'
import Loading from '../components/Loading'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import Cube from "../components/Cube"
import {useMediaQuery} from "react-responsive"
import Target from '../components/Target'
import Reactlogo from "../components/Reactlogo"
import { calculateSizes } from '../constants'
import Herocamera from '../components/Herocamera'
import Rings from "../components/Rings"
import Button from '../components/Button'




const Hero = () => {
   const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);



  return (
   <>
   <section className='min-h-screen w-full flex flex-col relative' id='home'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space  gap-3'>
         <p className='sm:text-3xl text-2xl text-white text-center font-medium font-generalsans '>Hi , I am kartik <span className='waving-hand'>👋</span></p>
         <p className='hero_tag text-gray_gradient '>Building Produts & Brands</p>
      </div>

      <div className='w-full h-full absolute inset-0'>
         
         <Canvas className='w-full h-full' >
               
              


            <Suspense fallback={<Loading/>}>

            <PerspectiveCamera makeDefault 
                               position={[0,0,14]}/>


                    <Herocamera isMobile={isMobile}>

                  <Hackerroom
                   scale={sizes.deskScale}
                    position={sizes.deskPosition}
                    rotation={[0.26,-3.135, 0]}/>

                    </Herocamera>



                    {/* //small eleent */}
                    <group>
                       <Target position={sizes.targetPosition} />
                       <Reactlogo position={sizes.reactLogoPosition}/>
                       <Cube position={sizes.cubePosition}/>
                       <Rings position={sizes.ringPosition}/>

                    </group>
             
            <ambientLight     intensity={1}/>
           

           {/* <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
            /> */}


            <directionalLight position={[10,10,10]}
                               intensity={0.5}
            />
            </Suspense>
         </Canvas>
      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10 C-space'>
        <a href="#about" className='w-fit'>
         <Button name="Let's Work toghether" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>

   </section>


   </>
  )
}

export default Hero
