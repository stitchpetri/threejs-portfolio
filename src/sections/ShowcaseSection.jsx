import React, {useRef} from 'react'
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'

const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    
    useGSAP(() => {
        gsap.fromTo(sectionRef.current,
             {opacity:0}, 
             {opacity:1, duration: 1.5}
            )
       

    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

     projects.forEach((card, index) => {
       gsap.fromTo(
         card,
         {
           y: 50,
           opacity: 0,
         },
         {
           y: 0,
           opacity: 1,
           duration: 1,
           delay: 0.3 * (index + 1),
           scrollTrigger: {
             trigger: card,
             start: "top bottom-=100",
           },
         }
       );
     });
   }, []);



  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
        <div className="w-full">
            <div className="showcaselayout">
                {/* LEFT */}

                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/project2.png" alt="VibeCo Guitars"/>
                    </div>
                    <div className="text-content">
                        <h2> VibeCo Custom Guitars </h2>
                        <p className='text-white-50 md:text-xl'>
                        A fictional e-commerce website that allows users to browse available guitars and customize their own using a real-time 3D preview. This project showcases interactive product visualization and user-driven customization using Three.js for 3D rendering, along with React, Tailwind CSS, TypeScript, and Vite for a modern, responsive frontend. The focus was on creating an engaging and intuitive user experience that blends creativity with technical performance.</p>
                    </div>
        
                </div>

                {/* RIGHT */}

                <div className="project-list-wrapper overflow-hidden" >
                  <div className="project" ref={project2Ref}>
                        <div className='image-wrapper bg-zinc-900'>
                            <img src="/images/project1.png" alt="Fornite Game" />
                        
                        </div>
                        <div className="text-content">
                            <h2>  Equestrian Adventures in Fornite </h2>
                            
                        </div>
                  </div>
                  <div className="project" ref={project3Ref}>
                        <div className='image-wrapper bg-zinc-900'>
                            <img src="/images/project3.png" alt="Voxel Forest Project" />
                        </div>
                        <div className="text-content">
                            <h2>  Voxel Forest Exploration </h2>
                        </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection
