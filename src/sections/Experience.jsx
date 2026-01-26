import React, { Suspense ,useState} from 'react'
import  {workExperiences} from "../constants/index" 
import {OrbitControls} from "@react-three/drei"
import Loading from "../components/Loading"
import Developper from "../components/Developper"
import { Canvas } from '@react-three/fiber'

const Experience = () => {

    const [animationName, setanimationName] = useState("idle")


  return (
    <>
    <section className='c-space my-20'>
        <div className='w-full text-white-600'>
            <h3 className='head-text'> My work Experience</h3>
            <div className='work-container'>
                <div className='work-canvas'>

                    <Canvas>
                        <ambientLight intensity={0.5}/>
                        <spotLight position ={[10,10,10]} penbra={1} angle={0.15}/>
                        <directionalLight position={[10,10,10]} intensity={1} />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2}/>

                        <Suspense fallback={<Loading/>}>
                            
                            <Developper position-y={-3} scale={3} animationName={animationName}/>

                        </Suspense>

                    </Canvas>

                </div>

                <div className='work-content'>
                    <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
                      {workExperiences.map(({id,name,pos,icon,duration,title,animation}) => (

                         <div key={id} 
                         onClick={()=> setanimationName(animation.toLowerCase())}
                         
                         onPointerOver={() => setanimationName(animation.toLowerCase())}

                         onPointerOut={()=>setanimationName("idle") }
                         className='work-content_container group'>
                            <div className='flex flex-col justify-start items-center py-2'>
                                <div className='work-content_logo'>
                                    <img src={icon} alt="" className='w-full h-full' />
                                </div>
                                <div className='work-content_bar'/>

                            </div>


                            <div className='sm:p-5 px-2.5 py-5'>

                                 <p className='font-bold text-white-800'>{name}</p>
                                 <p className='text-sm mb-5'>{pos}--{duration}</p>
                                 <p className='group-hover:text-white transition-all ease-in-out duration-500  '>{title}</p>

                            </div>

                            

                         </div>
                      ))}

                    </div>
                </div>

            </div>

        </div>

    </section>
    
    </>
  )
}

export default Experience
