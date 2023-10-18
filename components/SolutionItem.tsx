import { LucideIcon } from "lucide-react";
import React from "react";
import { Variants, motion } from "framer-motion";

type Props = {
	title: string;
	description: string;
	Icon: LucideIcon;
};

const cardVariants: Variants = {
	offscreen: {
		x: -300,
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

export default function SolutionItem({ title, description, Icon }: Props) {
	return (
		<motion.div
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.4 }}
		>
			<motion.div className="flex gap-2" variants={cardVariants}>
				<div className="bg-emerald-400 flex-shrink-0 rounded-xl h-[4rem] w-[4rem] flex items-center justify-center">
					<Icon color="black" size={30} strokeWidth={1} />
				</div>
				<div className="flex flex-col ml-5">
					<h4 className="font-bold mt-2 mb-3 text-lg">{title}</h4>
					<p className="text-slate-300 text-sm">{description}</p>
				</div>
			</motion.div>
		</motion.div>
	);
}
