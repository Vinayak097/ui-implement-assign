import React from 'react';
import Navbar from '../usecomponents/Navbar';
import Hero from '../usecomponents/Hero';
import CompanyLogos from '../usecomponents/CompanyLogos';
import Database from '../usecomponents/featureCards/Bigcards';
import { MdOutlineSdStorage } from 'react-icons/md';
import { BsBrowserEdge } from 'react-icons/bs';
import { SiWebauthn } from 'react-icons/si';
import Featurecard from '../usecomponents/featureCards/Featurecards';
import { LuMousePointer2 } from 'react-icons/lu';
import databaselogo from '../assets/databaselogo.png'
import { GoDatabase } from 'react-icons/go';
import { PiVectorThree } from 'react-icons/pi';
import Joincomunity from '../usecomponents/Joincomunity';
import Fidbackcard from '../usecomponents/Fidbackcard';
import Footer from '../usecomponents/Footer';
function Home() {
  return (
    <div>
      <div className='h-screen'>
        <Navbar />
        <Hero />
      </div>
      <main className="container mx-auto px-4 py-8">
        <CompanyLogos />
        {/* Section features */}
        <div className='lg:p-24 md:p-24 p-0'>
          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='col-span-1 lg:col-span-2'>
              <Database 
                header={'Database'} 
                description={'Every project is a full Postgres database, the world\'s most trusted relational database'} 
                Icon={GoDatabase} 
                img={"databaselogo"} 
                points={["100% portable", "Built-in Auth with RLS", "Easy to extend"]}
              />
            </div>
            <Featurecard 
              urlclass={"authcard"} 
              header={'Authentication'} 
              description={'Add user sign-ups and logins, securing your data with Row Level Security.'} 
              Icon={SiWebauthn} 
            />
            <Featurecard 
              urlclass={"edgecard"} 
              Icon={BsBrowserEdge} 
              header={'Edge Functions'} 
              description={'Easily write custom code without deploying or scaling servers.'} 
            />
            <Featurecard 
              urlclass={""} 
              Icon={MdOutlineSdStorage} 
              header={'Storage'} 
              description={'Store, organize, and serve large files, from videos to images.'} 
            />
            <Featurecard 
              urlclass={""} 
              header={'Realtime'} 
              description={'Build multiplayer experiences with real-time data synchronization.'} 
              Icon={LuMousePointer2} 
            />
            <div className='col-span-1 lg:col-span-2'>
              <Database 
                header={'Vector'} 
                description={'Integrate your favorite ML model to store, index, and search vector embeddings.'} 
                Icon={PiVectorThree} 
                img={'vector'} 
                points={["Open AI", "Hugging Face"]}
              />
            </div>
          </section>
          <Joincomunity></Joincomunity>
          <div>
            <Fidbackcard></Fidbackcard>
          </div>
          
        </div>
        
      </main>
      <div className='border-t'>
            <Footer></Footer>
          </div>
    </div>
  );
}

export default Home;
