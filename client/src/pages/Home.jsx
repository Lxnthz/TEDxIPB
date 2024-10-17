import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

{/* Themes */}
import subthemeOne from '../assets/WebComponents/power-up-theme.svg'
import subthemeTwo from '../assets/WebComponents/traffic-triage-theme.svg'
import subthemeThree from '../assets/WebComponents/revamp-and-roll-theme.svg'
import Headliner from '../assets/WebComponents/embracing-entropy.svg';

{/* Slider Dot */}
import slideDotOne from '../assets/WebComponents/slide-dot-1.svg'
import slideDotTwo from '../assets/WebComponents/slide-dot-2.svg'
import slideDotThree from '../assets/WebComponents/slide-dot-3.svg'

{/* Exported Components */}
import Footer from '../components/Footer';
import MovingLogo from '../components/MainThemeLogo';

{/* Exported Assets */}
import ticketHeadline from '../assets/WebComponents/ticket-headline.svg'
import intersection from '../assets/WebComponents/intersection.svg'
import intersectionDesktop from '../assets/WebComponents/intersection-fade-desktop.svg'
import buyTickets from '../assets/WebComponents/buy-tickets.svg'
import volunteerRegister from '../assets/WebComponents/volunteer-register.svg'
import policeLineLong from '../assets/WebComponents/police-line-long.svg'

export default function Home() {
    {/* Page Navigator */}
    const navigate = useNavigate();
    const handleAboutClick = () => { navigate('/about'); };
    const handleSubthemeOne = () => { navigate('/subtheme-one'); };
    const handleSubthemeTwo = () => { navigate('/subtheme-two'); };
    const handleSubthemeThree = () => { navigate('/subtheme-three'); };
    const handleMainTheme = () => { navigate('/main-theme'); };
    {/* --------------------------- */}
    
    {/* Carousel Controller */}
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { 
            id: 1, 
            content: (
                <div onClick={handleSubthemeOne} className='flex flex-col items-center justify-around'>
                    <img src={slideDotOne} className='w-[24px] mb-1 md:w-[50px]'></img>
                    <h4 className='font-monts font-[400] text-[8px] tracking-widest md:text-[18px]'>1ST SUBTHEME</h4>
                    <img src={subthemeOne} className='w-full md:w-[400px] xl:w-[750px]'></img>
                </div>
            )
        },
        { 
            id: 2, 
            content: (
                <div onClick={handleSubthemeTwo} className='flex flex-col items-center justify-around'>
                    <img src={slideDotTwo} className='w-[24px] mb-1 md:w-[50px]'></img>
                    <h4 className='font-monts font-[400] text-[8px] tracking-widest md:text-[18px]'>2ND SUBTHEME</h4>
                    <img src={subthemeTwo} className='w-full mt-5 md:w-[500px] xl:w-[800px]'></img>
                </div>
            )
        },
        { 
            id: 3, 
            content: (
                <div onClick={handleSubthemeThree} className='flex flex-col items-center justify-around'>
                    <img src={slideDotThree} className='w-[24px] mb-1 md:w-[50px]'></img>
                    <h4 className='font-monts font-[400] text-[8px] tracking-widest md:text-[18px]'>3RD SUBTHEME</h4>
                    <img src={subthemeThree} className='w-full mt-[-20px] md:w-[500px] md:mt-[-50px] xl:w-[800px]'></img>
                </div>
            )
        },
    ];
    const nextSlide = () => { setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1)); };
    const prevSlide = () => { setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); };
    {/* --------------------------- */}

    return (
        <>
            <section className="bg-black flex flex-col overflow-hidden">
                {/* Hero */}
                <div className="bg-homeTopBG pt-[85px] pb-[50px] flex flex-col bg-center bg-no-repeat bg-cover xl:mb-[-15px] md:h-[100vh] justify-center">
                    <motion.div 
                      className="font-monts text-white"
                      initial={{ opacity:0 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}>
                        <h3 className="flex flex-col text-center tracking-widest font-[400] md:text-2xl">
                            <motion.span
                              initial={{ x:250 }}
                              whileInView={{ x: 0 }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                            >2024 TEDXIPB</motion.span>
                            <motion.span
                              initial={{ x:-250 }}
                              whileInView={{ x: 0 }}
                              transition={{ duration: 0.8, ease: "easeInOut" }}
                            >MAIN THEME</motion.span>
                        </h3>
                    </motion.div>

                    <div onClick={handleMainTheme} className='flex flex-col justify-center items-center mt-3 gap-4 p-5 md:mt-0 md:pb-12'>
                        <motion.h3 
                          className='text-white font-monts text-[15px] font-[700] italic md:text-[21px]'
                          initial={{ opacity:0, y:50 }}
                          whileInView={{ opacity:1, y:0 }}
                          transition={{ duration:1, ease:"easeInOut" }}>u(r) turn</motion.h3>
                        <motion.img 
                          src={Headliner} 
                          className='w-[290px] md:w-[500px] xl:w-[800px] hidden' 
                          alt="Headliner"
                          initial={{ y:100, opacity:0 }}
                          whileInView={{ y:0, opacity:1 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }} />
                        <MovingLogo />
                    </div>
                </div>
                <div className="flex justify-center mt-[-50px] z-10">
                    <img src={policeLineLong} className="overflow-hidden min-w-[800px] w-[1000px] md:min-w-[2000px] md:-mb-5 xl:min-w-[160vw]"></img>
                </div>
                 {/* Carousel */}
                <div className="relative w-full max-w-full mx-auto overflow-hidden bg-homeMidBG bg-center bg-no-repeat mt-[-20px] bg-full md:pt-5 xl:mt-[-45px]">
                    <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {slides.map((slide, index) => (
                            <div key={slide.id} className="w-full flex-shrink-0">
                                <div className="py-5 px-10 text-white">
                                    {slide.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full mx-4 md:mx-12">
                        &#10094;
                    </button>
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full mx-4 md:mx-12">
                        &#10095;
                    </button>
                </div>

                {/* About TEDx Container */}
                <div className='bg-aboutTEDxBG bg-center bg-cover bg-no-repeat p-6 m-1 flex flex-col gap-4 items-start lg:bg-aboutTEDxBGdesktop lg:bg-right lg:px-[100px] md:px-12'>
                    <h1 className='text-md font-[800] leading-tight md:text-5xl'>
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
                    <p className='text-white text-justify text-[10px] md:text-[16px] lg:w-[500px]'>
                        In the spirit of discovering and spreading ideas, 
                        TED has created a program called TEDx. TEDx is a program of local, 
                        self-organized events that bring people together to share a TED-like experience. 
                        Our event is called TEDxIPB, where x = independently organized TED event. At our TEDx[name] event, 
                        TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. 
                        The TED Conference provides general guidance for the TEDx program, but individual TEDx events, 
                        including ours, are self-organized.
                    </p>
                    <button className='text-white text-[7px] font-monts bg-[#007D58] p-2 font-[800] rounded-md flex items-center hover:border hover:bg-[#4abb99] transition duration-200 ease-in-out md:text-[12px]'>TEDx Programs
                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
                
                {/* Secure Tickets Section */}
                <div className='bg-homeBotBG bg-no-repeat bg-full bg-center'>
                    <div className="flex flex-col items-center mt-6 pt-10 w-screen">
                        <div className='w-screen px-7 md:px-[60px] flex justify-center'>
                            <img src={ticketHeadline} className="w-full lg:max-w-[700px]"></img>
                        </div>

                        <div className="flex justify-center items-end mt-7 w-screen px-7 max-h-[100px] gap-x-2 md:mt-[150px] z-10 md:px-12"> 
                            <div className="flex justify-center flex-col w-full lg:w-[350px]">
                                <img src={buyTickets} className="w-full"></img>
                                <button className="bg-[#E4C312] h-[19px] flex items-center justify-center font-monts tracking-[.4em] text-[9px] font-[800] px-1 md:text-[16px] md:p-4">CLICK HERE</button>
                            </div>
                            <div className="flex justify-center flex-col w-full lg:w-[350px]">
                                <img src={volunteerRegister} className="w-full"></img>
                                <button className="bg-[#E4C312] h-[19px] flex items-center justify-center font-monts tracking-[.4em] text-[9px] font-[800] px-1 object-center md:text-[16px] md:p-4">CLICK HERE</button>
                            </div>
                        </div>

                        <div className="-mt-[100px] -mb-[110px] lg:-my-[200px] xl:-my-[350px] -z-4">
                            <img src={intersection} className='w-screen md:hidden'></img>
                            <img src={intersectionDesktop} className='hidden w-screen md:block'></img>
                        </div> 
                        <div className='text-white font-monts text-md text-center tracking-tight flex flex-col items-center justify-center gap-y-4 pb-[100px] md:text-xl mx-7'>
                            <p>in a world full of <span className='italic'>intersection</span>, which <span className='italic'>road</span> are you choosing?</p>
                            <button 
                                onClick={handleAboutClick} 
                                className='text-white text-[7px] font-monts bg-[#007D58] p-2 font-[800] rounded-md flex items-center hover:border hover:bg-[#4abb99] tracking-wider transition duration-200 ease-in-out md:text-[12px]'>Learn more...
                                <svg 
                                    className="ml-1 w-3 h-3" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24" 
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        d="M9 5l7 7-7 7">
                                    </path>
                                </svg>
                            </button>
                        </div> 
                    </div>
                    <Footer />
                </div>
            </section>
        </>
    );
}
