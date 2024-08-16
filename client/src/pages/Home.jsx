import Headliner from '../assets/WebComponents/embracing-entropy.svg';
import { useState } from 'react';

{/* Themes */}
import subthemeOne from '../assets/WebComponents/power-up-theme.svg'
import subthemeTwo from '../assets/WebComponents/traffic-triage-theme.svg'
import subthemeThree from '../assets/WebComponents/revamp-and-roll-theme.svg'

{/* Slider Dot */}
import slideDotOne from '../assets/WebComponents/slide-dot-1.svg'
import slideDotTwo from '../assets/WebComponents/slide-dot-2.svg'
import slideDotThree from '../assets/WebComponents/slide-dot-3.svg'

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { 
            id: 1, 
            content: (
                <div className='flex flex-col items-center justify-around'>
                    <img src={slideDotOne} className='w-[24px] mb-1'></img>
                    <h4 className='font-monts font-[400] text-[8px] tracking-widest'>1ST SUBTHEME</h4>
                    <img src={subthemeOne} className='w-[210px] mt-2'></img>
                </div>
            )
        },
        { 
            id: 2, 
            content: (
                <div className='flex flex-col items-center justify-around'>
                    <img src={slideDotTwo} className='w-[24px] mb-1'></img>
                    <h4 className='font-monts font-[400] text-[8px] tracking-widest'>2ND SUBTHEME</h4>
                    <img src={subthemeTwo} className='w-[230px] mt-5'></img>
                </div>
            )
        },
        { 
            id: 3, 
            content: (
                <div className='flex flex-col items-center justify-around'>
                    <img src={slideDotThree} className='w-[24px] mb-1'></img>
                    <h4 className='font-monts font-[400] text-[8px] tracking-widest'>3RD SUBTHEME</h4>
                    <img src={subthemeThree} className='w-[250px] mt-[-20px]'></img>
                </div>
            )
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <>
            <section className="bg-black pt-[85px] flex flex-col">
                {/* Hero */}
                <div className="font-monts text-white">
                    <h3 className="flex flex-col text-center tracking-widest font-[400]">
                        <span>2024 TEDXIPB</span>
                        <span>MAIN THEME</span>
                    </h3>
                </div>

                <div className='flex flex-col justify-center items-center mt-3 gap-4 p-5 '>
                    <h3 className='text-white font-monts text-[15px] font-[700] italic'>u(r) turn</h3>
                    <img src={Headliner} className='w-[290px]' alt="Headliner" />
                </div>

                 {/* Carousel */}
                <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
                    <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {slides.map((slide, index) => (
                            <div key={slide.id} className="w-full flex-shrink-0">
                                <div className="p-5 text-white">
                                    {slide.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
                        &#10094;
                    </button>
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
                        &#10095;
                    </button>
                </div>

                {/* About TEDx Container */}
                <div className='bg-aboutTEDxBG bg-center bg-cover bg-no-repeat max-w-[360px] p-6 m-1 flex flex-col gap-4 items-start'>
                    <h1 className='text-md font-[800] leading-tight'>
                        <div className='text-white'>
                            <span className='text-[#DB1212]'>T</span>ECHNOLOGY
                        </div>
                        <div className='text-white'>
                            <span className='text-[#DB1212]'>E</span>NTERTAINMENT
                        </div>
                        <div className='text-white'>
                            <span className='text-[#DB1212]'>D</span>ESIGN
                        </div>
                    </h1>
                    <p className='text-white text-justify text-[10px]'>
                        In the spirit of discovering and spreading ideas, 
                        TED has created a program called TEDx. TEDx is a program of local, 
                        self-organized events that bring people together to share a TED-like experience. 
                        Our event is called TEDx[name], where x = independently organized TED event. At our TEDx[name] event, 
                        TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. 
                        The TED Conference provides general guidance for the TEDx program, but individual TEDx events, 
                        including ours, are self-organized.
                    </p>
                    <button className='text-white text-[7px] font-monts bg-[#007D58] p-2 font-[800] rounded-md flex items-center hover:border hover:bg-[#4abb99] transition duration-200 ease-in-out'>TEDx Programs
                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </section>
        </>
    );
}
