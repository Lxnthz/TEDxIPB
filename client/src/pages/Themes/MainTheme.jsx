import Headliner from '../../assets/WebComponents/maintheme-big.svg';
import Quote from '../../assets/WebComponents/oppenheimer-and-daniel.svg'
import Footer from '../../components/Footer';

export default function MainTheme() {
  return (
    <section>
      <section className='bg-greenOutlineBG bg-full bg-no-repeat bg-center min-h-screen'>
        {/* Hero */}
        <div className="bg-redBackgroundFade px-3 pt-[85px] pb-[50px] flex flex-col bg-full bg-no-repeat md:h-[100vh] md:items-center md:justify-center">
          <div className="font-monts text-white mx-2">
            <h3 className="flex flex-col text-center tracking-widest font-[400] md:text-2xl">2024 TEDXIPB MAIN THEME</h3>
          </div>

          <div className='flex flex-col justify-center items-center mt-3 gap-4 p-5 '>
              <img src={Headliner} className='w-[290px] md:w-[600px]' alt="Headliner" />
          </div>
        </div>
        <div className='pb-5 lg:px-10 xl:px-[10rem]'>
          {/* Paragraph One Section */}
          <div className='flex text-justify px-8'>
            <p className='text-white font-monts text-[11px] font-[300] md:text-[15px]'>
              Our world is constantly in motion. Change is inevitable, and sometimes it can feel overwhelming. TEDxIPB&apos;s theme, &quot;U(r) Turn: Embracing Entropy,&quot; acknowledges this ever-shifting landscape. The play on the word &quot;U-turn&quot; signifies the need for a course correction, a chance to re-evaluate our approach in the face of unexpected circumstances. By &quot;embracing entropy,&quot; we encourage a paradigm shift towards accepting and even harnessing change. This theme invites us to explore how we can navigate disruption, foster resilience, and discover new possibilities in the midst of constant transformation.
            </p>
          </div>

          {/* Oppenheimer and Daniel Caesar */}
          <div className='px-8 flex justify-center items-center my-7'>
            <img src={Quote} className='w-full'></img>
          </div>

          {/* Paragraph Two Section */}
          <div className='flex flex-col text-justify justify-start px-4'>
            <p className='text-white font-monts text-[11px] font-[300] px-4 md:px-6 md:mb-10 md:text-[15px]'> 
              J Robert Oppenheimer refers the terms “entropy” while discussing atomic bomb, as an atomic bomb works by splitting atoms (fission) in a chain reaction, releasing enormous amounts of energy. This process creates a highly chaotic and disorganized state with a significant increase in entropy. Interestingly, Canadian singer-songwriter Daniel Caesar quoted the famous line above as the intro of the opening track of his 2019 album, also titled “ENTROPY”.        
            </p>
          </div>
          <div className='px-4'>
              <Footer />
          </div>     
        </div>
      </section>
    </section>
  );
}