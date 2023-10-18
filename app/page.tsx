"use client";

import Image from "next/image";
import {
	Aperture,
	DraftingCompass,
	MousePointerClick,
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
		x: -500,
	},
	onscreen: {
		x: 0,
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
		<main className="container">
			<Navigation />
			<div className="px-6 mt-[150px]">
				<section className="flex flex-col mt-20">
					<h1 className="font-black text-3xl relative">
						Mi pravimo
						<br />
						<motion.div
							key={heroMessages[index].id}
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -20, opacity: 0 }}
							transition={{ ease: "easeInOut" }}
							style={{ position: "absolute" }}
							className={`${heroMessages[index].color}`}
						>
							{heroMessages[index].content}
						</motion.div>
					</h1>
					<p className="text-sm mt-14">
						Spajamo maštu, dizajn i inžinjerstvo u jednu cjelinu
					</p>
					<div>
						<button className="uppercase font-bold mt-16 bg-emerald-400 px-9 py-2 rounded-lg text-slate-950">
							Kontaktiraj nas
						</button>
					</div>
				</section>
				<section className="mt-10">
					<Lottie animationData={animation} loop={true} />
				</section>
			</div>
			{/* <div className="h-[100vh] w-[100%] bg-white z-10 absolute top-0">
				<header className="bg-red py-4 px-6 flex justify-between">
					<Image src={logoDarkImage} alt="logo" />
					<X size={40} strokeWidth={1} color="black" />
				</header>
				<section className="flex flex-col px-6 mt-16 gap-6 text-slate-950">
					<NavItem title="Početna" href="/" />
					<NavItem title="Rješenja" href="/" />
					<NavItem title="Reference" href="/" />
					<NavItem title="Kontaktiraj nas" href="/" />
				</section>
			</div> */}
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.3 }}
				className="flex flex-col px-6"
			>
				<motion.div variants={cardVariants}>
					<div className="flex flex-col">
						<h4 className="text-emerald-400">Toolkit</h4>
						<h1 className="text-3xl font-bold my-4">
							Set alata za upješnu prodaju
						</h1>
						<p className="text-md text-slate-300">
							Nudimo sve alate za brzo pokretanje biznisa, a ukoliko već
							imate uhodan biznis integracija će biti jednostavna i brza.
						</p>
					</div>
					<motion.div
						className="flex flex-col mt-9 gap-9"
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
			<Reviews />
			<section className="bg-emerald-400 mt-10 px-6 py-10 flex flex-col gap-6">
				<h1 className="text-3xl font-bold text-slate-950">
					Povećaj svoju produktivno danas!
				</h1>
				<p className="text-sm text-slate-700">
					Započnimo razgovor o vašim potrebama danas! Odaberite datum i
					vrijeme za zakazivanje razgovora, i zajedno ćemo istražiti kako
					vam možemo pomoći postići vaše ciljeve.
				</p>

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
					className="uppercase font-bold bg-white px-9 py-2 rounded-lg text-slate-950"
				>
					Kontaktiraj nas
				</motion.button>
			</section>
			<section className="flex flex-col px-6 py-10">
				<span className="font-medium text-xl">Navigacija</span>
				<div className="flex flex-col mt-8 gap-3">
					<span className="font-regular text-lg">Početna</span>
					<span className="font-regular text-lg">Rješenja</span>
					<span className="font-regular text-lg">Reference</span>
					<span className="font-regular text-lg">Kontaktiraj nas</span>
				</div>
				<Image src={logoImage} alt="logo" className="mt-16" />
				<span className="font-regular text-sm text-slate-400 mt-3">
					© 2023 Lunatik d.o.o. Sva prava zadržna.
				</span>
			</section>
		</main>
	);
}
