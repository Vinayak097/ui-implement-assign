// src/components/Footer.js

import React from 'react';
import { Button } from '../components/ui/button';
import { TbBrandSupabase } from 'react-icons/tb';
import { FaGithub } from "react-icons/fa6";
import { PiXLogo } from "react-icons/pi";
import { SiDiscord } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="  ">
      <div className="  ">
        
        <div className='bg-neutral-100 dark:bg-slate-900'>
        <div className=" p-10 flex justify-center rounded-md border-b w-full mb-8">
          <span>We protect your data. <a href="#" className="text-green-500">More on Security</a></span>
          <span>✔ SOC2 Type 2 Certified</span>
          <span>✔ HIPAA Compliant</span>
        </div>
        <div className="grid pt-10 container grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center md:text-left">
            <div className='text-center flex flex-col gap-6 col-span-2  items-center'>
                <div className='flex items-center gap-1 '>
                    <TbBrandSupabase className='text-3xl   rounded-md items-center '/> 
                    <h1 className='text-2xl font-serif '>Supabase</h1>
                </div>
                <div className='flex gap-3 text-2xl '>
                    <PiXLogo></PiXLogo>
                    <FaGithub></FaGithub>
                    <SiDiscord></SiDiscord>
                    <BsYoutube></BsYoutube>
                </div>
            </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Product</h2>
            <ul>
              <li><a href="#" className="hover:underline">Database</a></li>
              <li><a href="#" className="hover:underline">Auth</a></li>
              <li><a href="#" className="hover:underline">Functions</a></li>
              <li><a href="#" className="hover:underline">Realtime</a></li>
              <li><a href="#" className="hover:underline">Storage</a></li>
              <li><a href="#" className="hover:underline">Vector</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">GA Week</a></li>
            </ul>
          </div>
          <div> 
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">System Status</a></li>
              <li><a href="#" className="hover:underline">Become a Partner</a></li>
              <li><a href="#" className="hover:underline">Integrations</a></li>
              <li><a href="#" className="hover:underline">Experts</a></li>
              <li><a href="#" className="hover:underline">Brand Assets / Logos</a></li>
              <li><a href="#" className="hover:underline">Security and Compliance</a></li>
              <li><a href="#" className="hover:underline">DPA</a></li>
              <li><a href="#" className="hover:underline">SOC2</a></li>
              <li><a href="#" className="hover:underline">HIPAA</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Developers</h2>
            <ul>
              <li><a href="#" className="hover:underline">Documentation</a></li>
              <li><a href="#" className="hover:underline">Changelog</a></li>
              <li><a href="#" className="hover:underline">Contributing</a></li>
              <li><a href="#" className="hover:underline">Open Source</a></li>
              <li><a href="#" className="hover:underline">SupaSquad</a></li>
              <li><a href="#" className="hover:underline">DevTo</a></li>
              <li><a href="#" className="hover:underline">RSS</a></li>
            </ul>
          </div>
          <div className='pb-16'>
            <h2 className="text-lg font-semibold ">Company</h2>
            <ul>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Customer Stories</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Company</a></li>
              <li><a href="#" className="hover:underline">General Availability</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Privacy Settings</a></li>
              <li><a href="#" className="hover:underline">Acceptable Use Policy</a></li>
              <li><a href="#" className="hover:underline">Support Policy</a></li>
              <li><a href="#" className="hover:underline">Service Level Agreement</a></li>
              <li><a href="#" className="hover:underline">Humans.txt</a></li>
              <li><a href="#" className="hover:underline">Lawyers.txt</a></li>
              <li><a href="#" className="hover:underline">Security.txt</a></li>
            </ul>
          </div>
          </div>
        </div>
        <div className="bg-neutral-100 dark:bg-slate-900 border-t m-wl-xl text-center py-2 pb-10">
          <p>&copy; Supabase Inc</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
