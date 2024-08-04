import React from 'react'


let username=[
    "@varlenneto",
    "@thatguy_tex",
    "@damlakoksal",
    "@kevcodez",
    "@justinjunodev",
    "@IxoyeDesign",
    "@justinjunodev",
    "@KenTheRogers"
]
import dp1 from '../../public/images/dp1.webp'
import dp2 from '../../public/images/dp2.webp'
import dp3 from '../../public/images/dp3.webp'
import dp4 from '../../public/images/dp4.webp'
import { Divide } from 'lucide-react'
import ButtonCustom from './ButtonCustom'
import { Button } from '../components/ui/button'
let images={
    "dp1":dp1,
    "dp2":dp2,
    dp3,
    dp4
};
let texts=["",
    "I've been using @supabase for two personal projects and it has been amazing being able to use the power of Postgres and don't have to worry about the backend",
    "Contributing to open-source projects and seeing merged PRs gives enormous happiness! Special thanks to @supabase, for giving this opportunity by staying open-source and being junior-friendly✌🏼",
    "Over the course of a few weeks, we migrated 125.000 users (email/pw, Gmail, Facebook, Apple logins) from Auth0 to @supabase and have now completed the migration. I'm just glad the migration is done 😅 Went well, besides a few edge cases (duplicate emails/linked accounts)",
    "@supabase is just 🤯 Now I see why a lot of people love using it as a backend for their applications. I am really impressed with how easy it is to set up an Auth and then just code it together for the frontend. @IngoKpp now I see your joy with Supabase #coding #fullstackwebdev",
    "Y'all @supabase + @nextjs is amazing! 🙌 Barely an hour into a proof-of-concept and already have most of the functionality in place. 🤯🤯🤯",
    "Holy crap. @supabase is absolutely incredible. Most elegant backend as a service I've ever used. This is a dream.",
    "Using @supabase I'm really pleased on the power of postgres (and sql in general). Despite being a bit dubious about the whole backend as a service thing I have to say I really don't miss anything. The whole experience feel very robust and secure."
]
let reviews=[{
    img:dp1,
    username:"@varlenneto",
    text:"Working with @supabase has been one of the best dev experiences I've had lately. Incredibly easy to set up, great documentation, and so many fewer hoops to jump through than the competition. I definitely plan to use it on any and all future projects.",
},{
    img:dp2,
    username:"@thatguy_tex",
    text:"Contributing to open-source projects and seeing merged PRs gives enormous happiness! Special thanks to @supabase, for giving this opportunity by staying open-source and being junior-friendly✌🏼",
},
{
    img:dp3,
    username:"@damlakoksal",
    text:"Over the course of a few weeks, we migrated 125.000 users (email/pw, Gmail, Facebook, Apple logins) from Auth0 to @supabase and have now completed the migration. I'm just glad the migration is done 😅 Went well, besides a few edge cases (duplicate emails/linked accounts)"
},{
    img:dp4,
    username:"@kevcodez",
    text:"@supabase is just 🤯 Now I see why a lot of people love using it as a backend for their applications. I am really impressed with how easy it is to set up an Auth and then just code it together for the frontend. @IngoKpp now I see your joy with Supabase #coding #fullstackwebdev"
},
{
    img:dp1,
    username:"@justinjunodev",
    text:"Y'all @supabase + @nextjs is amazing! 🙌 Barely an hour into a proof-of-concept and already have most of the functionality in place. 🤯🤯🤯",
},
{
    img:dp2,
    username:"@IxoyeDesign",
    text:"Holy crap. @supabase is absolutely incredible. Most elegant backend as a service I've ever used. This is a dream."
},
{
    img:dp3,
    username:"@IxoyeDesign",
    text:"Using @supabase I'm really pleased on the power of postgres (and sql in general). Despite being a bit dubious about the whole backend as a service thing I have to say I really don't miss anything. The whole experience feel very robust and secure."
},
{
    img:dp4,
    username:"@KenTheRogers",
    text:"I've been using @supabase for two personal projects and it has been amazing being able to use the power of Postgres and don't have to worry about the backend"
}
]
function Fidbackcard(){
  return (
    <>
    <div className=' columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4  relative transition-all  h-screen'>
        <div className='absolute bottom-0 left-0 z-10 w-full h-[400px] bg-gradient-to-t from-background via-background'></div>
        {reviews.map(profile=> <div className='p-2'>
            <div  className=' p-4 border rounded-lg '>
                <div className='relative'>
                    <div className='flex items-center gap-2'>
                        <div className='h-10 w-10 overflow-hidden rounded-full border border-control'>
                            <img src={profile.img} alt='image'/>
                        </div>
                        <h3 className='text-foreground text-sm font-medium'>{profile.username}</h3>
                        <div className='absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black'>
                        <svg className='h-[12px] w-[12px] absolute'><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                        </div>    
                    </div>
                </div>
                <div>
                <p className='text-foreground-muted mt-3 text-base'>{profile.text}</p>                    
                </div>
            </div>
        
        </div>)}
        <div>
            
        </div>
        
    </div>
    <div className='z-10 text-center'>
        <Button className='border dark:bg-slate-900 bg-white text-black dark:text-white hover:bg-gray-200 hover:dark:bg-slate-800'>Show More</Button>
    </div>
    </>
  )
}

export default Fidbackcard