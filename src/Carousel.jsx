import { useState } from 'react'
import { useEffect } from 'react'


export default function Carousel({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
}){
    const [current, setCurrent] = useState(0);
    
    const prev = () => setCurrent((current) => (current === 0 ? slides.length -1 : current - 1))

    const next = () => setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))

    useEffect(()=>{
        if(!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return ()=> clearInterval(slideInterval)
    })
    return (
        <div className="overflow-hidden relative ">
            <div className="max-h-screen flex transition-transform ease-out duration-500" 
            style={{transform: `translateX(-${current*100}%)`}}>{slides}</div>
            <div className="absolute inset-0 flex justify-between items-center p-4">
                <button onClick={prev} className="bg-slate-50 rounded-full shadow hover:bg-white h-20 w-15 ">
                    <img src="imgs/left-arrow.svg"/>
                </button>
                <button onClick={next} className="bg-slate-50 rounded-full shadow hover:bg-white h-20 w-15 ">
                    <img src="imgs/right-arrow.svg"/>
                </button>
            </div>
        </div>
    
       
    );
}