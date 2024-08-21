import { useState } from 'react';
import Footer from '../components/Footer';

{/* Components */}
import Header from '../assets/WebComponents/about-header.svg'
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

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentTheme, setCurrentTheme] = useState(0);
    
    const slides = [
        { 
            id: 1, 
            content: (
                <div className='flex flex-col items-center justify-around'>
                    <img src={BreneBrown} className='w-full px-5'></img>
                    <div className='font-monts flex flex-col items-start w-[240px] text-xs'>
                        <h4>The power of vulnerability</h4>
                        <h4 className='font-[200]'>by Brene Brown</h4>
                    </div>
                    <img src={slideDotOne} className='w-[24px] mt-1'></img>
                </div>
            )
        },
        { 
            id: 2, 
            content: (
                <div className='flex flex-col items-center justify-around text-xs'>
                    <img src={SimonSinek} className='w-full px-5'></img>
                    <div className='font-monts flex flex-col items-start w-[240px]'>
                        <h4>How great leaders inspire actions</h4>
                        <h4 className='font-[200]'>by Simon Sinek</h4>
                    </div>
                    <img src={slideDotTwo} className='w-[24px] mt-1'></img>
                </div>
            )
        },
        { 
            id: 3, 
            content: (
                <div className='flex flex-col items-center justify-around text-xs'>
                    <img src={SimonSinek} className='w-full px-5'></img>
                    <div className='font-monts flex flex-col items-start w-[240px]'>
                        <h4>How great leaders inspire actions</h4>
                        <h4 className='font-[200]'>by Simon Sinek</h4>
                    </div>
                    <img src={slideDotThree} className='w-[24px] mt-1'></img>
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

    const slidesThemes = [
        { 
            id: 1, 
            content: (
                <div className='flex flex-col items-center justify-around'>
                    <img src={slideDotOne} className='w-[24px] mb-1'></img>
                    <h4 className='font-monts font-[400] text-[8px] tracking-widest'>1ST SUBTHEME</h4>
                    <img src={subthemeOne} className='w-full '></img>
                </div>
            )
        },
        { 
            id: 2, 
            content: (
                <div className='flex flex-col items-center justify-around'>
                    <img src={slideDotTwo} className='w-[24px] mb-1'></img>
                    <h4 className='font-monts font-[400] text-[8px] tracking-widest'>2ND SUBTHEME</h4>
                    <img src={subthemeTwo} className='w-full mt-5'></img>
                </div>
            )
        },
        { 
            id: 3, 
            content: (
                <div className='flex flex-col items-center justify-around'>
                    <img src={slideDotThree} className='w-[24px] mb-1'></img>
                    <h4 className='font-monts font-[400] text-[8px] tracking-widest'>3RD SUBTHEME</h4>
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
        <section className='bg-greenOutlineBG bg-cover bg-no-repeat bg-center min-h-screen w-screen overflow-hidden'>
            {/* Section One */}
            <div className='flex flex-col  items-center pt-[70px]'>
                <div className='bg-speakersNameBG bg-top bg-contain w-full p-5 pt-9 bg-no-repeat flex flex-col justify-center items-center gap-y-6'>
                    <img src={Header}  className='w-full px-5'></img>
                    <p className='text-white text-xs text-justify font-monts font-[200]'>
                        TED is a nonprofit, nonpartisan organization dedicated 
                        to discovering, debating and spreading ideas that spark 
                        conversation, deepen understanding and drive meaningful 
                        change. Our organization is devoted to curiosity, reason, 
                        wonder and the pursuit of knowledge — without an agenda. 
                        We welcome people from every discipline and culture who 
                        seek a deeper understanding of the world and connection 
                        with others, and we invite everyone to engage with ideas 
                        and activate them in your community.
                    </p>
                </div>
            </div>

            {/* Section Two (Carousel) */}
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

            {/* Section Three */}
            <div className='text-white text-xs text-justify font-monts font-[200] p-5 pt-1 bg-no-repeat justify-center gap-y-6 flex flex-col items-center'>
                <p>
                TED began in 1984 as a conference where Technology, Entertainment and Design converged, 
                but today it spans a multitude of worldwide communities and initiatives exploring 
                everything from science and business to education, arts and global issues. 
                In addition to the TED Talks curated from our annual conferences and published 
                on TED.com, we produce 
                <span><a href='' className='font-[400] hover:cursor-pointer'> original podcasts</a></span>, 
                <span><a href='' className='font-[400] hover:cursor-pointer'> short video series</a></span>, 
                <span><a href='' className='font-[400] hover:cursor-pointer'> animated educational lessons (TED-Ed)</a></span>, 
                and TV programs that are translated into more than 100 languages 
                and distributed via partnerships around the world. Each year, thousands of 
                independently run 
                <span><a href='' className='font-[400] hover:cursor-pointer'> TEDx events</a></span> 
                bring people together to share ideas and bridge 
                divides in communities on every continent. Through the 
                <span><a href='' className='font-[400] hover:cursor-pointer'> Audacious Project</a></span>, 
                TED has helped catalyze more than $3 billion in funding for projects that 
                seek to make the world more beautiful, sustainable and just. In 2020, 
                TED launched 
                <span><a href='' className='font-[400] hover:cursor-pointer'> Countdown</a></span>, 
                an initiative to accelerate solutions to the climate 
                crisis and mobilize a movement for a net-zero future, and in 2023 TED launched 
                <span><a href='' className='font-[400] hover:cursor-pointer'> TED Democracy</a></span> 
                to spark a new kind of conversation focused on realistic pathways 
                towards a more vibrant and equitable future. View a full list of 
                <span><a href='' className='font-[400] hover:cursor-pointer'> TED&apos;s many programs and initiatives</a></span>.
                </p>
                <p>
                    Follow TED on <a href='' className='underline decoration-from-font hover:cursor-pointer'>Facebook</a>, <a href='' className='underline decoration-from-font hover:cursor-pointer'>Instagram</a>, <a href='' className='underline decoration-from-font hover:cursor-pointer'>LinkedIn</a>, <a href='' className='underline decoration-from-font hover:cursor-pointer'>TikTok</a>, and <a href='' className='underline decoration-from-font hover:cursor-pointer'>X</a>.
                </p>
            </div>

            {/* Section Four */}
            <div className='flex flex-col p-5 items-center justify-center text-white w-full gap-y-5'>
                <img src={TEDRed} className='w-full'></img>
                <h1 className='text-[30px] text-justify font-[700]'>x = independently organized event.</h1>
                <p className='text-xs text-justify font-monts font-[200]'>
                    In the spirit of discovering and spreading ideas, 
                    TEDx is a program of local, self-organized events 
                    that bring people together to share a TED-like experience.
                    At a TEDx event, TED Talks video and live speakers combine 
                    to spark deep discussion and connection. These local, 
                    self-organized events are branded TEDx, where x = independently 
                    organized TED event. The TED Conference provides general guidance 
                    for the TEDx program, but individual TEDx events are 
                    self-organized. (Subject to certain rules and regulations.)
                </p>
            </div>

            {/* Section Five */}
            <div className='flex flex-col w-full items-center justify-center text-white'>
                <img src={KoinTED} className='w-full px-5'></img>
                <img src={PoliceLine} className='min-w-[2000px] -mt-10 -mb-[50px] z-10'></img>
                <div className='flex flex-col items-center justify-center py-[50px] w-full p-5 bg-redThemeBG bg-center bg-no-repeat bg-cover'>
                    <h2 className='font-monts tracking-widest font-[200]'>2024 TEDXIPB MAIN THEME</h2>
                    <div className='flex flex-col items-center pt-8 gap-y-3'>
                        <h2 className='font-[500] italic'>u(r) turn,</h2>
                        <img src={Headliner}></img>
                    </div>
                </div>
                <img src={PoliceLine} className='min-w-[2000px] -mt-[50px] -mb-[50px] z-10'></img>
            </div>

            {/* Section Six */}
            <div className="relative w-full max-w-3xl mx-auto overflow-hidden mt-3">
                    <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentTheme * 100}%)` }}>
                        {slidesThemes.map((slide, index) => (
                            <div key={slide.id} className="w-full flex-shrink-0">
                                <div className="py-5 px-10 text-white">
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
                    <Footer />
            </div>
        </section>
    );
}