import pastEventDoc from '../assets/WebComponents/past-events.svg';
import Footer from '../components/Footer';

export default function Events() {
  return (
    <section className="bg-greenOutlineBG bg-cover bg-no-repeat bg-center min-h-screen w-screen pt-[85px]">
      {/* First Section */}
      <div className="flex flex-col items-center justify-between">
        <div className="font-monts tracking-widest font-[300] text-white">
          <h3>2023 TEDXIPB MAIN THEME</h3>
        </div>
        <div className="flex flex-col mt-4">
          <h1 className="text-white flex flex-col items-center text-[50px] font-arimo">
            <span>WITHIN &</span>
            <span className="mt-[-20px] font-[700]">BEYOND</span>
          </h1>
        </div>
        <div className="text-white flex flex-col font-arimo items-center mt-2">
          <p className="text-md font-bold">November 12th, 2023</p>
          <p>Andi Hakin Nasoetion Auditorium</p>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col items-center justify-between px-7 mt-10">
        <div className="flex justify-center items-center object-center max-w-[320px]">
          <p className="font-monts text-white text-xs text-justify">
            In a world that constantly evolves, 
            where boundaries blur and possibilities expand, 
            it is imperative that we embark on a journey of 
            self-discovery, exploration, and transformation. 
            “Within and Beyond” encapsulates the essence of our event, 
            urging us to look both inward and outward to 
            unlock the limitless potential that resides 
            within us and our collective humanity.
          </p>
        </div>

        <div className="flex justify-between mt-6 text-[13px] max-w-[320px] w-full">
          <div>
            <h1 className="text-white font-arimo flex flex-col items-start">
              <span className="-mb-1">WITHIN</span>
              <span className="font-[700]">MYSELF</span>
            </h1>
          </div>
          <div>
            <h1 className="text-white font-arimo flex flex-col items-start">
              <span className="-mb-1">WITHIN</span>
              <span className="font-[700]">OURSELVES</span>
            </h1>
          </div>
          <div>
            <h1 className="text-white font-arimo flex flex-col items-start">
              <span className="-mb-1">BEYOND</span>
              <span className="font-[700]">OURSELVES</span>
            </h1>
          </div>
        </div>

        <div className='w-screen mt-20 bottom-0'>
          <img src={pastEventDoc} className='w-[500px]' alt='Past Event' />
          <Footer />
        </div>
      </div>
    </section>
  );
}
