import Image from 'next/image';


import blurImage from '/public/images/hero/blur.png';
import ellipsesImage from '/public/images/hero/ellipses.png';
import dashboardImage from '/public/images/hero/dashboard.png';
import Button from '~/components/ui/Button';
import TypescriptIcon from '~/components/icons/Typescript';
import NextjsIcon from '~/components/icons/NextjsIcon';
import JavascriptIcon from '~/components/icons/JavascriptIcon';
import TailwindIcon from '~/components/icons/TailwindIcon';
import DockerIcon from '~/components/icons/DockerIcon';
import AwsIcon from '~/components/icons/AwsIcon';
import PythonIcon from '~/components/icons/PythonIcon';
import FastApiIcon from '~/components/icons/FastApiIcon';

export default function Hero() {
  return (
    <div>
      <h1 className='text-2xl sm:text-3xl md:leading-[110%] md:text-[4rem] text-center'>Become a <span className='bg-primary text-white px-4 font-semibold rounded-md'>true</span> <br /> <span className='text-primary font-medium'>Fullstack Developer</span></h1>
      <div>
        <div className='absolute top-96 right-0'>
          <Image src={blurImage} alt='Hero Blur Image' className='h-52 w-52' />
        </div>
        <div className='absolute top-80 right-0'>
          <Image src={blurImage} alt='Hero Blur Image' className='h-52 w-52' />
        </div>
        <div className='absolute w-full left-0 overflow-hidden top-0 z-20 flex justify-center items-center'>
          <Image src={ellipsesImage} alt='Ellipse Image' className='h-dvh w-full object-cover opacity-15' />
        </div>
        <div className='hidden lg:block relative'>
          <div>
            <div className={`drop-shadow-2xl left-[3rem] 2xl:left-[18rem] top-[-11rem] absolute z-50 bg-white w-[4.875rem] h-[4.875rem] rounded-full flex justify-center items-center`}>
              <TypescriptIcon priority className='w-7 h-7' />
            </div>
            <div className={`drop-shadow-2xl left-[12rem] top-12 absolute z-50 bg-white w-[2.875rem] h-[2.875rem] rounded-full flex justify-center items-center`}>
              <JavascriptIcon priority className='w-6 h-6' />
            </div>
            <div className={`drop-shadow-2xl left-[-2rem] top-2 absolute z-50 bg-white w-[4.875rem] h-[4.875rem] rounded-full flex justify-center items-center`}>
              <TailwindIcon priority className='w-9 h-9 object-contain' />
            </div>
            <div className={`drop-shadow-2xl left-[6rem] top-[16rem] absolute z-50 bg-white w-[3.875rem] h-[3.875rem] rounded-full flex justify-center items-center`}>
              <DockerIcon priority className='w-7 h-7 object-contain' />
            </div>
          </div>
          <div className='absolute right-32'>
            <div className={`drop-shadow-2xl left-[-2rem] 2xl:left-[-12rem] top-[-11rem] absolute z-50 bg-white w-[2.875rem] h-[2.875rem] rounded-full flex justify-center items-center`}>
              <FastApiIcon priority className='w-9 h-9' />
            </div>
             <div className={`drop-shadow-2xl left-[5rem] 2xl:left-[-9rem] top-12 absolute z-50 bg-white w-[4.875rem] h-[4.875rem] rounded-full flex justify-center items-center`}>
              <NextjsIcon priority className='w-9 h-9' />
            </div>
            <div className={`drop-shadow-2xl left-[3rem] 2xl:left-[2rem] top-[-3rem] 2xl:top-2 absolute z-50 bg-white w-[3.875rem] h-[3.875rem] rounded-full flex justify-center items-center`}>
              <AwsIcon priority className='w-11 h-11' />
            </div>
            <div className={`drop-shadow-2xl 2xl:left-[-4rem] top-[22rem] absolute z-50 bg-white w-[4.875rem] h-[4.875rem] rounded-full flex justify-center items-center`}>
              <PythonIcon priority className='w-9 h-9' />
            </div> 
          </div>
        </div>
      </div>
      <div className='relative z-30'>

      <h1 className='text-center sm:text-lg lg:text-xl mt-2'>Learn how to become a fullstack developer acknowledge by companies <br/><span className='mt-3 block uppercase'>and get your <span className='bg-primary text-white p-1 rounded-lg'>dream job</span></span></h1>
      <div className='flex justify-center mt-11 mb-8'>
        <Button>Schedule Free Mentorship</Button>
      </div>
      <div className='flex justify-center'>
        <Image src={dashboardImage} alt='Hero Image' className='lg:max-w-[68.125rem]' />
      </div>
      </div>
    </div>
  );
}
