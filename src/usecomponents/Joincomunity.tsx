
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiSvelte } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";

import ButtonCustom from './ButtonCustom';

function Joincomunity() {
  return (
    <div className='text-center pt-10 lg:p-28'>
        <p className='dark:text-gray-400  font-light'>Works seamlessly with 20+ frameworks</p>
        <div className='flex gap-5 justify-center pt-6 text-2xl'>
        <RiNextjsFill></RiNextjsFill>
        <FaReact></FaReact>
        <SiNuxtdotjs></SiNuxtdotjs>
        <SiFlutter></SiFlutter>
        <SiSvelte></SiSvelte>
        <RiVuejsFill></RiVuejsFill>

        </div>
        <div className='flex flex-col pt-10 lg:pt-24 gap-6'>
          <h1 className=' text-3xl font-serif'> Join the community</h1>
          <p className=''>Supported by a network of early advocates, contributors, and champions.</p>
          <div className='flex gap-2 justify-center'>
            <ButtonCustom text={'GitHub discussions'} Icon={BiMessageRounded}>
          </ButtonCustom>
          <ButtonCustom text={'Discord'} Icon={BiMessageRounded}></ButtonCustom>
          </div>
        </div>
    </div>
  )
}

export default Joincomunity