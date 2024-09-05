import LogoTED from '../assets/Icons/ted-logo.svg';
import LinkedIn from '../assets/Icons/linkedin.svg';
import Twitter from '../assets/Icons/twitter.svg';
import Tiktok from '../assets/Icons/tiktok.svg';
import Instagram from '../assets/Icons/instagram.svg';

export default function Footer() {
  return (
    <footer className='mx-5 my-4 flex justify-between items-center'>
      <div>
        <img src={LogoTED} className='w-[130px]' alt="TEDx Logo" />
      </div>
      <div className='flex space-x-4'>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} className='w-[15px]' alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} className='w-[15px]' alt="Instagram" />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img src={Tiktok} className='w-[15px]' alt="Tiktok" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={Twitter} className='w-[15px]' alt="Twitter" />
        </a>
      </div>
    </footer>
  );
}
