import gsap from 'gsap';
import React, { useEffect } from 'react'
import { useRef } from 'react'

const Animatedwords = ({title, containerClass}) => {
    const containerRef = useRef( null);

    useEffect(()=>{
        const ctx = gsap.context(()=>{
            const titleAnimation = gsap.timeline({
                scrollTrigger:{
                    trigger:containerRef.current,
                    start:'100 bottom',
                    end:'center bottom',
                    toggleActions:'play none none reverse'
                }
            });
            titleAnimation.to('.animated-word',{
                opacity:1,
                transform:' translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease:'power2.inOut',
                stagger:0.2,
            })

        },containerRef)
        return ()=>ctx.revert();
    }, []);

  return (
    <div className={`animated-title ${containerClass}`}>
          {title.split('<br />').map((line,index)=>(
            <div key = {index} className=" flex-center max-w-full flex-wrap gap-3 px-10 md:gap-3">
                {line.split(' ').word((word,i)=>(
                    <span key={i} className='animated-word' dangerouslySetInnerHTML={{_html:word}}/>
                ))}
            </div>
          ))}
    </div>
  )
}

export default Animatedwords
