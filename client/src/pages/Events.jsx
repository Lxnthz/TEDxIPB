import Footer from '../components/Footer';
import { motion } from 'framer-motion';

import DocOne from '../assets/PNGComponents/doc1.png';
import DocTwo from '../assets/PNGComponents/doc2.png';
import DocThree from '../assets/PNGComponents/doc3.png';
import DocFour from '../assets/PNGComponents/doc4.png';

export default function Events() {
  const slides = [
    {
      id: 1,
      content: (
        <motion.div
            className='flex flex-col'>
            <img src={DocOne} className='pb-2 object-contain'></img>
            <motion.h3 className='font-monts text-white font-[700] text-[11px]'>Theo Derick</motion.h3>
            <motion.p className='font-monts text-white font-[200] text-[10px]'>Breaking Barrier, Building Bridges: Collaborating to Close Generational Financial Divide</motion.p>
        </motion.div>
      )
    },
    {
      id: 2,
      content: (
        <motion.div
            className='flex flex-col'>
            <img src={DocTwo} className='pb-2'></img>
            <motion.h3 className='font-monts text-white font-[700] text-[11px]'>Nurwahid Dimas Saputro</motion.h3>
            <motion.p className='font-monts text-white font-[200] text-[10px]'>Motivation is Overrated, Consistency is Underrated</motion.p>
        </motion.div>
      )
    },
    {
      id: 3,
      content: (
        <motion.div
            className='flex flex-col'>
            <img src={DocThree} className='pb-2'></img>
            <motion.h3 className='font-monts text-white font-[700] text-[11px]'>Aland Dinda Pradana</motion.h3>
            <motion.p className='font-monts text-white font-[200] text-[10px]'>The Power of Belief: Self Development and Personal Branding</motion.p>
        </motion.div>
      )
    },
    {
      id: 4,
      content: (
        <motion.div
            className='flex flex-col'>
            <img src={DocFour} className='pb-2'></img>
            <motion.h3 className='font-monts text-white font-[700] text-[11px]'>Try Luthfi Nugroho</motion.h3>
            <motion.p className='font-monts text-white font-[200] text-[10px]'>How One Vote Shapes Our Collective Future</motion.p>
        </motion.div>
      )
    }
  ]

  return (
    <section className="bg-pastBackground bg-cover bg-no-repeat bg-center w-[100%] pt-[85px] md:pt-[10rem] overflow-x-hidden">
      <section className='bg-pastCommittee bg-contain bg-no-repeat bg-bottom md:min-h-screen overflow-hidden'>
        <motion.div className='md:flex justify-center xl:gap-x-12 xl:px-[10rem]'>
          {/* First Section */}
          <motion.div className="flex flex-col items-center justify-between md:pl-10">
            <div className="font-monts tracking-widest font-[300] text-white xl:text-[24px]">
              <motion.h3 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.8, ease:'easeInOut' }}>2023 TEDXIPB MAIN THEME</motion.h3>
            </div>
            <div className="flex flex-col mt-4 items-center justify-center">
              <motion.h1 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.8, ease:'easeInOut', delay:.2 }} className="text-white flex flex-col items-center text-[50px] font-arimo xl:text-[6rem]">
                <span>WITHIN &</span>
                <span className="mt-[-20px] font-[700]">BEYOND</span>
              </motion.h1>
            </div>
            <div className="text-white flex flex-col font-arimo items-center mt-2">
              <motion.p initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.8, ease:'easeInOut', delay:.4 }} className="text-md font-bold xl:text-xl">November 12th, 2023</motion.p>
              <motion.p initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.8, ease:'easeInOut', delay:.5 }} className='xl:text-xl'>Andi Hakin Nasoetion Auditorium</motion.p>
            </div>
          </motion.div>

          {/* Second Section */}
          <motion.div className="flex flex-col items-center justify-between px-7 mt-10 md:mt-0">
            <div className="flex justify-center items-center object-center max-w-[320px] xl:max-w-[500px]">
              <motion.p initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.8, ease:'easeInOut', delay:.7 }} className="font-monts text-white text-xs text-justify xl:text-lg">
                In a world that constantly evolves, 
                where boundaries blur and possibilities expand, 
                it is imperative that we embark on a journey of 
                self-discovery, exploration, and transformation. 
                “Within and Beyond” encapsulates the essence of our event, 
                urging us to look both inward and outward to 
                unlock the limitless potential that resides 
                within us and our collective humanity.
              </motion.p>
            </div>

            <div className="flex justify-between mt-6 text-[13px] max-w-[320px] w-full xl:max-w-[500px]">
              <div>
                <motion.h1 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.8, ease:'easeInOut', delay:.8 }} className="text-white font-arimo flex flex-col items-start xl:text-xl">
                  <span className="-mb-1">WITHIN</span>
                  <span className="font-[700]">MYSELF</span>
                </motion.h1>
              </div>
              <div>
                <motion.h1 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.8, ease:'easeInOut', delay:.9 }} className="text-white font-arimo flex flex-col items-start xl:text-xl">
                  <span className="-mb-1">WITHIN</span>
                  <span className="font-[700]">OURSELVES</span>
                </motion.h1>
              </div>
              <div>
                <motion.h1 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.8, ease:'easeInOut', delay:1 }} className="text-white font-arimo flex flex-col items-start xl:text-xl">
                  <span className="-mb-1">BEYOND</span>
                  <span className="font-[700]">OURSELVES</span>
                </motion.h1>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* Third Section */}
        <motion.div
          className='flex flex-col items-center px-7 mt-[2rem] pb-[8rem] md:mt-10 justify-center'>
          <motion.h2 initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.8, ease:'easeInOut', delay:.4 }}
            className='font-monts tracking-widest font-[300] text-white mb-5'>DOCUMENTATION
          </motion.h2>
          <motion.div initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.8, ease:'easeInOut', delay:.5 }} className="grid grid-cols-1 gap-6 md:grid-cols-2 md:px-12 md:pb-10 lg:px-[10rem] xl:grid-cols-4">
            {slides.map(slide => (
              <div key={slide.id}>
                {slide.content}
              </div>
            ))}
          </motion.div>
        </motion.div>
      
        <div className='min-w-full px-7 py-2 xl:pt-[12rem]'>
          <Footer />
        </div>
      </section>
    </section>
  );
}
