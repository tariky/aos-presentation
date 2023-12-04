"use client";

import Image from "next/image";
import {
	Aperture,
	ArrowBigRight,
	DraftingCompass,
	MousePointerClick,
	MoveRight,
	Store,
} from "lucide-react";
import logoImage from "../public/logo.svg";

import Lottie from "lottie-react";
import animation from "../public/Animation.json";
import SolutionItem from "@/components/SolutionItem";
import { motion, Variants } from "framer-motion";
import React from "react";
import Reviews from "@/components/Reviews";
import Navigation from "@/components/Navigation";
import code from "../public/code.svg";
import { Element, scroller } from "react-scroll";

const heroMessages = [
	{
		id: 1,
		content: "jedinstvena rješenja",
		color: "text-white",
	},
	{
		id: 2,
		content: "web stranice",
		color: "text-emerald-400",
	},
	{
		id: 3,
		content: "web trgovine",
		color: "text-blue-400",
	},
	{
		id: 4,
		content: "web aplikacije",
		color: "text-red-400",
	},
];

const cardVariants: Variants = {
	offscreen: {
		y: -50,
	},
	onscreen: {
		y: 0,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

const variantsSolutions = {
	offscreen: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	onscreen: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export default function Home() {
	const [index, setIndex] = React.useState<number>(0);
	const [showContact, setShowContact] = React.useState<boolean>(false);

	React.useEffect(() => {
		const id = setInterval(() => {
			setIndex((state) => {
				if (state >= heroMessages.length - 1) return 0;
				return state + 1;
			});
		}, 2000);
		return () => clearInterval(id);
	}, []);
	return (
		<main className="container mx-auto bg-slate-950 text-slate-200">
			<Navigation />
			<Element name="hero">
				<div className="px-6 pt-[40px] w-full sm:grid sm:grid-cols-2 sm:h-[70vh] sm:pt-[100px]">
					<section className="flex flex-col mt-20 sm:mt-44">
						<h1 className="font-black text-3xl sm:text-5xl relative">
							Mi pravimo
							<br />
							<motion.div
								key={heroMessages[index].id}
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -20, opacity: 0 }}
								transition={{ ease: "easeInOut" }}
								style={{ position: "absolute" }}
								className={`${heroMessages[index].color} sm:mt-2`}
							>
								{heroMessages[index].content}
							</motion.div>
						</h1>
						<p className="text-sm mt-14 sm:text-lg sm:mt-20 text-slate-400">
							Spajamo maštu, dizajn i inžinjerstvo u jednu cjelinu...
						</p>
						<div>
							<button
								onClick={() => {
									scroller.scrollTo("contact", {
										duration: 1500,
										delay: 300,
										smooth: true,
										offset: -50, // Scrolls to element + 50 pixels down the page
										// ... other options
									});
									setShowContact(true);
								}}
								className="uppercase font-bold mt-16 bg-emerald-400 px-9 py-2 rounded-lg text-slate-950"
							>
								Kontaktiraj nas
							</button>
						</div>
					</section>
					<section className="mt-10">
						<Lottie animationData={animation} loop={true} />
					</section>
				</div>
			</Element>
			<Element name="solutions">
				<motion.div
					id="solutions"
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.3 }}
					className="flex flex-col px-6"
				>
					<motion.div variants={cardVariants}>
						<div className="flex flex-col sm:text-center sm:mt-20">
							<h4 className="text-emerald-400">Toolkit</h4>
							<h1 className="text-3xl font-bold my-4">
								Set alata za upješnu prodaju
							</h1>
							<p className="text-md text-slate-400">
								Nudimo sve alate za brzo pokretanje biznisa, a ukoliko
								već imate uhodan biznis integracija će biti jednostavna
								i brza.
							</p>
						</div>
						<motion.div
							className="flex flex-col mt-9 gap-9 sm:grid sm:grid-cols-2 sm:mt-20"
							variants={variantsSolutions}
						>
							<SolutionItem
								Icon={DraftingCompass}
								title="Razvoj aplikacija"
								description="Pružamo cutting-edge web aplikacije koje ne samo da optimiziraju poslovne procese, već i stvaraju nevjerojatno korisničko iskustvo."
							/>
							<SolutionItem
								Icon={MousePointerClick}
								title="Web stranice"
								description="Naš tim za web dizajn i razvoj stvara web stranice koje se ističu, bilo da je riječ o elegantnom korporativnom webu ili privlačnom osobnom blogu. "
							/>
							<SolutionItem
								Icon={Store}
								title="Web trgovine"
								description="S intuitivnim korisničkim sučeljem i naprednim alatima za upravljanje trgovinom, omogućujemo malim i velikim trgovcima da se šire i ostvare impresivne prodajne rezultate."
							/>

							<SolutionItem
								Icon={Aperture}
								title="Produkt fotografija"
								description="Pružamo klijentima neodoljive vizualne prikaze njihovih proizvoda. Naš tim iskusnih fotografa i dizajnera pažljivo komponira svaku sliku, koristeći najnoviju opremu i tehnike kako bi istaknuli jedinstvene karakteristike i kvalitetu proizvoda."
							/>
						</motion.div>
					</motion.div>
				</motion.div>
			</Element>
			<Element name="reviews">
				<Reviews />
			</Element>
			<Element name="contact">
				<section className="bg-emerald-400 mt-10 sm:mt-40 px-6 py-10 sm:px-16 sm:py-12 flex flex-col  sm:grid sm:grid-cols-2 sm:h-[400px]">
					<div className="flex flex-col gap-6">
						<h1 className="text-3xl font-bold text-slate-950">
							Povećaj svoju produktivnost danas!
						</h1>
						<p className="text-sm text-slate-700">
							Započnimo razgovor o vašim potrebama danas! Odaberite datum
							i vrijeme za zakazivanje razgovora, i zajedno ćemo
							istražiti kako vam možemo pomoći postići vaše ciljeve.
						</p>
						<div className="hidden sm:flex items-center gap-6">
							<span className="text-xl font-medium text-slate-950">
								Skeniraj kod za javljanje
							</span>
							<MoveRight className="text-slate-950" />
						</div>
						<motion.button
							animate={{
								scale: [1, 1.1, 1.1, 1, 1],
							}}
							transition={{
								duration: 1,
								ease: "easeInOut",
								times: [0, 0.2, 0.5, 0.8, 1],
								repeat: Infinity,
								repeatDelay: 1,
							}}
							onClick={() => {
								setShowContact(true);
							}}
							className="uppercase font-bold bg-white px-9 py-2 rounded-lg text-slate-950 sm:hidden"
						>
							Kontaktiraj nas
						</motion.button>
						{showContact && (
							<div className="bg-white text-slate-950 flex flex-col p-6 rounded-lg sm:hidden">
								<h2 className="text-lg font-bold">Tarik Čaplja</h2>
								<span className="text-slate-600">CEO</span>
								<span className="mt-2">+387 60 320 4600</span>
								<span>upit@aos.ba</span>
							</div>
						)}
					</div>
					<div className="items-center justify-end hidden sm:flex">
						<Image
							src={code}
							alt="qr code"
							className="h-[300px] w-[300px] hover:-translate-y-1 transition ease-in"
						/>
					</div>
				</section>
			</Element>
			<section className="flex flex-col px-6 py-10">
				<span className="font-medium text-xl">Navigacija</span>
				<div className="flex flex-col mt-8 gap-3">
					<span
						className="font-regular text-lg hover:underline"
						onClick={() => {
							scroller.scrollTo("hero", {
								duration: 1500,
								delay: 300,
								smooth: true,
								offset: -50, // Scrolls to element + 50 pixels down the page
								// ... other options
							});
						}}
					>
						Početna
					</span>
					<span
						className="font-regular text-lg hover:underline"
						onClick={() => {
							scroller.scrollTo("solutions", {
								duration: 1500,
								delay: 300,
								smooth: true,
								offset: -50, // Scrolls to element + 50 pixels down the page
								// ... other options
							});
						}}
					>
						Rješenja
					</span>
					<span
						className="font-regular text-lg hover:underline"
						onClick={() => {
							scroller.scrollTo("reviews", {
								duration: 1500,
								delay: 300,
								smooth: true,
								offset: -50, // Scrolls to element + 50 pixels down the page
								// ... other options
							});
						}}
					>
						Reference
					</span>
					<span
						className="font-regular text-lg hover:underline"
						onClick={() => {
							scroller.scrollTo("contact", {
								duration: 1500,
								delay: 300,
								smooth: true,
								offset: -50, // Scrolls to element + 50 pixels down the page
								// ... other options
							});
						}}
					>
						Kontaktiraj nas
					</span>
				</div>
				<Image src={logoImage} alt="logo" className="mt-16" />
				<span className="font-regular text-sm text-slate-400 mt-3">
					© 2023 Lunatik d.o.o. Sva prava zadržna.
				</span>
			</section>
		</main>
	);
}
