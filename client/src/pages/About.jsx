import { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

{/* Components */}
import Header_sm from '../assets/WebComponents/about-header.svg'
import Header_lg from '../components/AboutHeaderLG'
import TEDRed from '../assets/WebComponents/tedx-red.svg'
import KoinTED from '../assets/WebComponents/koinipb-ted.svg'
import Headliner from '../assets/WebComponents/embracing-entropy.svg';
import PoliceLine from '../assets/WebComponents/police-line-long.svg';

{/* Slider Dot */}
import slideDotOne from '../assets/WebComponents/slide-dot-1.svg'
import slideDotTwo from '../assets/WebComponents/slide-dot-2.svg'
import slideDotThree from '../assets/WebComponents/slide-dot-3.svg'

{/* Themes */}
import subthemeOne from '../assets/WebComponents/power-up-theme.svg'
import subthemeTwo from '../assets/WebComponents/traffic-triage-theme.svg'
import subthemeThree from '../assets/WebComponents/revamp-and-roll-theme.svg'

{/* Speakers */}
import BreneBrown from '../assets/PNGComponents/brene-brown.png'
import SimonSinek from '../assets/PNGComponents/simon-sinek.png'
import SamBerns from '../assets/PNGComponents/sam-berns.png'
import AboutHeaderLG from '../components/AboutHeaderLG';

export default function About() {
    {/* Page Navigator */}
    const navigate = useNavigate();
    const handleMainTheme = () => { navigate('/main-theme'); };
    {/* --------------------------- */}
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentTheme, setCurrentTheme] = useState(0);
    
    const slides = [
        { 
            id: 1, 
            content: (
                <motion.div initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5 }} className='flex flex-col items-center justify-around'>
                    <img src={BreneBrown} className='w-full px-5'></img>
                    <div className='font-monts flex flex-col items-start sm:w-[120px] md:w-[160px] lg:w-[200px] xl:w-[240px] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
                        <h4>The power of vulnerability</h4>
                        <h4 className='font-[200]'>by Brene Brown</h4>
                    </div>
                    <img src={slideDotOne} className='w-[24px] sm:w-[30px] md:w-[36px] lg:w-[42px] xl:w-[48px] mt-1 md:hidden lg:hidden xl:hidden'></img>
                </motion.div>
            )
        },
        { 
            id: 2, 
            content: (
                <motion.div initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.7 }} className='flex flex-col items-center justify-around'>
                    <img src={SimonSinek} className='w-full px-5'></img>
                    <div className='font-monts flex flex-col items-start sm:w-[120px] md:w-[160px] lg:w-[200px] xl:w-[240px] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
                        <h4>How great leaders inspire actions</h4>
                        <h4 className='font-[200]'>by Simon Sinek</h4>
                    </div>
                    <img src={slideDotTwo} className='w-[24px] sm:w-[30px] md:w-[36px] lg:w-[42px] xl:w-[48px] mt-1 md:hidden lg:hidden xl:hidden'></img>
                </motion.div>
            )
        },
        { 
            id: 3, 
            content: (
                <motion.div initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.9 }} className='flex flex-col items-center justify-around'>
                    <img src={SamBerns} className='w-full px-5'></img>
                    <div className='font-monts flex flex-col items-start sm:w-[120px] md:w-[160px] lg:w-[200px] xl:w-[240px] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
                        <h4>My philosophy for a happy life</h4>
                        <h4 className='font-[200]'>by Sam Berns</h4>
                    </div>
                    <img src={slideDotThree} className='w-[24px] sm:w-[30px] md:w-[36px] lg:w-[42px] xl:w-[48px] mt-1 md:hidden lg:hidden xl:hidden'></img>
                </motion.div>
            )
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const slidesThemes = [
        { 
            id: 1, 
            content: (
                <motion.div className='flex flex-col items-center justify-around'>
                    <img src={slideDotOne} className='w-[24px] sm:w-[30px] md:w-[36px] lg:w-[42px] xl:w-[48px] mb-1'></img>
                    <h4 className='font-monts font-[400] text-[8px] sm:text-sm md:text-md lg:text-lg xl:text-xl tracking-widest'>1ST SUBTHEME</h4>
                    <img src={subthemeOne} className='w-full '></img>
                </motion.div>
            )
        },
        { 
            id: 2, 
            content: (
                <div className='flex flex-col items-center justify-around'>
                    <img src={slideDotTwo} className='w-[24px] sm:w-[30px] md:w-[36px] lg:w-[42px] xl:w-[48px] mb-1'></img>
                    <h4 className='font-monts font-[400] text-[8px] sm:text-sm md:text-md lg:text-lg xl:text-xl  tracking-widest'>2ND SUBTHEME</h4>
                    <img src={subthemeTwo} className='w-full mt-5'></img>
                </div>
            )
        },
        { 
            id: 3, 
            content: (
                <div className='flex flex-col items-center justify-around'>
                    <img src={slideDotThree} className='w-[24px] sm:w-[30px] md:w-[36px] lg:w-[42px] xl:w-[48px] mb-1'></img>
                    <h4 className='font-monts font-[400] text-[8px] sm:text-sm md:text-md lg:text-lg xl:text-xl tracking-widest'>3RD SUBTHEME</h4>
                    <img src={subthemeThree} className='w-full mt-[-20px]'></img>
                </div>
            )
        },
    ];

    const nextThemeSlide = () => {
        setCurrentTheme((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevThemeSlide = () => {
        setCurrentTheme((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <section className='bg-greenOutlineBG bg-full bg-no-repeat bg-center min-h-screen w-screen overflow-hidden'>
            {/* Section One */}
            <div className='flex flex-col  items-center pt-[70px]'>
                <div className='w-full p-5 pt-9 bg-no-repeat flex flex-col justify-center items-center gap-y-6'>
                    <motion.img initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.9 }} src={Header_sm}  className='bg-speakersNameBG bg-top bg-contain w-full px-5 block sm:block lg:hidden'></motion.img>
                    <div className='hidden w-screen lg:flex justify-center'>
                      <AboutHeaderLG />
                    </div>
                    <motion.p 
                      initial={{ opacity:0, y:-20 }}
                      whileInView={{ opacity:1, y:0 }}
                      transition={{ duration:.8 }}
                      className='md:w-3/4 text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-justify justify-center font-monts font-[200]'>
                        TED is a nonprofit, nonpartisan organization dedicated 
                        to discovering, debating and spreading ideas that spark 
                        conversation, deepen understanding and drive meaningful 
                        change. Our organization is devoted to curiosity, reason, 
                        wonder and the pursuit of knowledge — without an agenda. 
                        We welcome people from every discipline and culture who 
                        seek a deeper understanding of the world and connection 
                        with others, and we invite everyone to engage with ideas 
                        and activate them in your community.
                    </motion.p>
                </div>
            </div>

            {/* Section Two (Carousel) */}
            <div className="relative w-full md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto overflow-hidden">
                    <div className="hidden gap-10 md:gap-[1px] lg:gap-[1px] md:grid lg:grid md:grid-cols-3 lg:grid-cols-3 md:px-10 md:pb-10 lg:px-[5px] ">
                        {slides.map((slide, index) => (
                            <div key={slide.id} className="w-full flex-shrink-0">
                                <div className="p-4 text-white">
                                    {slide.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex transition-transform duration-500 md:hidden lg:hidden" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {slides.map((slide, index) => (
                            <div key={slide.id} className="w-full flex-shrink-0">
                                <div className="p-5 text-white">
                                    {slide.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full md:hidden lg:hidden">
                        &#10094;
                    </button>
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full md:hidden lg:hidden">
                        &#10095;
                    </button>
            </div>

            {/* Section Three */}
            <div className='text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-justify font-monts font-[200] p-5 pt-1 bg-no-repeat justify-center gap-y-6 flex flex-col items-center'>
                <motion.p initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5 }} className='md:w-3/4'>
                TED began in 1984 as a conference where Technology, Entertainment and Design converged, 
                but today it spans a multitude of worldwide communities and initiatives exploring 
                everything from science and business to education, arts and global issues. 
                In addition to the TED Talks curated from our annual conferences and published 
                on TED.com, we produce 
                <span><a href='https://audiocollective.ted.com' className='font-[400] hover:cursor-pointer'> original podcasts</a></span>, 
                <span><a href='https://www.ted.com/series' className='font-[400] hover:cursor-pointer'> short video series</a></span>, 
                <span><a href='https://ed.ted.com' className='font-[400] hover:cursor-pointer'> animated educational lessons (TED-Ed)</a></span>, 
                and TV programs that are translated into more than 100 languages 
                and distributed via partnerships around the world. Each year, thousands of 
                independently run 
                <span><a href='https://www.ted.com/about/programs-initiatives/tedx-program' className='font-[400] hover:cursor-pointer'> TEDx events </a></span> 
                bring people together to share ideas and bridge 
                divides in communities on every continent. Through the 
                <span><a href='https://www.audaciousproject.org' className='font-[400] hover:cursor-pointer'> Audacious Project</a></span>, 
                TED has helped catalyze more than $3 billion in funding for projects that 
                seek to make the world more beautiful, sustainable and just. In 2020, 
                TED launched 
                <span><a href='https://countdown.ted.com' className='font-[400] hover:cursor-pointer'> Countdown</a></span>, 
                an initiative to accelerate solutions to the climate 
                crisis and mobilize a movement for a net-zero future, and in 2023 TED launched 
                <span><a href='https://www.ted.com/about/programs-initiatives/teddemocracy' className='font-[400] hover:cursor-pointer'> TED Democracy </a></span> 
                to spark a new kind of conversation focused on realistic pathways 
                towards a more vibrant and equitable future. View a full list of 
                <span><a href='https://www.ted.com/about/programs-initiatives' className='font-[400] hover:cursor-pointer'> TED&apos;s many programs and initiatives</a></span>.
                </motion.p>
                <motion.p initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5 }} className='md:w-3/4'>
                    Follow TED on <a href='https://www.facebook.com/TED' className='underline decoration-from-font hover:cursor-pointer'>Facebook</a>, <a href='https://www.instagram.com/ted' className='underline decoration-from-font hover:cursor-pointer'>Instagram</a>, <a href='https://www.linkedin.com/company/ted-conferences' className='underline decoration-from-font hover:cursor-pointer'>LinkedIn</a>, <a href='https://www.tiktok.com/@tedtoks?lang=en' className='underline decoration-from-font hover:cursor-pointer'>TikTok</a>, and <a href='https://x.com/TEDTalks' className='underline decoration-from-font hover:cursor-pointer'>X</a>.
                </motion.p>
            </div>

            {/* Section Four */}
            <div className='flex flex-col w-full p-5 items-center justify-center text-white gap-y-5 '>
                <motion.img initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5 }} src={TEDRed} className='w-full md:w-3/4'></motion.img>
                <motion.h1 initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5 }} className='md:w-3/4 text-[20px] text-justify md:text-center font-[700] sm:text-[20px] md:text-[32px] lg:text-[44px] xl:text-[59px]'>x = independently organized event.</motion.h1>
                <motion.p initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5 }} className='md:w-3/4 text-xs text-justify font-monts font-[200] sm:text-sm md:text-md lg:text-lg xl:text-xl'>
                    In the spirit of discovering and spreading ideas, 
                    TEDx is a program of local, self-organized events 
                    that bring people together to share a TED-like experience.
                    At a TEDx event, TED Talks video and live speakers combine 
                    to spark deep discussion and connection. These local, 
                    self-organized events are branded TEDx, where x = independently 
                    organized TED event. The TED Conference provides general guidance 
                    for the TEDx program, but individual TEDx events are 
                    self-organized. (Subject to certain rules and regulations.)
                </motion.p>
            </div>

            {/* Section Five */}
            <div className='flex flex-col w-full items-center justify-center text-white sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px]'>
                <motion.img initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5 }} src={KoinTED} className='w-full md:w-3/4 px-5 -mb-[29px] sm:-mb-[42px] md:-mb-[56px] lg:-mb-[77px] xl:-mb-[109px]'></motion.img>
                <motion.img initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:.3 }} src={PoliceLine} className='min-w-[2000px] -mt-10 -mb-[50px] z-10 xl:min-w-[200vw] xl:-mb-[100px]'></motion.img>
                <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:.5 }} onClick={handleMainTheme} className='flex flex-col items-center justify-center py-[50px] w-full p-5 bg-redThemeBG bg-center bg-no-repeat bg-cover lg:h-[50rem]'>
                    <motion.h2 initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5 }} className='font-monts tracking-widest font-[200]'>2024 TEDXIPB MAIN THEME</motion.h2>
                    <motion.div initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5 }} className='flex flex-col items-center pt-8 gap-y-3'>
                        <h2 className='font-[500] italic text-[15px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px]'>u(r) turn,</h2>
                        <img src={Headliner} className='w-[290px] sm:w-[420px] md:w-[500px] lg:w-[520px] xl:w-[600px]'></img>
                    </motion.div>
                </motion.div>
                <motion.img initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:.3 }} src={PoliceLine} className='min-w-[2000px] -mt-[50px] -mb-[50px] z-10 xl:min-w-[200vw] xl:-mt-[100px]'></motion.img>
            </div>

            {/* Section Six */}
            <motion.div initial={{ opacity:0, y:-25 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5 }} className="relative w-full md:w-3/4 max-w-3xl mx-auto overflow-hidden mt-3 sm:text-sm md:text-md lg:text-lg xl:text-xl">
                    <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentTheme * 100}%)` }}>
                        {slidesThemes.map((slide, index) => (
                            <div key={slide.id} className="w-full flex-shrink-0">
                                <div className="py-5 px-10 text-white sm:text-sm md:text-md lg:text-lg xl:text-xl">
                                    {slide.content}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={prevThemeSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
                        &#10094;
                    </button>
                    <button onClick={nextThemeSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
                        &#10095;
                    </button>
            </motion.div>
            <Footer />
        </section>
    );
}