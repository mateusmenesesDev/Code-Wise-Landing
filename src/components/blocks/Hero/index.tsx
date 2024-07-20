import Image from 'next/image';

import AwsIcon from '~/components/icons/AwsIcon';
import DockerIcon from '~/components/icons/DockerIcon';
import FastApiIcon from '~/components/icons/FastApiIcon';
import JavascriptIcon from '~/components/icons/JavascriptIcon';
import NextjsIcon from '~/components/icons/NextjsIcon';
import PythonIcon from '~/components/icons/PythonIcon';
import TailwindIcon from '~/components/icons/TailwindIcon';
import TypescriptIcon from '~/components/icons/Typescript';
import Button from '~/components/ui/Button';

import blurImage from '/public/images/hero/blur.png';
import dashboardImage from '/public/images/hero/dashboard.png';
import ellipsesImage from '/public/images/hero/ellipses.png';

export default function Hero() {
	return (
		<div>
			<h1 className="text-center text-2xl sm:text-3xl md:text-[4rem] md:leading-[110%]">
				Become a{' '}
				<span className="rounded-md bg-primary px-4 font-semibold text-white">
					true
				</span>{' '}
				<br />{' '}
				<span className="font-medium text-primary">Fullstack Developer</span>
			</h1>
			<div>
				<div className="absolute top-96 right-0">
					<Image src={blurImage} alt="Hero Blur Image" className="h-52 w-52" />
				</div>
				<div className="absolute top-80 right-0">
					<Image src={blurImage} alt="Hero Blur Image" className="h-52 w-52" />
				</div>
				<div className="absolute top-0 left-0 z-20 flex w-full items-center justify-center overflow-hidden">
					<Image
						src={ellipsesImage}
						alt="Ellipse Image"
						className="h-dvh w-full object-cover opacity-15"
					/>
				</div>
				<div className="relative hidden lg:block">
					<div>
						<div className="absolute top-[-11rem] left-[3rem] z-50 flex h-[4.875rem] w-[4.875rem] items-center justify-center rounded-full bg-white drop-shadow-2xl 2xl:left-[18rem]">
							<TypescriptIcon priority className="h-7 w-7" />
						</div>
						<div className="absolute top-12 left-[12rem] z-50 flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-white drop-shadow-2xl">
							<JavascriptIcon priority className="h-6 w-6" />
						</div>
						<div className="absolute top-2 left-[-2rem] z-50 flex h-[4.875rem] w-[4.875rem] items-center justify-center rounded-full bg-white drop-shadow-2xl">
							<TailwindIcon priority className="h-9 w-9 object-contain" />
						</div>
						<div className="absolute top-[16rem] left-[6rem] z-50 flex h-[3.875rem] w-[3.875rem] items-center justify-center rounded-full bg-white drop-shadow-2xl">
							<DockerIcon priority className="h-7 w-7 object-contain" />
						</div>
					</div>
					<div className="absolute right-32">
						<div className="absolute top-[-11rem] left-[-2rem] z-50 flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full bg-white drop-shadow-2xl 2xl:left-[-12rem]">
							<FastApiIcon priority className="h-9 w-9" />
						</div>
						<div className="absolute top-12 left-[5rem] z-50 flex h-[4.875rem] w-[4.875rem] items-center justify-center rounded-full bg-white drop-shadow-2xl 2xl:left-[-9rem]">
							<NextjsIcon priority className="h-9 w-9" />
						</div>
						<div className="absolute top-[-3rem] left-[3rem] z-50 flex h-[3.875rem] w-[3.875rem] items-center justify-center rounded-full bg-white drop-shadow-2xl 2xl:top-2 2xl:left-[2rem]">
							<AwsIcon priority className="h-11 w-11" />
						</div>
						<div className="absolute top-[22rem] z-50 flex h-[4.875rem] w-[4.875rem] items-center justify-center rounded-full bg-white drop-shadow-2xl 2xl:left-[-4rem]">
							<PythonIcon priority className="h-9 w-9" />
						</div>
					</div>
				</div>
			</div>
			<div className="relative z-30">
				<h1 className="mt-2 text-center sm:text-lg lg:text-xl">
					Learn how to become a fullstack developer acknowledge by companies{' '}
					<br />
					<span className="mt-3 block uppercase">
						and get your{' '}
						<span className="rounded-lg bg-primary p-1 text-white">
							dream job
						</span>
					</span>
				</h1>
				<div className="mt-11 mb-8 flex justify-center">
					<Button>Schedule Free Mentorship</Button>
				</div>
				<div className="flex justify-center">
					<Image
						src={dashboardImage}
						alt="Hero Image"
						className="lg:max-w-[68.125rem]"
					/>
				</div>
			</div>
		</div>
	);
}
