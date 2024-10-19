import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

{/* Slider Dot */}
import slideDotOne from '../../assets/WebComponents/slide-dot-1.svg'

{/* Themes */}
import subthemeOne from '../../assets/WebComponents/power-up-theme.svg'

export default function SubthemeOne() {
  {/* Page Navigator */}
  const navigate = useNavigate();
  const handleSubthemeTwo = () => { navigate('/subtheme-two'); };
  {/* --------------------------- */}
  return (
    <section className='bg-greenOutlineBG bg-full bg-no-repeat bg-center overflow-hidden'>
      <div className='flex flex-col items-center justify-around pt-[85px] px-7'>
        <img src={slideDotOne} className='w-[24px] mb-1'></img>
        <h4 className='font-monts text-white font-[400] text-[14px] tracking-widest'>1ST SUBTHEME</h4>
        <img src={subthemeOne} className='w-full'></img>
      </div>
      <div className='mt-10 px-7'>
        <p className='text-white font-[200] font-monts text-justify text-xs'>
        Power up into the parallels between understanding your vehicle&apos;s engine and mastering the engine of life itself. Learn how to ignite your passions, fuel your ambitions, and harness your inner power to propel yourself towards success. Discover the key principles that drive both engines and lives, and unlock the secrets to maximising your potential on the journey of life
        </p>
      </div>
      <div className='bg-intersectionFade bg-center bg-cover bg-no-repeat px-7 mt-12 h-[340px] flex flex-col justify-between'>
        <div className='flex w-screen items-end'>
          <button 
            onClick={handleSubthemeTwo}
            className='align-middle text-white text-[7px] font-monts bg-[#007D58] p-2 font-[800] rounded-md flex items-center hover:border hover:bg-[#4abb99] tracking-wider transition duration-200 ease-in-out'>Subtheme 2
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
        <Footer />
      </div>
    </section>
  );
}