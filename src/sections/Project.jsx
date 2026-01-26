import React, { Suspense } from 'react'
import myProjects from "../constants/index"
import arrowup from "../public/assets/arrow-up.png"
import { useState } from 'react'
import leftarrow from "../public/assets/left-arrow.png"
import rightarrow from "../public/assets/right-arrow.png"
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Loading from "../components/Loading"
import Democomputer from "../components/Democomputer"
const Project = () => {

  const [selectprojectindex, setselectprojectindex] = useState(0)

  const projectcount = myProjects.length

   const currproject = myProjects[selectprojectindex]

   
  const handleNavigation =(direction )=>{
    setselectprojectindex((prevIndex)=>{
      if(direction ==='previous'){
        return prevIndex === 0 ? projectcount-1 : prevIndex-1
      }else{
        return prevIndex === projectcount -1 ? 0 : prevIndex+1
      }
    })


  }




  return (
  <>
  <section className='c-space my-20' id='work'>
    <p className='head-text'>My Work</p>
    <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
        <div className='relative flex flex-col gap-5  sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>

            <div className='absolute top-0 right-0'>
              <img src={currproject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl' />
            </div>

            <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg ' style={currproject.logoStyle}>
              <img src={currproject.logo} alt="" className='w-10 h-10 shadow-sm' />
            </div>

            <div className='flex flex-col text-white-600 gap-5 my-5'>
              <p className='text-white text-2xl font-semibold'>{currproject.title}</p>
              <p className='animatedText'>{currproject.desc}</p>
              <p className='animatedText'>{currproject.subdesc}</p>
            </div>
            
            <div className='flex items-center justify-between flex-wrap gap-5'>
              <div className='flex items-center gap-3'>
                {currproject.tags.map((tag,index)=>(

                  <div key={index} className='tech-logo'>
                    <img src={tag.path} alt={tag.name} />
                  </div>

                ))}
              </div>
             <a className='flex items-center gap-2 text-white-600 cursor-pointer'
                href={currproject.href} target='_blank' rel='noreferrer' >
              <p>Check live sites</p>
              <img src={arrowup} alt="" className='w-3 h-3'/>
             </a>

            </div>

            <div className='flex justify-between items-center mt-7'>
              <button className='arrow-btn' onClick={()=>handleNavigation("previous")}>
                <img src={leftarrow} alt="right arrow"className='w-4 h-4' />
              </button>
              <button className='arrow-btn' onClick={()=>handleNavigation("next")}>
                <img src={rightarrow} alt="right arrow"className='w-4 h-4' />
              </button>
            </div>
        </div>

         {/* /// 3d model */}
        <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
           <Canvas>
            <ambientLight intensity={Math.PI/2}/>
            <directionalLight position={[10,10,5]}/>
            <Center>
              <Suspense fallback={<Loading/>}>
              <group scale={2} position={[0,-3,0]} rotation={[0,-0.1,0]}>
                <Democomputer texture={currproject.texture}/>
              </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false}/>
           </Canvas>
        </div>




    </div>
  </section>
  
  
  </>
  )
}

export default Project
