import Headliner from '../../components/MainThemeLogo';
import Quote from '../../assets/WebComponents/oppenheimer-and-daniel.svg'
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

export default function MainTheme() {
  return (
    <section>
      <section className='bg-greenOutlineBG bg-full bg-no-repeat bg-center min-h-screen h-full lg:hidden'>
        {/* Hero */}
        <div className="bg-redBackgroundFade px-3 pt-[85px] pb-[50px] flex flex-col bg-full bg-no-repeat md:h-[100vh] md:items-center md:justify-center">
          <div className='flex flex-col justify-center items-center'>
            <div className="font-monts text-white mx-2">
              <h3 className="flex flex-col text-center tracking-widest font-[400] md:text-2xl">2024 TEDXIPB MAIN THEME</h3>
            </div>

            <div className='flex flex-col justify-center items-center mt-3 gap-4 p-5 '>
                <Headliner />
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-col px-7 gap-y-6'>
            {/* Paragraph One Section */}
            <div className='flex text-justify'>
              <p className='text-white font-monts text-[11px] font-[300] md:text-[15px]'>
                Our world is constantly in motion. Change is inevitable, and sometimes it can feel overwhelming. TEDxIPB&apos;s theme, &quot;U(r) Turn: Embracing Entropy,&quot; acknowledges this ever-shifting landscape. The play on the word &quot;U-turn&quot; signifies the need for a course correction, a chance to re-evaluate our approach in the face of unexpected circumstances. By &quot;embracing entropy,&quot; we encourage a paradigm shift towards accepting and even harnessing change. This theme invites us to explore how we can navigate disruption, foster resilience, and discover new possibilities in the midst of constant transformation.
              </p>
            </div>
            <motion.div className='flex justify-center'>
              <img src={Quote} className='w-full h-full md:w-[30rem]'></img>
            </motion.div>
            {/* Paragraph Two Section */}
            <div className='flex flex-col text-justify justify-start'>
              <p className='text-white font-monts text-[11px] font-[300] md:text-[15px]'> 
                J Robert Oppenheimer refers the terms “entropy” while discussing atomic bomb, as an atomic bomb works by splitting atoms (fission) in a chain reaction, releasing enormous amounts of energy. This process creates a highly chaotic and disorganized state with a significant increase in entropy. Interestingly, Canadian singer-songwriter Daniel Caesar quoted the famous line above as the intro of the opening track of his 2019 album, also titled “ENTROPY”.        
              </p>
            </div>    
          </div>
        </div>

        <div className='px-4 py-5'>
          <Footer />
        </div> 
      </section>

      <motion.section className='hidden lg:block bg-black h-full'>
        <motion.section className='bg-redBackgroundFade h- bg-center bg-no-repeat bg-cover pt-[10rem] flex flex-col items-center justify-center'>
          <motion.div className='flex flex-col items-center justify-center gap-y-5'>
            <motion.h3 className='text-white font-monts tracking-widest text-lg'>2024 TEDxIPB MAIN THEME</motion.h3>
            <Headliner />
          </motion.div>
          <motion.div className='flex gap-5 justify-between px-10 mt-[10rem] items-top'>
            <motion.div className='w-full flex flex-col gap-y-5 max-w-[40rem]'>
              <motion.p 
                initial={{ opacity:0, y:-20 }}
                whileInView={{ opacity:1, y:0}}
                transition={{ duration:.9, ease:"easeInOut" }}
                className='text-white font-monts text-justify text-[1.2rem]'>
                Our world is constantly in motion. Change is inevitable, 
                and sometimes it can feel overwhelming. 
                TEDxIPB&apos;s theme, &quot;U(r) Turn: Embracing Entropy,&quot; acknowledges this ever-shifting landscape. 
                The play on the word &quot;U-turn&quot; signifies the need for a course correction, a chance to re-evaluate our approach in the face of unexpected 
                circumstances. By &quot;embracing entropy,&quot; we encourage a paradigm shift towards accepting and even harnessing change. This theme invites 
                us to explore how we can navigate disruption, foster resilience, and discover new possibilities in the midst of constant transformation.
              </motion.p>
              <motion.p 
                initial={{ opacity:0, y:-20 }}
                whileInView={{ opacity:1, y:0}}
                transition={{ duration:.9, ease:"easeInOut" }}
                className='text-white font-monts text-justify text-[1.2rem]'>
                J Robert Oppenheimer refers the terms “entropy” while discussing atomic bomb, 
                as an atomic bomb works by splitting atoms (fission) in a chain reaction, releasing enormous amounts of energy. 
                This process creates a highly chaotic and disorganized state with a significant increase in entropy. 
                Interestingly, Canadian singer-songwriter Daniel Caesar quoted the famous line above as the intro of the opening track of his 2019 album, 
                also titled “ENTROPY”.
              </motion.p>
            </motion.div>
            <motion.div>
              <motion.img 
                src={Quote} 
                className='w-[40rem]'
                initial={{ opacity:0, x:-50 }}
                whileInView={{ opacity:1, x:0}}
                transition={{ duration:.9, ease:"easeInOut" }}>  
              </motion.img>
            </motion.div>            
          </motion.div>
          <motion.div className='w-full'>
            <Footer />
          </motion.div>
        </motion.section>
      </motion.section>
    </section>
  );
}