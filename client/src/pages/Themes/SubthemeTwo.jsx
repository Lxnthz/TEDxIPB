import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

{/* Slider Dot */}
import slideDotTwo from '../../assets/WebComponents/slide-dot-2.svg'

{/* Themes */}
import subthemeTwo from '../../assets/WebComponents/traffic-triage-theme.svg'

export default function SubthemeTwo() {
  {/* Page Navigator */}
  const navigate = useNavigate();
  const handleSubthemeOne = () => { navigate('/subtheme-one'); };
  const handleSubthemeThree = () => { navigate('/subtheme-three'); };
  {/* --------------------------- */}

  return (
    <section className='bg-greenOutlineBG bg-full bg-no-repeat bg-center overflow-hidden'>
      <div className='flex flex-col items-center justify-around pt-[85px] px-7'>
        <motion.img initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5, ease:"easeInOut" }} src={slideDotTwo} className='w-[24px] mb-1'></motion.img>
        <motion.h4 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5, ease:"easeInOut" }} className='font-monts text-white font-[400] text-[14px] tracking-widest'>2ND SUBTHEME</motion.h4>
        <motion.img initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5, ease:"easeInOut" }} src={subthemeTwo} className='w-full max-h-[200px] h-full'></motion.img>
      </div>
      <div className='mt-10 px-7'>
        <motion.p initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5, ease:"easeInOut", delay:.5 }} className='text-white font-[200] font-monts text-justify text-xs'>
          The art of navigating life&apos;s inevitable traffic and roadblocks with resilience and grace. Explore strategies for managing stress, overcoming setbacks, and finding your way forward amidst life&apos;s challenges. Gain insights into building mental fortitude, adapting to changing circumstances, and maintaining momentum on your journey toward personal and professional fulfilment.        </motion.p>
      </div>
      <div className='bg-trafficFade bg-center bg-cover bg-no-repeat px-7 mt-12 h-[370px] flex flex-col justify-between'>
        <div className='flex justify-between'>
          <motion.button
            initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:.5, ease:"easeInOut", delay:.6 }} 
            onClick={handleSubthemeOne}
            className='align-middle text-white text-[7px] font-monts bg-[#007D58] p-2 font-[800] rounded-md flex items-center hover:border hover:bg-[#4abb99] tracking-wider transition duration-200 ease-in-out'>
            <svg 
              className="align-middle scale-[-1] mr-1 w-3 h-3" 
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
            Subtheme 1
          </motion.button>
          <motion.button  
            initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:.5, ease:"easeInOut", delay:.6 }} 
            onClick={handleSubthemeThree}
            className='text-white text-[7px] font-monts bg-[#007D58] p-2 font-[800] rounded-md flex items-center hover:border hover:bg-[#4abb99] tracking-wider transition duration-200 ease-in-out'>Subtheme 3
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
          </motion.button>
        </div>
        <Footer />
      </div>
    </section>
  );
}