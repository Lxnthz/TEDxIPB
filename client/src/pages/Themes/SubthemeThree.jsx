import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

{/* Slider Dot */}
import slideDotThree from '../../assets/WebComponents/slide-dot-3.svg'

{/* Themes */}
import subthemeThree from '../../assets/WebComponents/revamp-and-roll-theme.svg'

export default function SubthemeThree() {
  {/* Page Navigator */}
  const navigate = useNavigate();
  const handleSubthemeTwo = () => { navigate('/subtheme-Two'); };
  {/* --------------------------- */}
  return (
    <section className='bg-greenOutlineBG bg-full bg-no-repeat bg-center overflow-hidden'>
      <div className='flex flex-col items-center justify-around pt-[85px] px-7'>
        <motion.img initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5, ease:"easeInOut" }} src={slideDotThree} className='w-[24px] mb-1'></motion.img>
        <motion.h4 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5, ease:"easeInOut" }} className='font-monts text-white font-[400] text-[14px] tracking-widest'>3RD SUBTHEME</motion.h4>
        <motion.img initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5, ease:"easeInOut" }} src={subthemeThree} className='w-full -mt-5'></motion.img>
      </div>
      <div className='mt-10 px-7'>
        <motion.p initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5, ease:"easeInOut", delay:.5 }} className='text-white font-[200] font-monts text-justify text-xs'>
        Explore how embracing change, learning from mistakes, and celebrating successes can propel us forward on the journey of life. Discover the transformative power of resilience, adaptability, and continuous growth as we reinvent ourselves and navigate the twists and turns of our personal and professional paths.</motion.p>
      </div>
      <div className='bg-intersectionFade bg-center bg-cover bg-no-repeat px-7 mt-12 h-[340px] flex flex-col justify-between'>
        <div className=''>
          <motion.button 
            initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:.5, ease:"easeInOut", delay:.6 }}
            onClick={handleSubthemeTwo}
            className='align-middle text-white text-[7px] font-monts bg-[#007D58] p-2 font-[800] rounded-md flex items-center hover:border hover:bg-[#4abb99] tracking-wider transition duration-200 ease-in-out justify-between gap-x-1'>
            <svg 
              className="w-3 h-3 scale-[-1] flex items-center justify-center" 
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
            Subtheme 2
          </motion.button>
        </div>
        <Footer />
      </div>
    </section>
  );
}