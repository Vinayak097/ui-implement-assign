
import Mozilla from '../assets/mozilla.svg';
import OnePassword from '../assets/1password.svg';
import PwC from '../assets/pwc.svg';
import Pika from '../assets/pika.svg';
import Humata from '../assets/humata.svg';
import Krea from '../assets/krea.svg';
import Udio from '../assets/udio.svg';
import LangChain from '../assets/langchain.svg';
import Resend from '../assets/resend.svg';
import Loops from '../assets/loops.svg';
import Mobbin from '../assets/mobbin.svg';
import Gopuff from '../assets/gopuff.svg';
import Chatbase from '../assets/chatbase.svg';
import Betashares from '../assets/betashares.svg';

const logos = [
  { src: Mozilla, alt: 'Mozilla' },
  { src: OnePassword, alt: '1Password' },
  { src: PwC, alt: 'PwC' },
  { src: Pika, alt: 'Pika' },
  { src: Humata, alt: 'Humata' },
  { src: Krea, alt: 'Krea' },
  { src: Udio, alt: 'Udio' },
  { src: LangChain, alt: 'LangChain' },
  { src: Resend, alt: 'Resend' },
  { src: Loops, alt: 'Loops' },
  { src: Mobbin, alt: 'Mobbin' },
  { src: Gopuff, alt: 'Gopuff' },
  { src: Chatbase, alt: 'Chatbase' },
  { src: Betashares, alt: 'Betashares' },
];

const CompanyLogos = () => {
  return (
    <div className=' lg:px-48 p-10 md:p-28'>
    <div className="flex  justify-center items-center  flex-wrap space-x-4 space-y-2 gap-6 dark:text-slate-900">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className="lg:h-5 h-3 md:h-4"
        />
      ))}
      
    </div>
    </div>
  );
};

export default CompanyLogos;
